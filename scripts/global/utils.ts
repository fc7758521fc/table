import { _decorator, Component, Node, Prefab, director, game} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('utils')
export class utils {
    //游戏暂停
    public static gamePause() {
        director.pause()
    }

    //游戏开始
    public static gameStart() {
        // director.loadScene("main")
        director.resume()
    }
}

