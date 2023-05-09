import { _decorator, Component, Node, Tween,Color, Prefab, Label, input, Size,Input,Vec3,UITransform, Button, director,Sprite,EventTarget,SpriteFrame,SpriteAtlas, math, randomRangeInt, Vec2} from 'cc';
import { UIManager } from '../../UIManager';
import { GlobalEnum } from '../../global/GlobalEnum'
const { ccclass, property } = _decorator;
import { gFunc } from '../../global/gFunc'
import { EventMessage } from '../../eventManager'
// import { russiaGameCubeTools } from './russiaGameCubeTools'
// import { gameOver } from './gameOver'
import { monsterFactory } from '../tower/monsterFactory'
import { turretFactory } from '../tower/turretFactory'


cc.myEvent = new EventTarget();

@ccclass('aStar')
export class aStar extends Component{
    cellSize = 80
    line = 8 //行
    row = 11 //列
    cellArray = []
    start_pos = new Vec2(0,0)

    turretArray = []
    monsterArray = []
    monsterMaxNum  = 0//最大怪物数量

    onLoad(){
        let backBtn = cc.find("nodeLayer/back", this.node)
        backBtn.on(Button.EventType.CLICK, this.back, this);

        let nodeLayer = cc.find("nodeLayer", this.node)
        nodeLayer.on(Input.EventType.TOUCH_START, this.touchStart, this);

        this.initBoard()
        this.scheduleBullet()
    }
    
    back(){
        UIManager.close()
        cc.loader.releaseRes("public/public_item_box_2_1");
    }


    async initBoard(){
        let playBoard = cc.find("nodeLayer/playBoard", this.node)
        let playBoardPos = playBoard.getPosition()
        let playBoardSize = playBoard.getContentSize()
        let startPosx = playBoardPos.x - playBoardSize.width / 2
        let startPosy = playBoardPos.y - playBoardSize.height / 2

        for (let i = 0; i < this.line; i++) {
            for (let j = 0; j< this.row; j++) {
                let atlas = await gFunc.loadPlistSync("test_res/public.plist", SpriteAtlas) as SpriteAtlas; 
                const frame = atlas.getSpriteFrame('public/public_item_box_4_1');

                let newNode = new Node();
                let sprite = newNode.addComponent(Sprite);
                // let btn = newNode.addComponent(Button)
                newNode.getComponent(Sprite).spriteFrame = frame
                newNode.getComponent(UITransform).setContentSize(new Size(this.cellSize, this.cellSize))
                newNode.setPosition(startPosx + i * this.cellSize + this.cellSize/2,startPosy + j * this.cellSize + this.cellSize/2)
                this.node.addChild(newNode)
                newNode.i = i
                newNode.j = j

                let labelNode2 = new Node();
                let label2 = labelNode2.addComponent(Label);
                labelNode2.setPosition(new Vec3(startPosx + i * this.cellSize + this.cellSize/2,startPosy + j * this.cellSize + this.cellSize/2))
                label2.string = i + "," + j
                label2.fontSize = 26;
                label2.color = new cc.color(255,255,0);
                this.node.addChild(labelNode2);
                
                //障碍物
                if (this.isBarrier(i, j)) {
                    const barrierFrame = atlas.getSpriteFrame('public/public_item_box_6');
                    newNode.getComponent(Sprite).spriteFrame = barrierFrame
                    newNode.getComponent(UITransform).priority = 100
                }
                
                //终点
                if (this.isEnded(i, j)) {
                    const endedFrame = atlas.getSpriteFrame('public/public_item_box_4');
                    newNode.getComponent(Sprite).spriteFrame = endedFrame
                    newNode.getComponent(UITransform).priority = 100
                }

                this.cellArray.push(newNode)
            }
        }
        
        this.schedul = function () {
            let monsterIndex = 0
            this.startAttack().then(val => {
                if (val) {
                    val.setPosition(this.getNodePositon(0,0).x, this.getNodePositon(0,0).y)
                    this.node.addChild(val)
                    this.roleMove(val, 7, 0, monsterIndex);
                    
                    this.monsterArray.push(val)
                    monsterIndex++
                }

                this.monsterMaxNum = this.monsterMaxNum + 1
                if (this.monsterMaxNum >= 10) {
                    this.unschedule(this.schedul);
                }
            });
        }
        this.schedule(this.schedul, 2);
    }

