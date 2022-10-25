import { _decorator, Component, Node ,Prefab, input, Input, Camera, Vec3, Canvas, Tween, RigidBody, math, SphereCollider, ICollisionEvent, Label} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Game')
export class Game extends Component {
    @property(Node)
    startBtn: Node = null;

    @property(Prefab)
    ballPrefab: Prefab = null!;

    @property(Prefab)
    testPrefab: Prefab = null!;

    @property(Camera)
    camera: Camera = null!;

    @property(Node)
    muzzle: Node = null!;

    @property(Prefab)
    obstaclePrefab: Prefab = null!;

    start() {
        console.log("asdasdasd")
        const data = Ipb_player.AwesomeMessage.encode({name :'fc', age:'18'}).finish();
        console.log("encode", data)
        
        const message = Ipb_player.AwesomeMessage.decode(data);
        console.log("decode", message)

        this.score = 0;

        input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);

        this.initSchedule()
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

    //开始响应事件
    startGame() {
        this.startBtn.active = false;
    }

    onMouseUp(event) {
        //小球生成，刚体受力，坐标转换
        // let ball = cc.instantiate(this.ballPrefab)as Node;
        // ball.parent = this.node.parent;

        //ui控件点击坐标
        // console.log("getLocation", event.getLocation(), event.getUILocation())
        // let ball = cc.instantiate(this.testPrefab)as Node;
        // ball.setPosition(event.getUILocation().x - 320, event.getUILocation().y - 480);
        // ball.parent = this.node;
        
        //屏幕坐标转换到3d坐标
        // let sceenPos = event.getLocation();
        // let c_z = this.camera.node.worldPosition.z / 1000;
        // let worldPoint = this.camera.screenToWorld(new Vec3(sceenPos.x, sceenPos.y ,c_z));
        // ball.setWorldPosition(worldPoint);

        //  tween
        // const tw = new Tween(ball)
        //     .by(3, { position: new Vec3(0, -100, 0) })
        //     .call(() => {
        //         console.log('It is a callback.')
        //     })
        //     // 将前面的三个 action 整合为一个 action
        //     // .union()
        //     .start();

        // 给刚体一个力
        // let rigid = ball.getChildByName("RootNode").getChildByName("Sphere001"); //如果层级较深的话，多级查找子节点
        // let rb = rigid.getComponent(RigidBody);
        // rb.applyImpulse(new Vec3(0, -20, 0));

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
        
        let ball = cc.instantiate(this.ballPrefab)as Node;
        ball.parent = this.node.parent;
        
        let sceenPosLocal = event.getLocation();
        let c_z = this.camera.node.worldPosition.z / 1000;
        let worldPoint = this.camera.screenToWorld(new Vec3(sceenPosLocal.x, sceenPosLocal.y ,c_z));
        // console.log(worldPoint)

        ball.setPosition(new Vec3(worldPoint.x, 22, 0))

        let rigid = ball.getChildByName("RootNode").getChildByName("ballball"); //如果层级较深的话，多级查找子节点
        let rb = rigid.getComponent(RigidBody);
         rb.applyImpulse(new Vec3(power, -10, 0));
        rb.setLinearVelocity(new math.Vec3(worldPoint.x, -20, 0));

        let collider = rigid.getComponent(SphereCollider);
        collider.on('onCollisionEnter', this.onCollision, this);

    }

    private onCollision (event: ICollisionEvent) {
        console.log(event.otherCollider.node.name);

        if (event.otherCollider.node.name == "Sphere") {
            this.barriernode.destroy();
            this.initBarrier()
            this.addScore()
        }
    }

    addScore(){
        this.score = this.score + 1
        let label1 = this.node.getChildByName("score_label")
        let l1 = label1.getComponent(Label)
        l1.string = "score :" +  this.score
    }
}

