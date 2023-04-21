import { _decorator, Component, Node, Prefab, Label, UITransform, Button, Tween, Vec3} from 'cc';
import { UIManager } from '../../UIManager';
import { GlobalEnum } from '../global/GlobalEnum'
import { gFunc } from '../../global/gFunc'

const { ccclass, property } = _decorator;


@ccclass('toast')
export class toast extends Component{
  
    onLoad(){

    }
    
    static async showToast(text:string, showTime: int) {
        let time = 2 
        if (showTime) {
            time = showTime
        }

        let res = await gFunc.loadResSync("package/prefab/common/toastBg", Prefab)
        let toast = cc.instantiate(res);
        UIManager.addToast(toast)
        toast.setScale(0.3, 0.3,0.3)

        let label = toast.getChildByName("desc")
        let labelDesc = label.getComponent(Label)
        labelDesc.string = text

        const tw1 = new Tween(toast)
        .to(0.1, { scale: new Vec3(1, 1,1) })
        .delay(time)
        .call(() => {
            toast.destroy()
        })
        .start();
    }
}