    //终点合集
    isEnded(x, y) {
        let end = [
            new Vec3(7,0),
        ]
        
        for (let i = 0; i < end.length; i++) {
            let endPos  = end[i]
            if (endPos.x == x && endPos.y == y) {
                return true
            }
        }
    
        return false
    }

    //障碍物合集
    isBarrier(x, y) {
        let barr = [
            new Vec3(1,0),
            new Vec3(1,1),
            new Vec3(1,2),
            new Vec3(1,3),
            new Vec3(1,4),
            new Vec3(1,5),
            new Vec3(1,6),
            new Vec3(1,7),
            new Vec3(1,8),
            new Vec3(1,9),

            new Vec3(3,1),
            new Vec3(3,2),
            new Vec3(3,3),
            new Vec3(3,4),
            new Vec3(3,5),
            new Vec3(3,6),
            new Vec3(3,7),
            new Vec3(3,8),
            new Vec3(3,9),
            new Vec3(3,10),

            new Vec3(5,0),
            new Vec3(5,1),
            new Vec3(5,2),
            new Vec3(5,3),
            new Vec3(5,4),
            new Vec3(5,5),
            new Vec3(5,6),
            new Vec3(5,7),
            new Vec3(5,8),
            new Vec3(5,9),

            new Vec3(7,1),
            new Vec3(7,2),
            new Vec3(7,3),
            new Vec3(7,4),
            new Vec3(7,5),
            new Vec3(7,6),
            new Vec3(7,7),
            new Vec3(7,8),
            new Vec3(7,9),
            new Vec3(7,10),

        ]
        
        for (let i = 0; i < barr.length; i++) {
            let barrPos  = barr[i]
            if (barrPos.x == x && barrPos.y == y) {
                return true
            }
        }
    
        return false
    }

    getNodePositon(x, y) {
        let playBoard = cc.find("nodeLayer/playBoard", this.node)
        let playBoardPos = playBoard.getPosition()
        let playBoardSize = playBoard.getContentSize()
        let startPosx = playBoardPos.x - playBoardSize.width / 2
        let startPosy = playBoardPos.y - playBoardSize.height / 2

        return new Vec2(startPosx + x * this.cellSize + this.cellSize/2,startPosy + y * this.cellSize + this.cellSize/2) 
    }

    touchStart(event) {
        let sceenPos = event.getUILocation();
        let choose_x = Math.floor(sceenPos.x - 320)
        let choose_y = Math.floor(sceenPos.y - 480)
        let choose_cube

        for(let i = 0; i < this.cellArray.length; i++) {
            let cube = this.cellArray[i]
            let pos = cube.getPosition()
            let right_x = pos.x + this.cellSize/2
            let left_x = pos.x - this.cellSize/2
            let top_y = pos.y + this.cellSize/2
            let bottom_y = pos.y - this.cellSize/2
            // console.log("startpos", choose_x, choose_y, left_x, right_x, top_y, bottom_y)

            if (choose_x >= left_x && choose_x <=right_x && choose_y >= bottom_y && choose_y <=top_y) {
                choose_cube = cube 
                break  
            }
        }

        if (choose_cube) {
            if (this.isBarrier(choose_cube.i , choose_cube.j)) { //如果是障碍物则可以建立炮塔
                let x = choose_cube.i
                let y = choose_cube.j
                this.createTurret(x , y).then(val => {
                    val.setPosition(this.getNodePositon(x,y).x,this.getNodePositon(x,y).y)
                    this.node.addChild(val)
                    val.getComponent(UITransform).priority = 200

                    this.turretArray.push(val)
                })
            }
        }
    }

