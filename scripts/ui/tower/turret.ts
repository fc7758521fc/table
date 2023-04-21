import { _decorator, Component, Node, Tween,Prefab, Label, input, Size,Input,Vec3,UITransform, Button, director,Sprite,EventTarget,SpriteFrame,SpriteAtlas, math, randomRangeInt, Vec2, ProgressBar} from 'cc';
import { UIManager } from '../../UIManager';
import { GlobalEnum } from '../../global/GlobalEnum'
const { ccclass, property } = _decorator;
import { gFunc } from '../../global/gFunc'
import { EventMessage } from '../../eventManager'
// import { russiaGameCubeTools } from './russiaGameCubeTools'
// import { gameOver } from './gameOver'

cc.myEvent = new EventTarget();

@ccclass('turret')
export class turret extends Component{
    onLoad(){

    }

    static async create() {
        let atlas = await gFunc.loadPlistSync("test_res/public.plist", SpriteAtlas) as SpriteAtlas; 
        const roleFrame = atlas.getSpriteFrame('public/public_avatar_wolf1');

        let turret = new Node();
        let sprite = turret.addComponent(Sprite);
        turret.getComponent(Sprite).spriteFrame = roleFrame

        return turret
    }

}