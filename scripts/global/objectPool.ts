import { _decorator, Component, Node, Prefab, NodePool} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('objectPool')
export class objectPool{
    static onLoad() {
        this.enemyPoolArray = []
    }

    static initPool(res,name) {
        let initCount = 15;
        let enemyPool = new NodePool();
        for (let i = 0; i < initCount; ++i) {
            let enemy = cc.instantiate(res); // 创建节点
            enemyPool.put(enemy); // 通过 put 接口放入对象池
        }

        this.enemyPoolArray[name] = enemyPool
    }
}

