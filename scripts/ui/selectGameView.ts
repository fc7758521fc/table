import { _decorator, Component, Node, Prefab, Label, UITransform, Button, director, enumerableProps} from 'cc';
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
            "弹弹球" , "俄罗斯方块", "三消" , "打砖块", "四叉树碰撞检测", "西瓜消消乐", "a*寻路"
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

    async callback(sender) {
        if (sender.node.index == 1) { //这里需要想一下，处于当前时，直接关闭界面
            UIManager.close()
        }else if (sender.node.index == 2) {
            let ui_params = []
            let res = await gFunc.loadResSync("package/prefab/ui/russiaCube", Prefab)
            let commonBoard = cc.instantiate(res);
            ui_params.rootNode = commonBoard
            UIManager.showDefaultConfigUI(ui_params)
        }else if (sender.node.index == 3) {
            let ui_params = []
            let res = await gFunc.loadResSync("package/prefab/ui/eliminate", Prefab)
            let commonBoard = cc.instantiate(res);
            ui_params.rootNode = commonBoard
            UIManager.showDefaultConfigUI(ui_params)
        }else if (sender.node.index == 4) {
            let ui_params = []
            let res = await gFunc.loadResSync("package/prefab/ui/bouncingBall", Prefab)
            let commonBoard = cc.instantiate(res);
            ui_params.rootNode = commonBoard
            UIManager.showDefaultConfigUI(ui_params)
        }else if (sender.node.index == 5) {
            let ui_params = []
            let res = await gFunc.loadResSync("package/prefab/ui/quadtree", Prefab)
            let commonBoard = cc.instantiate(res);
            ui_params.rootNode = commonBoard
            UIManager.showDefaultConfigUI(ui_params)
        }else if (sender.node.index == 6) {
            let ui_params = []
            let res = await gFunc.loadResSync("package/prefab/ui/watermelon", Prefab)
            let commonBoard = cc.instantiate(res);
            ui_params.rootNode = commonBoard
            UIManager.showDefaultConfigUI(ui_params)
        }else if (sender.node.index == 7) {
            let ui_params = []
            let res = await gFunc.loadResSync("package/prefab/ui/aStar", Prefab)
            let commonBoard = cc.instantiate(res);
            ui_params.rootNode = commonBoard
            UIManager.showDefaultConfigUI(ui_params)
        }else{
            gFunc.showToast("敬请期待")
        }
    }

    close(){
        UIManager.close()
    }
}

