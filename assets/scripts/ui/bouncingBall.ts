import { _decorator, Component, Node,Tween,Prefab,Color, Graphics,PhysicsSystem2D,Label, input, Size,Input,Contact2DType,Vec3,Collider2D,RigidBody,UITransform, Button, director,Sprite,EventTarget,SpriteFrame,SpriteAtlas, math, randomRangeInt, RigidBody2D, random} from 'cc';
import { UIManager } from '../UIManager';
import { GlobalEnum } from '../global/GlobalEnum'
const { ccclass, property } = _decorator;
import { gFunc } from '../global/gFunc'
import { EventMessage } from '../eventManager'
import { russiaGameCubeTools } from './russiaGameCubeTools'
import { gameOver } from './gameOver'

cc.myEvent = new EventTarget();

@ccclass('bouncingBall')
export class bouncingBall extends Component{
    line = 10 //行
    row = 5 //列
    cube_array = [] 
    jump = false

    @property(Node)
    cube: Node = null!;

    onLoad(){
        let backBtn = cc.find("nodeLayer/back", this.node)
        backBtn.on(Button.EventType.CLICK, this.back, this);

        input.on(Input.EventType.KEY_PRESSING, this.keyDown, this);

        this.initCube()
        this.initBall()
    }

    back(){
        UIManager.close()
        cc.loader.releaseRes("public/public_item_box_2_1");
    }

    keyDown(sender) {
        let line_glow = cc.find("nodeLayer/line_glow", this.node)
        let pos = line_glow.getPosition()
        if (sender.keyCode == GlobalEnum.GAME_KEY_CODE.KEY_LEFT) { //left
            line_glow.setPosition(pos.x - 25, pos.y)
            
        }else if (sender.keyCode == GlobalEnum.GAME_KEY_CODE.KEY_RIGHT){ //right
            line_glow.setPosition(pos.x + 25, pos.y)
        }
    }

    async initCube(){
        let playBoard = cc.find("nodeLayer/playBoard", this.node)
        let playBoardPos = playBoard.getPosition()
        let playBoardSize = playBoard.getContentSize()
        let startPosx = playBoardPos.x - playBoardSize.width / 2
        let startPosy = playBoardPos.y + playBoardSize.width / 2 - 40

        for (let i = 0; i < this.line; i++) {
            for (let j = 0; j< this.row; j++) {
                let newNode = cc.instantiate(this.cube)
                newNode.setPosition(startPosx + i * 60 + 60/2 + 20, startPosy - j * 40 + 40/2)
                this.node.addChild(newNode)
                newNode.tag = i + j
                this.cube_array.push(newNode)

                let labelNode3 = new Node();
                let label3 = labelNode3.addComponent(Label);
                labelNode3.setPosition(startPosx + i * 60 + 60/2 + 20, startPosy - j * 40 + 40/2)
                label3.string = Math.floor(startPosy - j * 40 + 40/2)
                label3.fontSize = 22;
                label3.color = new cc.color(255,0,0);
                this.node.addChild(labelNode3);
                labelNode3.getComponent(UITransform).priority = 10000
            }
        }

        console.log(this.cube_array)
    }

