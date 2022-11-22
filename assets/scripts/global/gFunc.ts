import { _decorator, Component, Node, Prefab} from 'cc';
const { ccclass, property } = _decorator;
import { toast } from '../ui/commonUi/toast'

@ccclass('gFunc')
export class gFunc {
    static loadResSync(url: string, type: typeof cc.Asset) {
        return new Promise((resolve, reject) => {
            cc.resources.load(url, type, (error: Error, resource: cc.Asset) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(resource);
                }
            });
        });
    }

    static showToast(text, showTime) {
        toast.showToast(text)
    }
}

