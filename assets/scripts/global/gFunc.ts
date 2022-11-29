import { _decorator, Component, Node, Prefab} from 'cc';
const { ccclass, property } = _decorator;
import { toast } from '../ui/commonUi/toast'

@ccclass('gFunc')
export class gFunc {
    static loadResSync(url: string, type: typeof cc.Asset) {
        return new Promise((resolve, reject) => {
            cc.resources.load(url, type, (error: Error, atlas: cc.Asset) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(atlas);
                }
            });
        });
    }

    static loadPlistSync(url: string, type: typeof cc.Asset) {
        return new Promise((resolve, reject) => {
            cc.loader.loadRes(url, type, (error: Error, resource: cc.Asset) => {
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

    //数据合并
    static mergerData(data) {
        let merge = []
        for (let i = 0; i< data.length; i++) {
            let had_load = false
            for(let j =0; j< merge.length; j++){
                if(merge[j] == data[i]) {
                    had_load = true
                }
            }

            if (had_load == false) {
                merge.push(data[i])
            }
        }
        
        return merge
    }
}

