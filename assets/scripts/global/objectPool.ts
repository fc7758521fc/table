import { _decorator, Component, Node, Prefab, NodePool} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('objectPool')
export class objectPool{
    onLoad() {
        
    }

    static initPool(res) {
        this.enemyPool = new NodePool();
        let initCount = 30;
        for (let i = 0; i < initCount; ++i) {
            let enemy = cc.instantiate(res); // 创建节点
            this.enemyPool.put(enemy); // 通过 put 接口放入对象池
        }
    }
}

