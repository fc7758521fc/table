import { _decorator, Component, Node, Prefab, Label, UITransform, Button, director,EventTarget} from 'cc';
import { UIManager } from '../UIManager';
import { GlobalEnum } from '../global/GlobalEnum'
const { ccclass, property } = _decorator;
import { gFunc } from '../global/gFunc'
import { EventMessage } from '../eventManager'

cc.myEvent = new EventTarget();

@ccclass('gameOver')
export class gameOver extends Component{
    onLoad(){
        let restartBtn = cc.find("restart", this.node)
        console.log("123123123123", restartBtn)
        restartBtn.on(Button.EventType.CLICK, this.restartCallback, this);
    }


    restartCallback() {
        UIManager.close()
        if (gameOver.tag == GlobalEnum.GAME_TYPE_ENUM.SHOOT) {
            cc.myEvent.emit(EventMessage.GAME_OVER);
        }else{
            cc.myEvent.emit(EventMessage.GAME_RESTART);
        }
        
    }

    public setTag(tag) {
        gameOver.tag = tag 
    }


}

