import { _decorator, Component, Node, Prefab} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GlobalEnum')
export class GlobalEnum {
    static GAME_TYPE_ENUM = { //游戏类型枚举
        SHOOT:0,
        JUMPBALL:1,
        RUSSIACUBE:2,
        ELIMINATE:3,
        QUADTREE:4, 
        WATERMELON:5,
        ASTAR:6,
        NETTEST:7,
    }

    static GAME_KEY_CODE = { //按钮枚举
        KEY_LEFT:37,
        KEY_TOP:38,
        KEY_RIGHT:39,
        KEY_DOWN:40
    }
}

