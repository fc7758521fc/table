import { _decorator, Component, Node ,Prefab, input, Input, Camera, Vec3, Canvas, Tween, RigidBody, math, Sprite,SphereCollider, ICollisionEvent, Label, resources, SpriteFrame, assetManager, Texture2D, ImageAsset} from 'cc';
const { ccclass, property } = _decorator;

import { Ball } from './Ball'
import { Utils } from './Utils'
import { BallPool } from './BallPool'

@ccclass('Game')
export class Game extends Component {
    @property(Prefab)
    ballPrefab: Prefab = null!;

    @property(Camera)
    camera: Camera = null!;

    @property(Node)
    muzzle: Node = null!;

    @property(Node)
    bg: Node = null!;

    @property(Prefab)
    obstaclePrefab: Prefab = null!;

    async start() {
        this.score = 0;

        input.on(Input.EventType.TOUCH_START, this.onMouseUp, this);

        this.initSchedule()

        this.initBallPool()
        // let ball = cc.instantiate(res);
        // ball.parent = this.node.parent;
        // ball.setPosition(new Vec3(10, 22, 0))

        // let res = await Ball.createBall("package/prefab/fight/ball", Prefab)
        // let ball = cc.instantiate(res)as Node;

        // let prefab = resources.load("package/prefab/fight/ball/prefab", Prefab, (err, prefab) => {
        //     console.log("asdasdasdasdasdasdasdasd", err)
        // });

        // resources.load("test_res/uibg_smith/spriteFrame", SpriteFrame, (err, spriteFrame) => {
            // let res = await this.createSprite("test_res/uibg_smith/spriteFrame")
            // console.log("resresresresres", res)
            // this.bg.getComponent(Sprite).spriteFrame = res
        // });

        // let remoteUrl = "http://127.0.0.1/uibg_sealland.png";
        // let that = this
        // assetManager.loadRemote<ImageAsset>(remoteUrl, function (err, imageAsset) {
        //     let spriteFrame = new SpriteFrame();
        //     const texture = new Texture2D();
        //     texture.image = imageAsset;
        //     spriteFrame.texture=texture;

        //     that.bg.getComponent(Sprite).spriteFrame = spriteFrame
        // });
    }

    initSchedule() {
        this.schedule(function() {
            // 这里的 this 指向 component
            this.initBarrier();
        }, 2,0);
    }

    initBarrier() {
        let barrier = cc.instantiate(this.obstaclePrefab)as Node;
        barrier.parent = this.node.parent;
        barrier.setPosition(new Vec3(math.randomRangeInt(-5, 5), 10, 0))
        this.barriernode = barrier
    }

    update(deltaTime: number) {
        
    }

    onMouseUp(event) {
        //将发射点设置到箭头2.0
        let sceenPos = event.getUILocation();
        let click_x = sceenPos.x
        let click_y = sceenPos.y

        let muzzle_x = this.muzzle.position.x
        let muzzle_y = this.muzzle.position.y
        let tan_x = math.bits.abs(click_x - muzzle_x)
        let tan_y = math.bits.abs(click_y - muzzle_y)

        
        let tan = tan_x/tan_y;
        let radu= tan / 3.1415926 * 180
        let end_radu = -90

        if (radu > 45) {
            radu = 45
        }
        let power = 0
        if (click_x > muzzle_x) {
            end_radu = - 90 + radu
            power = radu
        }else{
            end_radu = - 90 - radu
            power = -radu
        }
        this.muzzle.setRotationFromEuler(0,0, end_radu)
        
        // 以秒为单位的时间间隔
        let interval = 0.1;
        // 重复次数
        let repeat = 0;
        // 开始延时
        let delay = 0;
        this.schedule(async function() {
            // 这里的 this 指向 component
            let res = await this.getPrefabResource("package/prefab/fight/ball", cc.Prefab)

            let ball = this.createPrefab(res);
            ball.parent = this.node.parent;

            let sceenPosLocal = event.getLocation();
            let c_z = this.camera.node.worldPosition.z / 1000;
            let worldPoint = this.camera.screenToWorld(new Vec3(sceenPosLocal.x, sceenPosLocal.y ,c_z));
    
            ball.setPosition(new Vec3(worldPoint.x, 22, 0))
    
            let rigid = ball.getChildByName("RootNode").getChildByName("ballball"); //如果层级较深的话，多级查找子节点
            let rb = rigid.getComponent(RigidBody);
            rb.applyImpulse(new Vec3(power, -10, 0));
            rb.setLinearVelocity(new math.Vec3(worldPoint.x, -20, 0));
    
            let collider = rigid.getComponent(SphereCollider);
            collider.on('onCollisionEnter', this.onCollision, this);
        }, interval, repeat, delay);
    }

    private onCollision (event: ICollisionEvent) {
        // console.log(event.otherCollider.node.name);
        
        //如果和小球碰撞
        if (event.otherCollider.node.name == "Sphere") {
            this.barriernode.destroy();
            this.initBarrier()
            this.addScore()
        }

        if (event.otherCollider.node.name == "Plane_box1") {
            console.log("onCollision", event)
            let rigid = event.selfCollider.node
            let rb = rigid.getComponent(RigidBody);
            rb.applyImpulse(new Vec3(30, -10, 0));
            // rb.setLinearVelocity(new math.Vec3(30, -20, 0));
        }

        //如果小球到达底板,放入对象池里面
        if (event.otherCollider.node.name == "Plane_box3") {
            console.log("onCollision", event)
            let rigid = event.selfCollider.node
            let rb = rigid.getComponent(RigidBody);
            rb.setLinearVelocity(new math.Vec3(0, 0, 0));
            rb.applyImpulse(new Vec3(0, 30, 0));
        }
        
        console.log("event.selfCollider.node", event.selfCollider.node._lpos.y)
        
    }

    addScore(){
        this.score = this.score + 1
        let label1 = this.node.getChildByName("score_label")
        let l1 = label1.getComponent(Label)
        l1.string = "score :" +  this.score
    }

    getPrefabResource(url: string, type) {
        let resource =  Ball.loadResSync(url, type) as type;
        return resource;
    }

    createPrefab(res) {
        let prefab = null;
        if (BallPool.enemyPool.size() > 0) { // 通过 size 接口判断对象池中是否有空闲的对象
            prefab = BallPool.enemyPool.get();
        } else { // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 cc.instantiate 重新创建
            prefab = cc.instantiate(res);
        }
        console.log(BallPool.enemyPool)
        // let prefab =  cc.instantiate(res);
        return prefab;
    }

    //初始化对象池
    async initBallPool() {
        let resource = await Ball.loadResSync("package/prefab/fight/ball", cc.Prefab) as Prefab; 
        BallPool.initPool(resource)

        // console.log(BallPool.enemyPool)
    }
}

