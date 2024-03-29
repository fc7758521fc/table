import { _decorator, Component, Node, Tween,Prefab, Label, input, Size,Input,Vec3,UITransform, Button, director,Sprite,EventTarget,SpriteFrame,SpriteAtlas, math, randomRangeInt, Vec2, ProgressBar} from 'cc';
import { UIManager } from '../../UIManager';
import { GlobalEnum } from '../../global/GlobalEnum'
const { ccclass, property } = _decorator;
import { gFunc } from '../../global/gFunc'
import { EventMessage } from '../../eventManager'
// import { russiaGameCubeTools } from './russiaGameCubeTools'
// import { gameOver } from './gameOver'

cc.myEvent = new EventTarget();

@ccclass('mobs')
export class mobs extends Component{
     onLoad(){
    }

    static async create() {
        let atlas = await gFunc.loadPlistSync("test_res/public.plist", SpriteAtlas) as SpriteAtlas; 
        const roleFrame = atlas.getSpriteFrame('public/public_hero_star3');
        const progreeBg = atlas.getSpriteFrame('public/tavern_filter_back2');
        const progreeFrame = atlas.getSpriteFrame('public/public_tavern_button');

        let role = new Node();
        let sprite = role.addComponent(Sprite);
        role.getComponent(Sprite).spriteFrame = roleFrame

        let res = await gFunc.loadResSync("package/prefab/common/ProgressBar", Prefab)
        let bar = cc.instantiate(res);
        bar.setPosition(new Vec3(role.getContentSize().width / 2 - 25, role.getContentSize().height / 2))
        role.addChild(bar);

        return role
    }

}