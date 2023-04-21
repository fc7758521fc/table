// author: http://lamyoung.com/

import { BoxCollider, Collider2D, UITransform,Input, Button,BoxCollider2D,CircleCollider2D,Sprite } from "cc";
import QuadtreeCollision from "./QuadtreeCollision";
import { UIManager } from '../UIManager';

const { ccclass, property } = cc._decorator;

@ccclass
export default class QuadtreeTest extends cc.Component {
    @property(cc.Node)
    collider_role: cc.Node = null;

    @property(cc.Node)
    all_collider_parent: cc.Node = null;

    private _all_collider: cc.Collider[] = [];

    private _quadCollision: QuadtreeCollision;

    onLoad() {
        let backBtn = cc.find("nodeLayer/back", this.node)
        backBtn.on(Button.EventType.CLICK, this.back, this);

        this._all_collider = this.all_collider_parent.getComponentsInChildren(Collider2D);
        // 这边是挂载在canvas下的脚本，用canvas的rect初始化创建。
        this._quadCollision = new QuadtreeCollision(this.node.getComponent(UITransform).getBoundingBoxToWorld());

        this.collider_2 = this.collider_role.getComponent(BoxCollider2D)//移动刚体
    }

    back(){
        UIManager.close()
    }
    
    start() {
        let nodeLayer = cc.find("nodeLayer", this.node)
        nodeLayer.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    private onTouchMove(evt: cc.Touch) {
        // const pos = this.collider_role.node.parent.convertToNodeSpaceAR(evt.getLocation());
        this.collider_role.setPosition(evt.getUILocation().x - 320, evt.getUILocation().y - 460)
        
    }

    lateUpdate() {
        const { retrieve, contacts } = this._quadCollision.check(this._all_collider, this.collider_2);
        // retrieve 准备测试的对象(预览图中的绿色)   cc.Collider[]
        // contacts 碰撞对象(预览图中的红色)   cc.Collider[]
        for (let i = 0; i < this._all_collider.length ; i++) {
            this._all_collider[i].node.getComponent(Sprite).color = cc.Color.WHITE
        }

        for (let i = 0; i < retrieve.length ; i++) {
            retrieve[i].node.getComponent(Sprite).color = cc.Color.GREEN
        }

        for (let i = 0; i < contacts.length ; i++) {
            contacts[i].node.getComponent(Sprite).color = cc.Color.RED
        }

        // this._all_collider.forEach(c => c.node.color = cc.Color.WHITE);
        // retrieve.forEach(c => c.node.color = cc.Color.GREEN);
        // contacts.forEach(c => c.node.color = cc.Color.RED);
    }
}