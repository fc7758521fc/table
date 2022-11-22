import { _decorator, Component, Node, Prefab} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GlobalEnum')
export class GlobalEnum {
    static GAME_TYPE_ENUM = {
        SHOOT:0,
        JUMPBALL:1,
        RUSSIACUBE:2
    }
}

