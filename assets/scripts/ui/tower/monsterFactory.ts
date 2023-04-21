import { _decorator, Component, Node, Tween,Prefab, Label, input, Size,Input,Vec3,UITransform, Button, director,Sprite,EventTarget,SpriteFrame,SpriteAtlas, math, randomRangeInt, Vec2} from 'cc';
import { UIManager } from '../UIManager';
import { GlobalEnum } from '../global/GlobalEnum'
const { ccclass, property } = _decorator;
import { gFunc } from '../global/gFunc'
import { EventMessage } from '../eventManager'
// import { russiaGameCubeTools } from './russiaGameCubeTools'
// import { gameOver } from './gameOver'
import { mobs } from './mobs'

cc.myEvent = new EventTarget();

// @ccclass('monsterFactory')
export class monsterFactory extends Component{
    onLoad(){
      
    }

    public static getMonsterType(type) {
        if (type == 1) {
            let monster = mobs.create()
            console.log("jjjjjjjjjjjjjjjjjjjjjjj",monster)
            return monster
        }
    }
}