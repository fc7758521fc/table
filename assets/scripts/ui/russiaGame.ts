import { _decorator, Component, Node, Prefab, Label, input, Size,Input,Vec3,UITransform, Button, director,Sprite,EventTarget,SpriteFrame, math} from 'cc';
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
    rotIndex = 0

    onLoad(){
        let backBtn = cc.find("nodeLayer/back", this.node)
        backBtn.on(Button.EventType.CLICK, this.back, this);

        input.on(Input.EventType.KEY_DOWN, this.keyDown, this);

        russiaGameCubeTools.onLoad()
        this.initBoard()
    }

    //方块移动旋转检查
    // checkCubeCanMove() {
    //     let nowCubeChilds = this.nowActiveCube.children
    //     let cubeData = this.nowActiveCube.cubeData

    //     //旋转边界检查
    //     let newMovePos = []
    //     for(let i = 0; i < nowCubeChilds.length; i++) {
    //         let nowChilds = nowCubeChilds[i]
    //         if (cubeData[this.rotIndex]) {
    //             newMovePos.push(cubeData[this.rotIndex][i])
    //         }
    //     }

    //     for(let i = 0; i < newMovePos.length; i++) {
    //         let movePos = newMovePos[i]
    //         movePos = this.nowActiveCube.getComponent(UITransform).convertToWorldSpaceAR(movePos)
    //         movePos = this.node.getComponent(UITransform).convertToNodeSpaceAR(movePos)

    //         for (let j = 0; j < this.cubeStateTable.length; j++) {
    //             let stopChilds = this.cubeStateTable[j]

    //             let distanceY = Math.floor(movePos.y) - Math.floor(stopChilds.stopPos.y)
    //             if (Math.floor(stopChilds.stopPos.y) <= Math.floor(movePos.y)) { //已经放置的y坐标大于移动cube的不考虑
    //                 if (distanceY <= this.cellSize) { // y坐标距离小于等于40
    //                     if (Math.floor(movePos.x) == Math.floor(stopChilds.stopPos.x)) { //并且x坐标有重合
    //                         return true
    //                     }
    //                 }
    //             }
    //         }
            
    //         if ((movePos.y) < -196) { //边界检查
    //             return 
    //         }

    //         if ((movePos.x) > 286) { //边界检查
    //             return 
    //         }

    //         if ((movePos.x) < -156) { //边界检查
    //             return 
    //         }
    //     }
    // }

    keyDown(sender) {
        let oldCubePos = this.nowActiveCube.getPosition()

        let self = this
        function checkCanMove(direction:string) {
            let moveX = 0
            if (direction == "left") {
                moveX = -self.cellSize
            }else if (direction == "right") {
                moveX =  self.cellSize
            }

            let newMovePos = [] //移动后的坐标
            let nowCubeChilds = self.nowActiveCube.children
            for(let i = 0; i < nowCubeChilds.length; i++) {
                let nowChilds = nowCubeChilds[i]
                let movePos =  nowChilds.getPosition()
                movePos = self.nowActiveCube.getComponent(UITransform).convertToWorldSpaceAR(movePos)
                movePos = self.node.getComponent(UITransform).convertToNodeSpaceAR(movePos)
                newMovePos.push({x : movePos.x + moveX,  y : movePos.y, z: movePos.z})
            }

            for(let i = 0; i < newMovePos.length; i++) {
                for (let j = 0; j < self.cubeStateTable.length; j++) {
                    let stopChilds = self.cubeStateTable[j]
                    if (newMovePos[i].x == stopChilds.stopPos.x && newMovePos[i].y == stopChilds.stopPos.y) { // 移动的坐标和停止的方块坐标有重合，禁止移动
                        return true
                    }
                }

                if (direction == "right" && newMovePos[i].x > 286) { //越界，不可移动
                    return true
                }

                if (direction == "left" && newMovePos[i].x < -154) { //越界，不可移动
                    return true
                }
           }
        }

        if (sender.keyCode == GlobalEnum.GAME_KEY_CODE.KEY_LEFT) { //left
            if (checkCanMove("left")) {
                return
            }
            this.nowActiveCube.setPosition(oldCubePos.x - this.cellSize, oldCubePos.y)
        }else if (sender.keyCode == GlobalEnum.GAME_KEY_CODE.KEY_TOP){ //top
            this.cubeRotation()
        }else if (sender.keyCode == GlobalEnum.GAME_KEY_CODE.KEY_RIGHT){ //right
            if (checkCanMove("right")) {
                return
            }
            this.nowActiveCube.setPosition(oldCubePos.x + this.cellSize, oldCubePos.y)
        }else if (sender.keyCode == GlobalEnum.GAME_KEY_CODE.KEY_DOWN){ //down
            if (oldCubePos.y <= -156) { //越界，不可移动
                return
            } 

            if (this.checkHasStop()) {
                return
            }
            this.nowActiveCube.setPosition(oldCubePos.x , oldCubePos.y - this.cellSize)
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
        this.rotIndex = 0
        let rand = math.randomRangeInt(0,5)
        let cubes = russiaGameCubeTools.getCube(rand)
        let cube = cc.instantiate(cubes)
        cube.cubeData = cubes.cubeData

        let playBoard = cc.find("nodeLayer/playBoard", this.node)
        let playBoardPos = playBoard.getPosition()
        cube.setPosition(playBoardPos.x - this.cellSize/2,this.cubeStartPosy - this.cellSize/2 + 5)
        this.node.addChild(cube)

        this.schedul = function () {
            let cubePos = cube.getPosition()

            for(let i = 0; i < cube.children.length; i++) { //检测坐标label，后续可以删除
                let nowChilds = cube.children[i]
                let lb = nowChilds.getChildByName("lb").getComponent(Label)

                let movePos =  nowChilds.getPosition()
                movePos = cube.getComponent(UITransform).convertToWorldSpaceAR(movePos)
                movePos = this.node.getComponent(UITransform).convertToNodeSpaceAR(movePos)
                lb.string = Math.floor(movePos.x)
            }

            if (this.checkHasStop()) { //到达底板或者下面有方块，停止
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
            }else{
                cube.setPosition(cubePos.x, cubePos.y - this.cellSize)
            }
        }
        this.schedule(this.schedul, 0.5);

        this.nowActiveCube = cube
    }

    back(){
        UIManager.close()
    }

    //是否下方有方块
    checkHasStop() {
        let nowCubeChilds = this.nowActiveCube.children
        for(let i = 0; i < nowCubeChilds.length; i++) {
            let nowChilds = nowCubeChilds[i]
            let movePos =  nowChilds.getPosition()
            movePos = this.nowActiveCube.getComponent(UITransform).convertToWorldSpaceAR(movePos)
            movePos = this.node.getComponent(UITransform).convertToNodeSpaceAR(movePos)

            for (let j = 0; j < this.cubeStateTable.length; j++) {
                let stopChilds = this.cubeStateTable[j]

                let distanceY = Math.floor(movePos.y) - Math.floor(stopChilds.stopPos.y)
                if (Math.floor(stopChilds.stopPos.y) <= Math.floor(movePos.y)) { //已经放置的y坐标大于移动cube的不考虑
                    if (distanceY <= this.cellSize) { // y坐标距离小于等于40
                        if (Math.floor(movePos.x) == Math.floor(stopChilds.stopPos.x)) { //并且x坐标有重合
                            return true
                        }
                    }
                }
            }

            if ((movePos.y - this.cellSize) < -196) { //边界检查
                return true
            }
        }

        return false
    }

    //方块旋转
    cubeRotation(){
        let nowCubeChilds = this.nowActiveCube.children
        let cubeData = this.nowActiveCube.cubeData
        this.rotIndex = this.rotIndex + 1
        if (this.rotIndex >= cubeData.length) {
            this.rotIndex = 0
        }

        //旋转边界检查
        let newMovePos = []
        for(let i = 0; i < nowCubeChilds.length; i++) {
            let nowChilds = nowCubeChilds[i]
            if (cubeData[this.rotIndex]) {
                newMovePos.push(cubeData[this.rotIndex][i])
            }
        }

        for(let i = 0; i < newMovePos.length; i++) {
            let movePos = newMovePos[i]
            movePos = this.nowActiveCube.getComponent(UITransform).convertToWorldSpaceAR(movePos)
            movePos = this.node.getComponent(UITransform).convertToNodeSpaceAR(movePos)

            for (let j = 0; j < this.cubeStateTable.length; j++) {
                let stopChilds = this.cubeStateTable[j]

                let distanceY = Math.floor(movePos.y) - Math.floor(stopChilds.stopPos.y)
                if (Math.floor(stopChilds.stopPos.y) <= Math.floor(movePos.y)) { //已经放置的y坐标大于移动cube的不考虑
                    if (distanceY <= this.cellSize) { // y坐标距离小于等于40
                        if (Math.floor(movePos.x) == Math.floor(stopChilds.stopPos.x)) { //并且x坐标有重合
                            return true
                        }
                    }
                }
            }
            
            if ((movePos.y) < -196) { //边界检查
                return 
            }

            if ((movePos.x) > 286) { //边界检查
                return 
            }

            if ((movePos.x) < -156) { //边界检查
                return 
            }
        }

        for(let i = 0; i < nowCubeChilds.length; i++) {
            let nowChilds = nowCubeChilds[i]
            if (cubeData[this.rotIndex]) {
                nowChilds.setPosition(cubeData[this.rotIndex][i])
            }
        }

        
    }
}

