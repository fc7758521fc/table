// author: http://lamyoung.com/

import { _decorator, Component, Node, Vec2,Tween,Prefab,Collider2D,Contact2DType,PhysicsSystem2D, Label, input, Size,Input,Vec3,UITransform, Button, director,Sprite,EventTarget,SpriteFrame,SpriteAtlas, math, randomRangeInt, RigidBody2D} from 'cc';
import QuadtreeCollision from "./QuadtreeCollision";
import { UIManager } from '../UIManager';

const { ccclass, property } = cc._decorator;

@ccclass('waterMelonGame')
export class waterMelonGame extends Component{
    is_move = false

    onLoad() {
        let backBtn = cc.find("nodeLayer/back", this.node)
        backBtn.on(Button.EventType.CLICK, this.back, this);
    }

    back(){
        UIManager.close()
    }
    
    start() {
        let nodeLayer = cc.find("nodeLayer", this.node)
        nodeLayer.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        nodeLayer.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        nodeLayer.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);


        if (PhysicsSystem2D.instance) {
            PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            // PhysicsSystem2D.instance.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        }
    }

    private onTouchStart(evt: cc.Touch) {
        // if (this.is_move == true) {
        //     return
        // }

        this.initBall(1)
    }

    private onTouchMove(evt: cc.Touch) {
        // if (this.is_move == true) {
        //     return
        // }

        if (this.nowBall) {
            this.nowBall.setPosition(evt.getUILocation().x - 320, 400)
        }
    }
    
    private onTouchEnd(evt: cc.Touch) {
        if (this.nowBall) {
            this.nowBall.getComponent(RigidBody2D).wakeUp()
        }
    }

    lateUpdate() {
        if (this.nowBall) {
            let linearVelocity =  this.nowBall.getComponent(RigidBody2D).linearVelocity
            this.is_move = false
            if (linearVelocity.x != 0 || linearVelocity.y != 0) {
                this.is_move = true
            }
        }else{
            this.is_move = false
        }
    }

    initBall(tag){
        let cube = cc.find("ball_" + tag, this.node)
        let playBoard = cc.find("nodeLayer/playBoard", this.node)

        let newNode = cc.instantiate(cube)
        newNode.tag = tag
        newNode.active = true
        newNode.setPosition(0, 400)
        playBoard.addChild(newNode)
        this.nowBall = newNode
    }

    createNewBall(tag,x,y){
        let cube = cc.find("ball_" + tag, this.node)
        let playBoard = cc.find("nodeLayer/playBoard", this.node)

        let newNode = cc.instantiate(cube)
        newNode.tag = tag
        newNode.active = true
        newNode.setPosition(x,y)
        playBoard.addChild(newNode)
        newNode.getComponent(RigidBody2D).wakeUp()
    }


    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {

        // 只在两个碰撞体开始接触时被调用一次
        if (selfCollider.node.tag == otherCollider.node.tag) {
            let newTag = selfCollider.node.tag + 1

            if (newTag == 5) { //最大上限
                return
            }

            let x = otherCollider.node.getPosition().x
            let y = otherCollider.node.getPosition().y

            setTimeout(()=>{ //
                selfCollider.node.destroy()
                otherCollider.node.destroy()
                this.nowBall = null
            }, 0);

            setTimeout(()=>{ //
               this.createNewBall(newTag, x, y)
            }, 0);
        }
    

        let is_one_touch = false //是否已经接触
        // //碰到球以后再掉到地板不能再次生成新球
        if (selfCollider.node.tag && otherCollider.node.tag) { 
            is_one_touch = true
        }

        //碰左右底板不能生成新球
        if (selfCollider.node.name == "Node-001" || selfCollider.node.name == "Node-002" || otherCollider.node.name == "Node-001" || otherCollider.node.name == "Node-002") {
            is_one_touch = true
        }

        // // //有标记的不能生成新球
        // if (this.nextBall && this.nextBall.isTouch == true) {
        //     is_one_touch = true
        // }

        if (is_one_touch == false && selfCollider.node.name == "board" ) { //接触到地板，生成新球
            setTimeout(()=>{ //
                //this.initBall(1)
            }, 0);
        }
    }

}