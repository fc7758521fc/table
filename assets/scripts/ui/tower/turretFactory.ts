import { _decorator, Component, Node, Tween,Prefab, EventHandler, Label, input, Size,Input,Vec3,UITransform, Button, director,Sprite,EventTarget,SpriteFrame,SpriteAtlas, math, randomRangeInt, Vec2, Widget, BlockInputEvents} from 'cc';
import { UIManager } from '../UIManager';
import { GlobalEnum } from '../global/GlobalEnum'
const { ccclass, property } = _decorator;
import { gFunc } from '../../global/gFunc'
import { EventMessage } from '../../eventManager'
// import { russiaGameCubeTools } from './russiaGameCubeTools'
// import { gameOver } from './gameOver'
import { turret } from './turret'

cc.myEvent = new EventTarget();

// @ccclass('turretFactory')
//炮塔工厂
export class turretFactory extends Node{
    onLoad(){
      
    }

    public static async create(callback) {
        let atlas = await gFunc.loadPlistSync("test_res/public.plist", SpriteAtlas) as SpriteAtlas; 
        const bgFrame = atlas.getSpriteFrame("public/public_item_box_2");

        let widget = new Node();
        widget.addComponent(Sprite);
        widget.addComponent(Button);
        // widget.getComponent(Sprite).spriteFrame = bgFrame
        widget.getComponent(UITransform).setContentSize(new Size(640, 960))
        
        function closePanel (){
            if (widget) {
                widget.destroy()
            }
        };
        widget.on(Button.EventType.CLICK, closePanel, this);


        let towerRes = ["public/public_avatar_wolf1", "public/public_avatar_wolf2", "public/public_avatar_wolf3"]
        for (let i =0; i< 3; i++) {
            const roleFrame = atlas.getSpriteFrame(towerRes[i]);
            let tower = new Node();
            tower.addComponent(Button);
            let sprite = tower.addComponent(Sprite);
            tower.getComponent(Sprite).spriteFrame = roleFrame
            tower.setPosition(-100 + i * 100, widget.getPosition().y)
            widget.addChild(tower)
            tower.index = i

            function getTurretType (sender){
                let type  = sender.node.index + 1
                console.log("typetypetypetypetypetypetypetypetypetype", type)
                // if (type == 1) {
                //     let monster = turret.create()
                //     return monster
                // }

                if (callback) {
                    callback(type)
                }

                if (widget) {
                    widget.destroy()
                }
            };
            tower.on(Button.EventType.CLICK, getTurretType, tower);
        }

        return widget
    }

    public static getTurretType(type) {
        if (type == 1) {
            let monster = turret.create()
            monster.mType = 1
            return monster
        }
    }
}