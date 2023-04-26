import { _decorator, Component, Node, Prefab, Label, input, Size,Input,Vec3,UITransform, Button, director,Sprite,EventTarget,SpriteFrame,SpriteAtlas, math} from 'cc';
import { UIManager } from '../UIManager';
import { GlobalEnum } from '../global/GlobalEnum'
const { ccclass, property } = _decorator;
import { gFunc } from '../global/gFunc'
import { EventMessage } from '../eventManager'
import { russiaGameCubeTools } from './russiaGameCubeTools'
import { gameOver } from './gameOver'
import { NetManager } from "..//netManager";

cc.myEvent = new EventTarget();

@ccclass('netTest')
export class netTest extends Component{
    onLoad(){
        let backBtn = cc.find("nodeLayer/back", this.node)
        backBtn.on(Button.EventType.CLICK, this.back, this);

        input.on(Input.EventType.KEY_DOWN, this.keyDown, this);
        cc.myEvent.on(EventMessage.GAME_RESTART, (arg1, arg2, arg3) => {
            this.reStartGame()
        });
    }

    back(){
        NetManager.getInstance().connect(() => {
            // NetManager.getInstance().send("hello")
            var message = {id: "2", name:"fc"}
            NetManager.getInstance().send(JSON.stringify(message))

            // NetManager.getInstance().startHeart(0)
        });
    }

}

