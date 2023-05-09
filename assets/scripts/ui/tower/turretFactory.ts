import { _decorator, Component, Node, Tween,Prefab, Label, input, Size,Input,Vec3,UITransform, Button, director,Sprite,EventTarget,SpriteFrame,SpriteAtlas, math, randomRangeInt, Vec2} from 'cc';
import { UIManager } from '../UIManager';
import { GlobalEnum } from '../global/GlobalEnum'
const { ccclass, property } = _decorator;
import { gFunc } from '../global/gFunc'
import { EventMessage } from '../eventManager'
// import { russiaGameCubeTools } from './russiaGameCubeTools'
// import { gameOver } from './gameOver'
import { turret } from './turret'

cc.myEvent = new EventTarget();

// @ccclass('turretFactory')
//炮塔工厂
export class turretFactory extends Component{
    onLoad(){
      
    }

    public static getTurretType(type) {
        if (type == 1) {
            let monster = turret.create()
            return monster
        }
    }
}