    roleMove(mobs, x, y, mIndex) {
        let ismove = this.findPath(this.start_pos, new Vec2(x,y)) 
        if (ismove == false) {
            return
        }

        let index = 0
        let self = this
        function move() {
            let pos = self.pathList[self.pathList.length - 1 - index]

            var tween =  new Tween(mobs)
            .to(0.5, { position: new Vec3(self.getNodePositon(pos.x,pos.y).x,self.getNodePositon(pos.x,pos.y).y, 0) })
            .call(() => {
                index = index + 1
                if (index < self.pathList.length) {
                    move()
                }else{
                    if (mobs) {
                        mobs.destroy()
                        this.monsterArray.splice(mIndex, 1)
                        console.log("this.monsterArraythis.monsterArray", this.monsterArray)
                    }
                }
            })
            .start();
        }
        
        move()
    }

    findPath(startPos, endPos) {
        let endCoord = endPos
        let startCoord = startPos

        if (endCoord.x == startCoord.x && endCoord.y == startCoord.y) {
            return false
        }

        if (this.isBarrier(endCoord.x , endCoord.y)) {
            return false
        }

        let openList = []
        let closeList = []
        let pathList = []

        this.openList = openList
        this.closeList = closeList 
        this.pathList = pathList

        this.endCoord = endCoord

        this.startBlock = this.createBlock(startCoord)
        openList.push(this.startBlock)

        while(openList.length > 0 && this.endBlock == null) {
            let minFIndex = this.getMinFNode() 
            let centerNode = this.openList[minFIndex]
            this.openList.splice(minFIndex, 1)
            let cx = centerNode.coord.x
            let cy = centerNode.coord.y
            this.closeList['${cx}_${cy}'] = centerNode

            //遍历该节点周围的4个节点
            let neighbor = this.getPathOffset(centerNode.coord)

            for (let i = 0; i< neighbor.length ; i++) {
                let x = neighbor[i].x
                let y = neighbor[i].y

                let is_ok = true

                //-- 超出边界跳过
                if (is_ok && this.isOutBorder(x, y)) {
                    is_ok = false
                }
                    

                //-- 是障碍物则跳过
                if (is_ok && this.isBarrier(x, y)) {
                    is_ok = false
                }
                    
                //-- 已经在closeList中则跳过
                if (is_ok && this.isInCloseList(x, y)) {
                    is_ok = false
                } 

                if (is_ok) {
                    if (endCoord.x == x && endCoord.y == y) {
                        this.endBlock = this.createBlock(endCoord, centerNode)
                        break
                    }

                    let testNode = this.getOpenListNode(x, y)
                    if (testNode) {
                        let newG = 1 + centerNode.G
                        if (newG < testNode.G) {
                            testNode.parent = centerNode
                            this.updateBlockGHF(testNode)
                        }
                    }else{
                        testNode = this.createBlock(new Vec2(x, y), centerNode)
                        this.openList.push(testNode)
                    }
                }
            }
        }

        if (this.endBlock) {
            let pathList = [this.endBlock.coord]
            let parentNode = this.endBlock.parent

            while(parentNode) {
                pathList.push(parentNode.coord)
                parentNode = parentNode.parent
            }

            if (pathList.length > 0) {
                pathList.splice(pathList.length, 1)
            }

            this.pathList = pathList
            this.endBlock = null
        }

        return true
    }

    //创建寻路数据块
    createBlock(coord, parent) {
        let block = {
            coord : coord,
            parent : parent || null
        }

        this.updateBlockGHF(block)
        return block
    }

    //更新节点的GHF值。 F=G+H
    //--[[
    //    F:寻路消耗
    //    G:该节点距离起点的路径长
    //    H:该节点距离终点的路径长估值，可用曼哈顿长度计算
    updateBlockGHF(block) {
        block.G = this.getG(block)
        block.H = this.getH(block)
        block.F = block.G + block.H

    }

