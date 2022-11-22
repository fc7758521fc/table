import { _decorator, Component, Node, Prefab, Label, UITransform, Button} from 'cc';
import { UIManager } from '../UIManager';
import { GlobalEnum } from '../global/GlobalEnum'
const { ccclass, property } = _decorator;
import { gFunc } from '../global/gFunc'

@ccclass('selectGameView')
export class selectGameView extends UIManager{
    @property(Node)
    enterBtn: Node = null!;

    onLoad(){
        this.initScroll()
    }

    initScroll() {
        let content = cc.find("nodeLayer/Sprite/ScrollView/view/content", this.node)
        
        let gameName = [
            "小球射击" , "俄罗斯方块", "弹弹球"
        ]
        for (let i = 1; i <= Object.keys(GlobalEnum.GAME_TYPE_ENUM).length; i++) {
            let enterBtn = cc.instantiate(this.enterBtn)
            enterBtn.active = true
            enterBtn.setParent(content)
            enterBtn.index = i
            let gameNameLabel = enterBtn.getChildByName("Label").getComponent(Label)
            gameNameLabel.string = gameName[i - 1]


            enterBtn.on(Button.EventType.CLICK, this.callback, this);
        }
    }

    callback(sender) {
        if (sender.node.index == 1) { //这里需要想一下，处于当前时，直接关闭界面
            UIManager.close()
        }else if (sender.node.index == 2) {
            gFunc.showToast("我草泥马")
        }else if (sender.node.index == 3) {
            gFunc.showToast("我草泥马")
        }
    }

    close(){
        UIManager.close()
    }
}

