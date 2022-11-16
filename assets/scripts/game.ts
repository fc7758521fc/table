import { _decorator, Component, Node ,Prefab, input, Input, Camera, Vec3, Canvas,Tween, RigidBody, math, Sprite,SphereCollider, ICollisionEvent, Label, resources, SpriteFrame, assetManager, Texture2D, ImageAsset} from 'cc';
const { ccclass, property } = _decorator;

import { Ball } from './Ball'
import { utils } from './utils'
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

    @property(Node)
    obstaclePrefab: Node = null!;

    modeArray:Array = [];
    modeIndex = 0

    barrierArray:Array = [];

    async start() {
        this.score = 0;

        input.on(Input.EventType.TOUCH_START, this.onMouseUp, this);

        this.initBarrier();

        this.initSchedule()

        this.initBallPool()

        this.initBallModel()

        // let ball = cc.instantiate(res);
        // ball.parent = this.node.parent;
        // ball.setPosition(new Vec3(10, 22, 0))

        // let res = await Ball.createBall("package/prefab/fight/ball", Prefab)
        // let ball = cc.instantiate(res)as Node;

        // let prefab = resources.load("package/prefab/fight/ball/prefab", Prefab, (err, prefab) => {
        //     console.log("asdasdasdasdasdasdasdasd", err)
        // });

        // resources.load("test_res/uibg_smith/spriteFrame", SpriteFrame, (err, spriteFrame) => {
        //     this.bg.getComponent(Sprite).spriteFrame = spriteFrame

        //     console.log("sprite", this.bg.getComponent(Sprite).spriteFrame)
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

    //调度器生成
    initSchedule() {
        this.schedule(function() {
            // 这里的 this 指向 component
            this.initBarrier()
            this.barrierUp()
        }, 5);
    }

    //障碍物生成
    initBarrier() {
         for (let i = 0; i < 3; i++) {
            let barrier = cc.instantiate(this.obstaclePrefab)as Node;
            barrier.active = true
            barrier.parent = this.node.parent;
            barrier.setPosition(new Vec3(math.randomRangeInt(-5, 5), 2, 0))

            this.barrierArray.push(barrier)
        }
    }

    update(deltaTime: number) {
        
    }

    //鼠标点击
    onMouseUp(event) {
        //子弹不够无法继续发射
        if (this.modeIndex && this.modeIndex >= 10 ) {
            return 
        }

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
        let interval = 0.2;
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
            rigid.pre = ball

            let collider = rigid.getComponent(SphereCollider);
            collider.on('onCollisionEnter', this.onCollision, this);
            
            this.modeIndex = this.modeIndex + 1
            this.reduceModel()
        }, interval, repeat, delay);
    }

    //碰撞检测
    private onCollision (event: ICollisionEvent) {
        //如果和小球碰撞
        if (event.otherCollider.node.name == "Cube") {
            event.otherCollider.node.destroy();
            // console.log("event.otherCollider", event.otherCollider.node.parent)
            // console.log("this.barrierArray", this.barrierArray[0])
            this.addScore()
            this.setBarrierrData(event.otherCollider.node.parent)
        }

        if (event.otherCollider.node.name == "Plane_box1") {
            let rigid = event.selfCollider.node
            let rb = rigid.getComponent(RigidBody);
            rb.applyImpulse(new Vec3(30, -10, 0));
        }

        //如果小球到达底板,放入对象池里面
        if (event.otherCollider.node.name == "Plane_box3") {
            let rigid = event.selfCollider.node
            let rb = rigid.getComponent(RigidBody);
            rb.setLinearVelocity(new math.Vec3(0, 0, 0));
            rb.applyImpulse(new Vec3(0, 30, 0));
        }
        
        //如果小球到达底板,放入对象池里面
        if (event.otherCollider.node.name == "Plane_box2") {
            event.selfCollider.node.pre.destroy();
            // BallPool.enemyPool.put(event.selfCollider.node.pre); //目前还回对象池再次取用对象池道具会错位，暂未发现原因

            this.modeIndex = this.modeIndex - 1
            this.reduceModel()
        }
    }

    //积分增加
    addScore(){
        this.score = this.score + 1
        let label1 = this.node.getChildByName("score_label")
        let l1 = label1.getComponent(Label)
        l1.string = "score :" +  this.score
    }

    //获取动态下载资源
    getPrefabResource(url: string, type) {
        let resource =  Ball.loadResSync(url, type) as type;
        return resource;
    }

    //生成小球
    createPrefab(res) {
        let prefab = null;
        if (BallPool.enemyPool.size() > 0) { // 通过 size 接口判断对象池中是否有空闲的对象
            prefab = BallPool.enemyPool.get();
        } else { // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 cc.instantiate 重新创建
            prefab = cc.instantiate(res);
        }
        return prefab;
    }

    //初始化对象池
    async initBallPool() {
        let resource = await Ball.loadResSync("package/prefab/fight/ball", cc.Prefab) as Prefab; 
        BallPool.initPool(resource)
    }

    //小球数量模型
    async initBallModel() {
       for (let i = 0; i < 9 ; i++) {
            let posy = 300 - ((i+1) - 1) * 30
            let resource = await Ball.loadResSync("test_res/voidsummon_ball1/spriteFrame", SpriteFrame) as SpriteFrame; 
            let newNode = new Node();
            let sprite = newNode.addComponent(Sprite);
            newNode.getComponent(Sprite).spriteFrame = resource
            newNode.setPosition(190,posy)
            newNode.setScale(0.3, 0.3,0.3)
            this.node.addChild(newNode)

            this.modeArray.push(newNode)
       }
    }

    //小球模型控制
    reduceModel(bool) {
        let remain = this.modeArray.length - this.modeIndex;
        for(let i = 0; i < this.modeArray.length ; i++) {
            let index = i + 1;
            if (index <= remain) {
                this.modeArray[i].active = true
            }else{
                this.modeArray[i].active = false
            }
        }
    }

    //障碍物控制
    barrierUp() {
        for(let i = 0; i < this.barrierArray.length ; i++) {
            let barrier = this.barrierArray[i];
            let pos_y = barrier.getPosition().y
            if (barrier) {
                let old_x = barrier.getPosition().x
                let old_y = barrier.getPosition().y
                barrier.setPosition(new Vec3(old_x, old_y + 2, 0))
            }

            if (pos_y >= 10) {
                this.gameOver()
                return
            }
        }
    }

    //设置setBarrierrData
    setBarrierrData(node) {
        for(let i = 0; i < this.barrierArray.length ; i++) {
            let barrier = this.barrierArray[i];
            if (barrier._id == node._id) {
                this.barrierArray.splice(i, 1)
                return
            }
        }
    }

    gameOver() {
        let mask = cc.find("Canvas/over")
        mask.active = true
        for(let i = 0; i < this.barrierArray.length ; i++) {
            let barrier = this.barrierArray[i];
            barrier.active = false
        }

        utils.gamePause()
    }

    reStartGame() {
        let mask = cc.find("Canvas/over")
        mask.active = false
        utils.gameStart()
    }
}

