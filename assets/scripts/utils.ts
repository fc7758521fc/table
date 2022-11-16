import { _decorator, Component, Node, Prefab, director, game} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('utils')
export class utils {
    static gamePause() {
        director.pause()
    }

    static gameStart() {
        director.loadScene("main")
        director.resume()
    }
}

