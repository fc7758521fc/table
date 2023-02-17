import { _decorator, Component, Node, Prefab, Label, input, Size,Input,UITransform, Button, director,Sprite,EventTarget,SpriteFrame, math} from 'cc';
import { UIManager } from '../UIManager';
import { GlobalEnum } from '../global/GlobalEnum'
const { ccclass, property } = _decorator;
import { gFunc } from '../global/gFunc'
import { EventMessage } from '../eventManager'


@ccclass('russiaGameCubeTools')
export class russiaGameCubeTools extends Component{
    
    static onLoad(){
        this.allCubeArray = []
        this.cubeMode = []
        this.cellSize = 40
        this.initCubeCfg()
        this.intCubeModel()
    }

    static initCubeCfg(){
         //正方形
         let squarePos = [{
            0 : {x : 0,  y : 0, z: 0},
            1 : {x : 40, y : 0, z: 0},
            2 : {x : 0,  y : 40,z: 0},
            3 : {x : 40, y : 40,z: 0},
        }]

        // //Z方形
        let zCubePos = [
            {
                0 : {x : 0,  y : 40, z: 0},
                1 : {x : 40, y : 0, z: 0},
                2 : {x : 40,  y : 40,z: 0},
                3 : {x : 80, y : 0,z: 0}
            },
            {
                0 : {x : 0,  y : 0, z: 0},
                1 : {x : 0, y : 40, z: 0},
                2 : {x : 40,  y : 40,z: 0},
                3 : {x : 40, y : 80,z: 0}
            }
        ]

        // //Z方形(反向)
        let zrCubePos = [
            {
                0 : {x : 0,  y : 0, z: 0},
                1 : {x : 40, y : 0, z: 0},
                2 : {x : 40,  y : 40,z: 0},
                3 : {x : 80, y : 40,z: 0}
            },
            {
                0 : {x : 0,  y : 40, z: 0},
                1 : {x : 0, y : 80, z: 0},
                2 : {x : 40,  y : 0,z: 0},
                3 : {x : 40, y : 40,z: 0}
            }
        ]

        // // //长方形
        let cCubePos = [
            {
                0 : {x : 0,  y : 0, z: 0},
                1 : {x : 0, y : 40, z: 0},
                2 : {x : 0,  y : 80,z: 0},
                3 : {x : 0, y : 120,z: 0}
            },
            {
                0 : {x : 0,  y : 0, z: 0},
                1 : {x : 40, y : 0, z: 0},
                2 : {x : 80,  y : 0,z: 0},
                3 : {x : 120, y : 0,z: 0}
            }
        ]

        // // // //T形
        let tCubePos = [
            {
                0 : {x : 0,  y : 0, z: 0},
                1 : {x : 40, y : 0, z: 0},
                2 : {x : 80,  y : 0,z: 0},
                3 : {x : 40, y : 40,z: 0}
            },
            {
                0 : {x : 40,  y : 0, z: 0},
                1 : {x : 80, y : 0, z: 0},
                2 : {x : 40,  y :40,z: 0},
                3 : {x : 40, y : -40,z: 0}
            },
            {
                0 : {x : 0,  y : 0, z: 0},
                1 : {x : 40, y : 0, z: 0},
                2 : {x : 80,  y :0,z: 0},
                3 : {x : 40, y : -40,z: 0}
            },
            {
                0 : {x : 0,  y : 0, z: 0},
                1 : {x : 40, y : 0, z: 0},
                2 : {x : 40,  y :40,z: 0},
                3 : {x : 40, y : -40,z: 0}
            }
        ]

        // //L形
        let lCubePos = [
            {
                0 : {x : 0,  y : 0, z: 0},
                1 : {x : 0, y : 40, z: 0},
                2 : {x : 40,  y : 0,z: 0},
                3 : {x : 80, y : 0,z: 0}
            },
            {
                0 : {x : 40,  y : 0, z: 0},
                1 : {x : 40, y : 40, z: 0},
                2 : {x : 40,  y :-40,z: 0},
                3 : {x : 80, y : 40,z: 0}
            },
        ]

        this.allCubeArray.push(squarePos)
        this.allCubeArray.push(zCubePos)
        this.allCubeArray.push(zrCubePos)
        this.allCubeArray.push(cCubePos)
        this.allCubeArray.push(tCubePos)
        this.allCubeArray.push(lCubePos)
    }

    //初始化cube
    static async intCubeModel(){
        for (let j = 0; j < this.allCubeArray.length; j++) {
            let normalCube = this.allCubeArray[j][0]
            let squareNode = new Node();
            squareNode.addComponent(UITransform)
            for (let i = 0; i < Object.keys(normalCube).length; i++) { //第一个0是类型，后面的0是方向
                let cubePos = this.allCubeArray[j][0][i]
                let resource =  await gFunc.loadResSync("test_res/public_item_box_4/spriteFrame", SpriteFrame) as SpriteFrame; 
                let newNode = new Node();
                let sprite = newNode.addComponent(Sprite);
                newNode.getComponent(Sprite).spriteFrame = resource
                newNode.getComponent(UITransform).setContentSize(new Size(this.cellSize, this.cellSize))
                newNode.setPosition(cubePos)

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
            squareNode.cubeData = this.allCubeArray[j]
            this.cubeMode.push(squareNode)
        }

        // console.log("初始化的方块", this.cubeMode)
    }

    static getCube(random){
        return this.cubeMode[random]
    }

}