    //获取G值
    getG(block) {
       if (block.parent == null) {
            return 0 
       }

       return this.cellSize + block.parent.G
    }

    //获取H值
    getH(block) {
        if (block.parent == null) {
             return 0 
        }
        
        let endCoord = this.endCoord

        return block.coord.x - endCoord.x + block.coord.y - endCoord.y
    }

    // 对openList排序，F由大到小
    getMinFNode() {
        let index = 0
        let F = this.openList[index].F

        for (let i = 0; i < this.openList; i++) {
            let tmpF = this.openList[i].F
            if (tmpF < F) {
                index = i
                F = tmpF
            }
        }

        return index
    }

    // 目标格子周边格子的偏移
    getPathOffset(coord) {
        // 临近4个点的偏移
        let pathOffest = [
            new Vec2(0, 1),
            new Vec2(0, -1),
            new Vec2(-1, 0),
            new Vec2(1, 0),
        ]
    
        let neighbor = []
        for(let i = 0; i < pathOffest.length; i++) {
            neighbor.push(new Vec2(pathOffest[i].x + coord.x, pathOffest[i].y + coord.y))
        }
        return neighbor
    }

    isOutBorder(x, y) {
        return x < 0 || x > (8 - 1) || y < 0 || y > (11- 1)
    }

    isInCloseList(x, y) {
       if (this.closeList['${x}_${y}']) {
            return true 
       }else{
            return false
       }
    }

    getOpenListNode(x, y) {
        for(let i = 0; i < this.openList.length; i++) {
            let node = this.openList[i]
            if (node.coord.x == x && node.coord.y == y) {
                return node
            }
        }

        return null
    }

    //生成小怪
    startAttack() {
        let monster = monsterFactory.getMonsterType(1);
        return monster
    }

    //生成炮塔
    createTurret() {
        let turret = turretFactory.getTurretType(1);
        return turret

    }

    lateUpdate() {
        for (let i = 0; i <this.turretArray.length ; i++) {
            let turret = this.turretArray[i]
            for (let j = 0; j < this.monsterArray.length ; j++) {
                let monster = this.monsterArray[j]
                if (monster && turret) {
                    let distace = Vec2.distance(turret.getPosition(), monster.getPosition())
                    console.log("111111111111111111111111", 123)
                    if (distace <= 250) {
                        turret.getComponent(Sprite).color = Color.GREEN
                        if (turret.target == null) {
                            turret.target = monster //设置标记
                            turret.target.mTag = j
                        }
                    }else{
                        if (turret.target == monster) {
                            turret.target = null //设置标记
                            turret.getComponent(Sprite).color = Color.WHITE
                        }
                    }
                }
            }
        }
    }

    //全局子弹节点调度器
    scheduleBullet() {
        this.schedul = function () {
            for (let i = 0; i <this.turretArray.length ; i++) {
                let turret = this.turretArray[i]
                if (turret && turret.target) {
                    console.log("+++++++++++++检测检测")
                    let bullet = cc.find("bullet", this.node)
                    let newNode = cc.instantiate(bullet)
                    newNode.setPosition(turret.getPosition().x, turret.getPosition().y)
                    newNode.active = true
                    this.node.addChild(newNode)
                    newNode.getComponent(UITransform).priority = 200

                    var tween =  new Tween(newNode)
                    .to(0.1, { position: new Vec3(turret.target.getPosition().x, turret.target.getPosition().y, 0) })
                    .call(() => {
                        let monster = turret.target
                        let tag = monster.mTag
                        monster.reduceLife(monster)
                        if (monster.maxLife <= 0) {
                            monster.destroy()
                            this.monsterArray.splice(tag, 1)
                            turret.target = null //设置标记
                        }
                        newNode.destroy() 
                    })
                    .start();
                }
            }
        }
        this.schedule(this.schedul, 0.5);
    }
}