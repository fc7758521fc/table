//射击小球主逻辑
import { _decorator, Component,EventTarget, Node ,Prefab, UIOpacity,input,Vec2, Input, MeshRenderer,Camera, Vec3, Canvas,Tween, RigidBody, math, Sprite,SphereCollider, ICollisionEvent, Label, resources, SpriteFrame, assetManager, Texture2D, ImageAsset, UITransform} from 'cc';
const { ccclass, property } = _decorator;

import { gFunc } from '../global/gFunc'
import { utils } from '../global/utils'
import { objectPool } from '../global/objectPool'
import { UIManager } from '../UIManager'
cc.myEvent = new EventTarget();
import { EventMessage } from '../eventManager'
import { Label3D } from '../tools/label-3d';
import { GlobalEnum } from '../global/GlobalEnum'
import { gameOver } from './gameOver'

@ccclass('shootGame')
export class shootGame extends Component {
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

    isUpdate = false

    linePointArray = [];

    onLoad() {
        //两个对象池初始化
        objectPool.onLoad()
        this.initLinePool()
        this.initBallPool()
    }

    async start() {
        this.score = 0;

        input.on(Input.EventType.TOUCH_MOVE, this.onMouseMove, this);
        input.on(Input.EventType.TOUCH_END, this.onMouseEnd, this);

        this.initStartView();
        
        UIManager.setNodeParent(this.node)

        cc.myEvent.on(EventMessage.GAME_ENTER, (arg1, arg2, arg3) => {
            this.isUpdate = true
            this.startGame()
        });

        cc.myEvent.on(EventMessage.GAME_MORE, (arg1, arg2, arg3) => {
            this.moreGame()
        });

        cc.myEvent.on(EventMessage.GAME_OVER, (arg1, arg2, arg3) => {
            this.isUpdate = true
            this.reStartGame()
        });

        this.point = this.muzzle.getChildByName("ProgressBar")
        let bar = this.point.getChildByName("Bar")

        var tween= new Tween(bar.getComponent(UIOpacity))
        .to(0.5, { opacity: 225 })
        .to(0.5, { opacity: 0 })
        .union()
        .repeatForever()
        .start();  

    }

    //开始游戏弹窗
    async initStartView() {
        utils.gameStart()

        let ui_params = []
        let res = await gFunc.loadResSync("package/prefab/common/startPanel", Prefab)
        let commonBoard = cc.instantiate(res);
        ui_params.rootNode = commonBoard

        UIManager.showDefaultConfigUI(ui_params)
    }

    //调度器生成
    initSchedule() {
        this.schedul = function () {
            this.barrierUp()
            this.initBarrier()
        }
        this.schedule(this.schedul, 3);
    }

    //障碍物生成
    initBarrier() {
         for (let i = 0; i < 3; i++) {
            let barrier = cc.instantiate(this.obstaclePrefab)as Node;
            barrier.clickNums = 3
            barrier.active = true
            barrier.parent = this.node.parent;
            barrier.setPosition(new Vec3(math.randomRangeInt(-7, 7), 2, 0))
            let numLabel = barrier.getChildByName("Cube").getChildByName("Node").getComponent(Label3D)
            numLabel.string = "3"

            this.barrierArray.push(barrier)

            let rigid = barrier.getChildByName("Cube");
            let rb = rigid.getComponent(RigidBody);
            rb.useCCD = true;
        }
    }

    update(deltaTime: number) {
        
    }

    //得到箭头角度
    getMuzzRadu(event) {
        //将发射点设置到箭头
        let sceenPos = event.getUILocation();
        let click_x = sceenPos.x
        let click_y = sceenPos.y

        let muzzle_x = this.muzzle.position.x
        let muzzle_y = this.muzzle.position.y
        let tan_x = Math.abs(click_x - muzzle_x)
        let tan_y = Math.abs(click_y - muzzle_y)
        
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

        return power
    }

