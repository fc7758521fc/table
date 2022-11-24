import { _decorator, Component, Node, Prefab, Label, input, Size,Input,UITransform, Button, director,Sprite,EventTarget,SpriteFrame, math} from 'cc';
import { UIManager } from '../UIManager';
import { GlobalEnum } from '../global/GlobalEnum'
const { ccclass, property } = _decorator;
import { gFunc } from '../global/gFunc'
import { EventMessage } from '../global/eventManager'
import { russiaGameCubeTools } from './russiaGameCubeTools'

cc.myEvent = new EventTarget();

@ccclass('russiaGame')
export class russiaGame extends Component{
    cellSize = 40
    cubeStartPosy = 380
    cubeStateTable = []

    onLoad(){
        let backBtn = cc.find("nodeLayer/back", this.node)
        backBtn.on(Button.EventType.CLICK, this.back, this);

        input.on(Input.EventType.KEY_DOWN, this.keyDown, this);

        russiaGameCubeTools.onLoad()
        this.initBoard()
    }

    keyDown(sender) {
        let oldCubePos = this.nowActiveCube.getPosition()
        if (sender.keyCode == 37) { //left
            if (oldCubePos.x <= -154) {
                return
            } 
            this.nowActiveCube.setPosition(oldCubePos.x - this.cellSize, oldCubePos.y)
        }else if (sender.keyCode == 38){ //top

        }else if (sender.keyCode == 39){ //right
            if (oldCubePos.x >= 246) {
                return
            } 
            this.nowActiveCube.setPosition(oldCubePos.x + this.cellSize, oldCubePos.y)
        }else if (sender.keyCode == 40){ //down

        }
    }

    async initBoard(){
        let playBoard = cc.find("nodeLayer/playBoard", this.node)
        let playBoardPos = playBoard.getPosition()
        let playBoardSize = playBoard.getContentSize()
        let startPosx = playBoardPos.x - playBoardSize.width / 2
        let startPosy = playBoardPos.y - playBoardSize.height / 2

        for (let i = 0; i < 12; i++) {
            for (let j = 0; j< 16; j++) {
                let resource = await gFunc.loadResSync("test_res/public_item_box_2_1/spriteFrame", SpriteFrame) as SpriteFrame; 
                let newNode = new Node();
                let sprite = newNode.addComponent(Sprite);
                newNode.getComponent(Sprite).spriteFrame = resource
                newNode.getComponent(UITransform).setContentSize(new Size(this.cellSize, this.cellSize))
                newNode.setPosition(startPosx + i * this.cellSize + this.cellSize/2,startPosy + j * this.cellSize + this.cellSize/2)
                this.node.addChild(newNode)

                let labelNode = new Node();
                let label = labelNode.addComponent(Label);
                labelNode.setPosition(startPosx + i * this.cellSize + this.cellSize/2,startPosy + j * this.cellSize + this.cellSize/2)
                label.string = startPosy + j * this.cellSize + this.cellSize/2
                label.fontSize = 12
                label.color = new cc.color(0,0,0);
                this.node.addChild(labelNode)
            }
        }

        this.initCube()
    }

    initCube(){
        //先随机生成块
        //然后再随机生成方向
        let rand = math.random(1,5)
        let cubes = russiaGameCubeTools.getCube()
        let cube = cc.instantiate(cubes[0])

        let playBoard = cc.find("nodeLayer/playBoard", this.node)
        let playBoardPos = playBoard.getPosition()
        cube.setPosition(playBoardPos.x - this.cellSize/2,this.cubeStartPosy - this.cellSize/2 + 5)
        this.node.addChild(cube)

        this.schedul = function () {
            let cubePos = cube.getPosition()
            cube.setPosition(cubePos.x, cubePos.y - this.cellSize)

            for(let i = 0; i < cube.children.length; i++) {
                let nowChilds = cube.children[i]
                let lb = nowChilds.getChildByName("lb").getComponent(Label)

                let movePos =  nowChilds.getPosition()
                movePos = cube.getComponent(UITransform).convertToWorldSpaceAR(movePos)
                movePos = this.node.getComponent(UITransform).convertToNodeSpaceAR(movePos)
                lb.string = Math.floor(movePos.y)
            }

            if (cubePos.y <= -154 || this.bottomHasCube()) {
                let allChilds = cube.children
                for(let i = 0; i < allChilds.length; i++) {
                    let stopChilds = allChilds[i]
                    
                    let stopPos =  stopChilds.getPosition()
                    stopPos = cube.getComponent(UITransform).convertToWorldSpaceAR(stopPos)
                    stopPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(stopPos)

                    let childs = allChilds[i]
                    childs.stopPos = stopPos

                    this.cubeStateTable.push(childs)
                }
                this.unschedule(this.schedul);
                this.initCube()
                return
            } 
        }
        this.schedule(this.schedul, 1);

        this.nowActiveCube = cube
    }

    back(){
        UIManager.close()
    }

    bottomHasCube() {
        if (this.cubeStateTable.length <= 0) {
            return false
        }

        let nowCubeChilds = this.nowActiveCube.children

        for(let i = 0; i < nowCubeChilds.length; i++) {
            let nowChilds = nowCubeChilds[i]
            let movePos =  nowChilds.getPosition()
            movePos = this.nowActiveCube.getComponent(UITransform).convertToWorldSpaceAR(movePos)
            movePos = this.node.getComponent(UITransform).convertToNodeSpaceAR(movePos)

            for (let j = 1; j < this.cubeStateTable.length; j++) {
                let stopChilds = this.cubeStateTable[j]

                let a = Math.floor(movePos.y)
                let b = Math.floor(stopChilds.stopPos.y)
                let distanceY = a - b
                console.log("stopPos", distanceY)
                if (distanceY <= this.cellSize) {
                    return true
                }
            }
       }

        return false
    }
}