    initBall(){
        let ball = cc.find("nodeLayer/ball", this.node)
        this.ball = ball
       
        let line_node = cc.find("nodeLayer/line_node", this.node)
          // //入射向量
        let randX = math.randomRangeInt(-320,320)
        let randY = math.randomRangeInt(500,1000)
        // console.log("randXrandXrandX", randX, randY) //-271, 714
        // let ctx = line_node.getComponent(Graphics);
        // ctx.strokeColor = Color.YELLOW;
        // ctx.moveTo(this.ball.getPosition().x, this.ball.getPosition().y);
        // ctx.lineTo(randX, randY);
        // ctx.stroke(); 
        // this.ctx = ctx 
        // this.enter_vector = this.ball.getPosition()
        // this.randX = randX
        // this.randY = randY


        var tween = new Tween(ball)
        .by(1 ,{ position: new Vec3(math.randomRangeInt(-320,320),math.randomRangeInt(500,1000),0) })
        .start();

        // var tween =  new Tween(ball)
        // .by(2 ,{ position: new Vec3(randX,randY,0) })
        // .start();

        // let collider = ball.getComponent(Collider2D);
        // if (collider) {
        //     collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            // collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            // collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            // collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
        // }

        if (PhysicsSystem2D.instance) {
            PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 只在两个碰撞体开始接触时被调用一次

        console.log("contact", contact)
        const worldManifold = contact.getWorldManifold();
        const points = worldManifold.points;
        let contactPos = points[0]
        contactPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(contactPos.x, contactPos.y, 0));

        
        // console.log("contactPos", contactPos)

         if (selfCollider.node.name == "public_aura_board") {
            var tween =  new Tween(this.ball)
            .by(2 ,{ position: new Vec3(math.randomRangeInt(-320,320),math.randomRangeInt(-500,-1000),0) })
            .start();

        //     //法向量
        //     let aura_board = contactPos
        //     this.enter_vector = aura_board

        //     this.ctx.strokeColor = Color.RED;
        //     this.ctx.moveTo(contactPos.x, contactPos);
        //     this.ctx.lineTo(contactPos.x, contactPos - 1000);
        //     this.ctx.stroke();  
            
        //     // // //反射向量 反射 = 入射 - 2（入射 点乘 法）*法
        //     const vector_n = new Vec3(this.enter_vector.x - 50, aura_board.y, 0); //入射
        //     const vector_i = new Vec3(aura_board.x, aura_board.y - 1000, 0); //法
        //     const vector_r = vector_n.subtract(vector_i.multiplyScalar(2 * vector_n.dot(vector_i)));
        //     console.log("vector_rvector_rvector_r", aura_board)

        //     this.ctx.strokeColor = Color.MAGENTA;
        //     this.ctx.moveTo(aura_board.x, aura_board.y);
        //     this.ctx.lineTo(vector_r.x/ 100000, vector_r.y/ 1000000);
        //     this.ctx.stroke(); 
            
        //     var tween =  new Tween(this.ball)
        //     .to(math.randomRange(0.8,1.5) ,{ position: new Vec3(vector_r.x/ 100000, vector_r.y/ 1000000,0) })
        //     .start();

            setTimeout(()=>{ //bug点一
                selfCollider.node.destroy()
             }, 0);
        }

        if (selfCollider.node.name == "line_glow") {
            var tween =  new Tween(this.ball)
            .by(2 ,{ position: new Vec3(math.randomRangeInt(-320,320),math.randomRangeInt(500,1000),0) })
            .start();

        //      //法向量
        //      let aura_board = contactPos
        //      this.enter_vector = aura_board

        //      this.ctx.strokeColor = Color.RED;
        //      this.ctx.moveTo(aura_board.x, aura_board.y);
        //      this.ctx.lineTo(aura_board.x, aura_board.y + 1000);
        //      this.ctx.stroke();  
 
        //      // //反射向量 反射 = 入射 - 2（入射 点乘 法）*法
        //      const vector_n = new Vec3(this.enter_vector.x, this.enter_vector.y, 0); //入射
        //      const vector_i = new Vec3(aura_board.x, aura_board.y + 1000, 0); //法
        //      const vector_r = vector_n.subtract(vector_i.multiplyScalar(2 * vector_n.dot(vector_i)));
        //      console.log("vector_rvector_rvector_r", aura_board)

        //      this.ctx.strokeColor = Color.MAGENTA;
        //     this.ctx.moveTo(aura_board.x, aura_board.y);
        //     this.ctx.lineTo(vector_r.x/ 100000, vector_r.y/ 1000000);
        //     this.ctx.stroke(); 

        //     var tween =  new Tween(this.ball)
        //     .to(math.randomRange(0.8,1.5) ,{ position: new Vec3(vector_r.x/ 100000, vector_r.y/ 1000000,0) })
        //     .start();
        }

        if (selfCollider.node.name == "wall1") {
            var tween =  new Tween(this.ball)
            .by(2 ,{ position: new Vec3(math.randomRangeInt(320,640),math.randomRangeInt(500,1000),0) })
            .start();

            
        //     //法向量
        //     // let aura_board = contactPos
        //     // this.enter_vector = aura_board
        //     // this.ctx.strokeColor = Color.RED;
        //     // this.ctx.moveTo(aura_board.x, aura_board.y);
        //     // this.ctx.lineTo(aura_board.x + 640, aura_board.y);
        //     // this.ctx.stroke();  

        //     // // //反射向量 反射 = 入射 - 2（入射 点乘 法）*法
        //     // const vector_n = new Vec3(this.enter_vector.x, this.enter_vector.y, 0); //入射
        //     // const vector_i = new Vec3(aura_board.x  + 640, aura_board.y, 0); //法
        //     // const vector_r = vector_n.subtract(vector_i.multiplyScalar(2 * vector_n.dot(vector_i)));
        //     // console.log("vector_rvector_rvector_r", aura_board)

        //     // this.ctx.strokeColor = Color.MAGENTA;
        //     // this.ctx.moveTo(aura_board.x, aura_board.y);
        //     // this.ctx.lineTo(vector_r.x/ 100000, vector_r.y/ 1000000);
        //     // this.ctx.stroke(); 

        //     var tween =  new Tween(this.ball)
        //     .to(math.randomRange(0.8,1.5) ,{ position: new Vec3(math.randomRangeInt(-320,320),math.randomRangeInt(500,1000),0) })
        //     .start();
        }

        if (selfCollider.node.name == "wall2") {
            var tween =  new Tween(this.ball)
            .by(2 ,{ position: new Vec3(math.randomRangeInt(-320,-640),math.randomRangeInt(500,1000),0) })
            .start();

        //     //法向量
        //     // let aura_board = contactPos
        //     // this.enter_vector = aura_board
        //     // this.ctx.strokeColor = Color.RED;
        //     // this.ctx.moveTo(aura_board.x, aura_board.y);
        //     // this.ctx.lineTo(aura_board.x - 640, aura_board.y);
        //     // this.ctx.stroke();  

        //     // // // //反射向量 反射 = 入射 - 2（入射 点乘 法）*法
        //     // const vector_n = new Vec3(this.enter_vector.x, this.enter_vector.y, 0); //入射
        //     // const vector_i = new Vec3(aura_board.x - 640, aura_board.y, 0); //法
        //     // const vector_r = vector_n.subtract(vector_i.multiplyScalar(2 * vector_n.dot(vector_i)));
        //     // console.log("vector_rvector_rvector_r", aura_board)

        //     // this.ctx.strokeColor = Color.MAGENTA;
        //     // this.ctx.moveTo(aura_board.x, aura_board.y);
        //     // this.ctx.lineTo(vector_r.x/ 100000, vector_r.y/ 1000000);
        //     // this.ctx.stroke(); 

        //     var tween =  new Tween(this.ball)
        //     .to(math.randomRange(0.8,1.5)  ,{ position: new Vec3(math.randomRangeInt(-320,320),math.randomRangeInt(500,1000),0) })
        //     .start();
        }
        
    }
}