    //鼠标移动
    onMouseMove(event) {
        console.log("111111111111")
        if (this.isUpdate === false) {
            return
        }

        let sceenPos = event.getUILocation();
        this.getMuzzRadu(event)

        let sceenPosLocal = event.getLocation();
        let c_z = this.camera.node.worldPosition.z / 1000;
        let worldPoint = this.camera.screenToWorld(new Vec3(sceenPosLocal.x, sceenPosLocal.y ,c_z));

        let distance = Vec2.distance(new Vec2(this.muzzle.position.x,this.muzzle.position.y),sceenPos)
        let bar = this.point.getChildByName("Bar")
        this.point.active = true
        bar.getComponent(UITransform).setContentSize(distance,12)
    }

    //鼠标放开
    onMouseEnd(event) {
        console.log("22222222222222222")
        if (this.isUpdate === false) {
            return
        }
        this.point.active = false

        this.onMouseUp(event)
    }

    //鼠标点击
    onMouseUp(event) {
        //子弹不够无法继续发射
        if (this.modeIndex && this.modeIndex >= 10 ) {
            return 
        }

        let sceenPos = event.getUILocation();
        let power = this.getMuzzRadu(event)
        
        // 以秒为单位的时间间隔
        let interval = 0.2;
        // 重复次数
        let repeat = 2;
        // 开始延时
        let delay = 0;
        this.schedule(async function() {
            // 这里的 this 指向 component
            let res = await this.getPrefabResource("package/prefab/ui/ball", cc.Prefab)

            let ball = this.createPrefab(res);
            ball.parent = this.node.parent;
            
            let sceenPosLocal = event.getLocation();
            let c_z = this.camera.node.worldPosition.z / 1000;
            let worldPoint = this.camera.screenToWorld(new Vec3(sceenPosLocal.x, sceenPosLocal.y ,c_z));
    
            ball.setPosition(new Vec3(0.5, 22, 0))

            let rigid = ball.getChildByName("RootNode").getChildByName("ballball"); //如果层级较深的话，多级查找子节点
            let rb = rigid.getComponent(RigidBody);
            rb.useCCD = true;
            // rb.applyImpulse(new Vec3(power, -10, 0));
            // rb.useGravity = false
            // rb.setLinearVelocity(new math.Vec3(worldPoint.x, -20, 0));

            // rb.applyImpulse(new Vec3(worldPoint.x, worldPoint.y, 0));

            // let distance = Vec2.distance(new Vec2(this.muzzle.position.x,this.muzzle.position.y),sceenPos)
            // let offset = -2
            // if (worldPoint.x > 1) {
            //     offset = 2
            // }
            let distanceX = (worldPoint.x) - ball.position.x
            let distanceY = (worldPoint.y) - ball.position.y


            // console.log("worldPoint", worldPoint.x, worldPoint.y, (worldPoint.x), (worldPoint.y))
            // rb.applyImpulse(new Vec3(distanceX, distanceY, 0));
            rb.setLinearVelocity(new math.Vec3(distanceX,distanceY, 0));

            // const tw1 = new Tween(ball)
            // .to(0.5, { position: new Vec3(worldPoint.x, worldPoint.y, 0) })
            // .call(() => {
            //     rb.setLinearVelocity(new math.Vec3(distanceX,distanceY, 0));
            // })
            // .union()
            // .start();

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
        if (event.otherCollider && event.otherCollider.node && event.otherCollider.node.name == "Cube") {
            // console.log("event.otherCollider.node.parent", event.otherCollider.node)

            new Tween(event.otherCollider.node)
            .to(0.05, { scale: new Vec3(0.65, 0.65, 0.65) })
            .to(0.05, { scale: new Vec3(0.5, 0.5, 0.5) })
            .start();

            let click_index = event.otherCollider.node.parent.clickNums
            event.otherCollider.node.parent.clickNums = event.otherCollider.node.parent.clickNums - 1
            let numLabel = event.otherCollider.node.getChildByName("Node").getComponent(Label3D)
            if (numLabel && numLabel.string) {
                numLabel.string = event.otherCollider.node.parent.clickNums
            }

            let rigid = event.selfCollider.node
            let rb = rigid.getComponent(RigidBody);

            if (event.otherCollider.node.parent.clickNums <= 0 ) {
                new Tween(event.otherCollider.node)
                event.otherCollider.node.destroy();
            
                this.addScore()
                this.setBarrierrData(event.otherCollider.node.parent)
            }
        }

        if (event.otherCollider && event.otherCollider.node && event.otherCollider.node.name == "Plane_box1") {
            let rigid = event.selfCollider.node
            let rb = rigid.getComponent(RigidBody);
            rb.applyImpulse(new Vec3(30, -10, 0));
        }

        //如果小球到达底板,放入对象池里面
        if (event.otherCollider && event.otherCollider.node && event.otherCollider.node.name == "Plane_box3") {
            let rigid = event.selfCollider.node
            let rb = rigid.getComponent(RigidBody);
            rb.setLinearVelocity(new math.Vec3(0, 0, 0));
            rb.applyImpulse(new Vec3(0, 30, 0));
            // rb.useGravity = true
        }
        
        //如果小球到达底板,放入对象池里面
        if (event.otherCollider && event.otherCollider.node && event.otherCollider.node.name == "Plane_box2") {
            event.selfCollider.node.pre.destroy();
            let choosePool = objectPool.enemyPoolArray["ball"]
            // choosePool.put(event.selfCollider.node.pre); //目前还回对象池再次取用对象池道具会错位，暂未发现原因

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
        let resource =  gFunc.loadResSync(url, type) as type;
        return resource;
    }

    //生成小球
    createPrefab(res) {
        let prefab = null;
        let choosePool = objectPool.enemyPoolArray["ball"]
        if (choosePool.size() > 0) { // 通过 size 接口判断对象池中是否有空闲的对象
            prefab = choosePool.get();
        } else { // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 cc.instantiate 重新创建
            prefab = cc.instantiate(res);
        }
        return prefab;
    }

    //初始化小球对象池
    async initBallPool() {
        let resource = await gFunc.loadResSync("package/prefab/ui/ball", cc.Prefab) as Prefab; 
        objectPool.initPool(resource, "ball")
    }

    //小球数量模型
    async initBallModel() {
       for (let i = 0; i < 9 ; i++) {
            let posy = 300 - ((i+1) - 1) * 30
            let resource = await gFunc.loadResSync("test_res/voidsummon_ball1/spriteFrame", SpriteFrame) as SpriteFrame; 
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

    //游戏结束
    gameOver() {
        this.unschedule(this.schedul);
        this.initGameOverView()
        
        for(let i = 0; i < this.barrierArray.length ; i++) {
            let barrier = this.barrierArray[i];
            barrier.active = false
        }

        this.cleanAll()
    }

    // //重新开始游戏
    reStartGame() {
        this.initStartView()
    }

    //重新开始清除数据
    cleanAll() {
        for(let i = 0; i < this.barrierArray.length ; i++) {
            let barrier = this.barrierArray[i];
            barrier.destroy()
        }

        for(let i = 0; i < this.modeArray.length ; i++) {
            let ballModel = this.modeArray[i];
            ballModel.destroy()
        }

        this.barrierArray = []
        this.modeArray = []
        this.schedul = null
        this.isUpdate = false
    }

    //更多游戏入口(在里面写入多种小游戏，成为一个合集)
    //目前小游戏计划（射击小球， 弹弹球， 俄罗斯方块）
    async moreGame() {
        let ui_params = []
        let res = await gFunc.loadResSync("package/prefab/common/Board", Prefab)
        let commonBoard = cc.instantiate(res);
        ui_params.rootNode = commonBoard

        UIManager.showDefaultConfigUI(ui_params)
    }

    //开始游戏
    startGame() {
        this.initBarrier();

        this.initSchedule()

        this.initBallModel()
    }

    //游戏结束
    async initGameOverView() {
        let ui_params = []
        let res = await gFunc.loadResSync("package/prefab/common/over", Prefab)
        let commonBoard = cc.instantiate(res);
        ui_params.rootNode = commonBoard
        commonBoard.getComponent(gameOver).setTag(GlobalEnum.GAME_TYPE_ENUM.SHOOT)

        UIManager.showDefaultConfigUI(ui_params)
    }

    //初始化虚线对象池
    async initLinePool() {
        let resource = await gFunc.loadResSync("package/prefab/common/shop_point2", Prefab) 
        objectPool.initPool(resource, "point")
    }

    onDisable(){
        console.log("dsfadsfasfasdf")
    }
}

