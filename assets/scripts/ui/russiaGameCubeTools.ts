import { _decorator, Component, Node, Prefab, Label, input, Size,Input,UITransform, Button, director,Sprite,EventTarget,SpriteFrame, math} from 'cc';
import { UIManager } from '../UIManager';
import { GlobalEnum } from '../global/GlobalEnum'
const { ccclass, property } = _decorator;
import { gFunc } from '../global/gFunc'
import { EventMessage } from '../global/eventManager'


@ccclass('russiaGameCubeTools')
export class russiaGameCubeTools extends Component{
    
    static onLoad(){
        this.cubeMode = []
        this.cellSize = 40
        this.intCubeModel()
    }

    //初始化cube
    static async intCubeModel(){
        //正方形
        let squarePos = {
            1 : {x : 0,  y : 0, z: 0},
            2 : {x : 40, y : 0, z: 0},
            3 : {x : 0,  y : 40,z: 0},
            4 : {x : 40, y : 40,z: 0},
        }

        let squareNode = new Node();
        squareNode.addComponent(UITransform)
        for (let i = 1; i <= Object.keys(squarePos).length; i++) {
            let resource =  await gFunc.loadResSync("test_res/public_item_box_4/spriteFrame", SpriteFrame) as SpriteFrame; 
            let newNode = new Node();
            let sprite = newNode.addComponent(Sprite);
            newNode.getComponent(Sprite).spriteFrame = resource
            newNode.getComponent(UITransform).setContentSize(new Size(this.cellSize, this.cellSize))
            newNode.setPosition(squarePos[i])

            let labelNode = new Node("lb");
            let label = labelNode.addComponent(Label);
            labelNode.setPosition(0,0)
            label.anchorPoint = math.Vec2(0.5, 0.5)
            label.string = ""
            label.fontSize = 12
            label.color = new cc.color(0,255,0);
            newNode.addChild(labelNode)

            squareNode.addChild(newNode)
        }
        this.cubeMode.push(squareNode)
    }

    static getCube(random){
        return this.cubeMode
    }

}

