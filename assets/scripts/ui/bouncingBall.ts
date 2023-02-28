import { _decorator, Component, Node,Tween,Prefab, PhysicsSystem2D,Label, input, Size,Input,Contact2DType,Vec3,Collider2D,RigidBody,UITransform, Button, director,Sprite,EventTarget,SpriteFrame,SpriteAtlas, math, randomRangeInt, RigidBody2D, random} from 'cc';
import { UIManager } from '../UIManager';
import { GlobalEnum } from '../global/GlobalEnum'
const { ccclass, property } = _decorator;
import { gFunc } from '../global/gFunc'
import { EventMessage } from '../eventManager'
import { russiaGameCubeTools } from './russiaGameCubeTools'
import { gameOver } from './gameOver'

cc.myEvent = new EventTarget();

@ccclass('bouncingBall')
export class bouncingBall extends Component{
    line = 10 //行
    row = 5 //列
    cube_array = [] 
    jump = false

    @property(Node)
    cube: Node = null!;

    onLoad(){
        let backBtn = cc.find("nodeLayer/back", this.node)
        backBtn.on(Button.EventType.CLICK, this.back, this);

        input.on(Input.EventType.KEY_PRESSING, this.keyDown, this);

        this.initCube()
        this.initBall()
    }

    back(){
        UIManager.close()
        cc.loader.releaseRes("public/public_item_box_2_1");
    }

    keyDown(sender) {
        let line_glow = cc.find("nodeLayer/line_glow", this.node)
        let pos = line_glow.getPosition()
        if (sender.keyCode == GlobalEnum.GAME_KEY_CODE.KEY_LEFT) { //left
            line_glow.setPosition(pos.x - 25, pos.y)
            
        }else if (sender.keyCode == GlobalEnum.GAME_KEY_CODE.KEY_RIGHT){ //right
            line_glow.setPosition(pos.x + 25, pos.y)
        }
    }

    async initCube(){
        let playBoard = cc.find("nodeLayer/playBoard", this.node)
        let playBoardPos = playBoard.getPosition()
        let playBoardSize = playBoard.getContentSize()
        let startPosx = playBoardPos.x - playBoardSize.width / 2
        let startPosy = playBoardPos.y + playBoardSize.width / 2 - 40

        for (let i = 0; i < this.line; i++) {
            for (let j = 0; j< this.row; j++) {
                let newNode = cc.instantiate(this.cube)
                newNode.setPosition(startPosx + i * 60 + 60/2 + 20, startPosy - j * 40 + 40/2)
                this.node.addChild(newNode)
                newNode.tag = i + j

                this.cube_array.push(newNode)
            }
        }

        console.log(this.cube_array)
    }

    initBall(){
        let ball = cc.find("nodeLayer/ball", this.node)
        this.ball = ball
       
        var tween =  new Tween(ball)
        .by(1 ,{ position: new Vec3(math.randomRangeInt(-320,320),math.randomRangeInt(500,1000),0) })
        .start();

        if (PhysicsSystem2D.instance) {
            PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 只在两个碰撞体开始接触时被调用一次

         if (selfCollider.node.name == "public_aura_board") {
            var tween =  new Tween(this.ball)
            .by(2 ,{ position: new Vec3(math.randomRangeInt(-320,320),math.randomRangeInt(-500,-1000),0) })
            .start();

            setTimeout(()=>{ //bug点一
                selfCollider.node.destroy()
             }, 0);
        }

        if (selfCollider.node.name == "line_glow") {
            var tween =  new Tween(this.ball)
            .by(2 ,{ position: new Vec3(math.randomRangeInt(-320,320),math.randomRangeInt(500,1000),0) })
            .start();
        }

        if (selfCollider.node.name == "wall") {
            var tween =  new Tween(this.ball)
            .by(2 ,{ position: new Vec3(math.randomRangeInt(-320,320),math.randomRangeInt(500,1000),0) })
            .start();
        }
        
    }
}

