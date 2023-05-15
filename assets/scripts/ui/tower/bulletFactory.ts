import { _decorator, Component, Node, Tween,Prefab, EventHandler, Label, input, Size,Input,Vec3,UITransform, Button, director,Sprite,EventTarget,SpriteFrame,SpriteAtlas, math, randomRangeInt, Vec2, Widget, BlockInputEvents} from 'cc';
import { UIManager } from '../UIManager';
import { GlobalEnum } from '../global/GlobalEnum'
const { ccclass, property } = _decorator;
import { gFunc } from '../../global/gFunc'
import { EventMessage } from '../../eventManager'
// import { russiaGameCubeTools } from './russiaGameCubeTools'
// import { gameOver } from './gameOver'
import { bullet1 } from './bullet1'

cc.myEvent = new EventTarget();

// @ccclass('turretFactory')
//炮塔工厂
export class bulletFactory extends Node{
    onLoad(){
      
    }

    public static getBulletType(type) {
        if (type == 1) {
            let bullet = bullet1.create()
            return bullet
        }
    }
}