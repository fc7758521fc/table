import { _decorator, Component, Node, Prefab, Label, UITransform, Button, director,EventTarget} from 'cc';
import { UIManager } from '../UIManager';
import { GlobalEnum } from '../global/GlobalEnum'
const { ccclass, property } = _decorator;
import { gFunc } from '../global/gFunc'
import { EventMessage } from '../global/eventManager'

cc.myEvent = new EventTarget();

@ccclass('startGame')
export class startGame extends Component{

    onLoad(){
        let restartBtn = cc.find("restart", this.node)
        restartBtn.on(Button.EventType.CLICK, this.restartCallback, this);
    }


    restartCallback() {
        UIManager.close()
        cc.myEvent.emit(EventMessage.GAME_OVER, 1);
    }


}

