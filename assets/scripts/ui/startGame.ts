import { _decorator, Component, Node, Prefab, Label, UITransform, Button, director,EventTarget} from 'cc';
import { UIManager } from '../UIManager';
import { GlobalEnum } from '../global/GlobalEnum'
const { ccclass, property } = _decorator;
import { gFunc } from '../global/gFunc'
import { EventMessage } from '../eventManager'

cc.myEvent = new EventTarget();

@ccclass('startGame')
export class startGame extends Component{

    onLoad(){
        let startBtn = cc.find("start", this.node)
        startBtn.on(Button.EventType.CLICK, this.startCallback, this);

        let moreBtn = cc.find("more", this.node)
        moreBtn.on(Button.EventType.CLICK, this.moreCallback, this);
    }


    startCallback() {
        UIManager.close()
        cc.myEvent.emit(EventMessage.GAME_ENTER, 1);
    }

    
    moreCallback() {
        cc.myEvent.emit(EventMessage.GAME_MORE, 1);
    }

}

