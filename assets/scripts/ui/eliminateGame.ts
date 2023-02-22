import { _decorator, Component, Node, Tween,Prefab, Label, input, Size,Input,Vec3,UITransform, Button, director,Sprite,EventTarget,SpriteFrame,SpriteAtlas, math, randomRangeInt} from 'cc';
import { UIManager } from '../UIManager';
import { GlobalEnum } from '../global/GlobalEnum'
const { ccclass, property } = _decorator;
import { gFunc } from '../global/gFunc'
import { EventMessage } from '../eventManager'
import { russiaGameCubeTools } from './russiaGameCubeTools'
import { gameOver } from './gameOver'

cc.myEvent = new EventTarget();

@ccclass('eliminateGame')
export class eliminateGame extends Component{
    cellSize = 80
    line = 8 //行
    row = 8 //列
    randArray = []
    eliminateArray = []

    onLoad(){
        let backBtn = cc.find("nodeLayer/back", this.node)
        backBtn.on(Button.EventType.CLICK, this.back, this);

        let nodeLayer = cc.find("nodeLayer", this.node)
        nodeLayer.on(Input.EventType.TOUCH_START, this.touchStart, this);
        nodeLayer.on(Input.EventType.TOUCH_END, this.touchEnd, this);

        this.initEliminatePool()
        this.initBoard()
    }
    

    back(){
        UIManager.close()
        cc.loader.releaseRes("public/public_item_box_2_1");
    }

    initEliminatePool() {
        for (let i = 0; i < this.line; i++) {
            for (let j = 0; j< this.row; j++) {
                var rand = math.randomRangeInt(7,13)
                this.randArray.push(rand)
            }
        }

        // this.randArray = [2, 3, 1, 4, 1, 2, 3, 2, 1, 2, 1, 3, 1, 2, 2, 2, 1, 1, 2, 4, 1, 1, 2, 3, 4, 2, 2, 4, 4, 4, 4, 2, 3, 1, 1, 2, 3, 3, 1, 3, 3, 2, 2, 1, 4, 1, 4, 2, 4, 2, 4, 4, 4, 3, 4, 1, 1, 2, 2, 2, 4, 1, 2, 3]
        console.log("this.eliminateArray", this.randArray)
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
                const frame = atlas.getSpriteFrame('public/public_item_box_2_1');

                let newNode = new Node();
                let sprite = newNode.addComponent(Sprite);
                newNode.getComponent(Sprite).spriteFrame = frame
                newNode.getComponent(UITransform).setContentSize(new Size(this.cellSize, this.cellSize))
                newNode.setPosition(startPosx + i * this.cellSize + this.cellSize/2,startPosy + j * this.cellSize + this.cellSize/2)
                this.node.addChild(newNode)
            }
        }

        this.initCube()
    }

    async initCube() {
        let playBoard = cc.find("nodeLayer/playBoard", this.node)
        let playBoardPos = playBoard.getPosition()
        let playBoardSize = playBoard.getContentSize()
        let startPosx = playBoardPos.x - playBoardSize.width / 2
        let startPosy = playBoardPos.y - playBoardSize.height / 2

        var index = 0
        for (let i = 0; i < this.line; i++) {
            for (let j = 0; j< this.row; j++) {
                let atlas = await gFunc.loadPlistSync("test_res/public.plist", SpriteAtlas) as SpriteAtlas; 
                const frame = atlas.getSpriteFrame('public/public_mark_spirit_icon' + this.randArray[index]);
                
                let cube = cc.find("cube", this.node)
                let newNode = cc.instantiate(cube)
                newNode.active = true
                newNode.getComponent(Sprite).spriteFrame = frame
                newNode.getComponent(UITransform).setContentSize(new Size(this.cellSize, this.cellSize))
                newNode.setPosition(startPosx + i * this.cellSize + this.cellSize/2,startPosy + j * this.cellSize + this.cellSize/2 + 500)
                this.node.addChild(newNode)
                newNode.tag = this.randArray[index]
                newNode.line = i
                newNode.row = j
                newNode.index = index
                newNode.posX = startPosx + i * this.cellSize + this.cellSize/2
                newNode.posY = startPosy + j * this.cellSize + this.cellSize/2

                this.eliminateArray.push(newNode)

                var tween =  new Tween(newNode)
                .to(0.3, { position: new Vec3(startPosx + i * this.cellSize + this.cellSize/2,startPosy + j * this.cellSize + this.cellSize/2, 0) })
                .start();

                // let labelNode2 = new Node();
                // let label2 = labelNode2.addComponent(Label);
                // labelNode2.setPosition(new Vec3(startPosx + i * this.cellSize + this.cellSize/2,startPosy + j * this.cellSize + this.cellSize/2 - 10))
                // label2.string = i + "," + j
                // label2.fontSize = 26;
                // label2.color = new cc.color(255,255,0);
                // this.node.addChild(labelNode2);

                let labelNode3 = new Node();
                let label3 = labelNode3.addComponent(Label);
                labelNode3.setPosition(new Vec3(startPosx + i * this.cellSize + this.cellSize/2 + 25,startPosy + j * this.cellSize + this.cellSize/2 + 25))
                label3.string = index
                label3.fontSize = 22;
                label3.color = new cc.color(255,255,255);
                this.node.addChild(labelNode3);
                labelNode3.getComponent(UITransform).priority = 10000

                index = index + 1
            }
        }

        setTimeout(()=>{ 
          this.checkEliminClean()
        }, 2000);
    }

    async checkEliminClean() {
        let index_array_new = []
        let playBoard = cc.find("nodeLayer/playBoard", this.node)
        let playBoardPos = playBoard.getPosition()
        let playBoardSize = playBoard.getContentSize()
        let startPosx = playBoardPos.x - playBoardSize.width / 2
        let startPosy = playBoardPos.y - playBoardSize.height / 2
        let offset_y = 1
        let direction = "line"
        for(let i = 0; i < this.eliminateArray.length; i++) {
            let cube = this.eliminateArray[i]
            let tag = cube.tag
            let line = 0
            let row = 0
            let left_ramin = Math.floor(i / 8) //左边有几个
            let right_ramin = Math.floor((63 - i) / 8) //右边有几个
            let top_ramin = 7 - i
            let bottom_ramin = i

            //判断四个方向有没有相同tag
            let left = i - 8
            let right = i + 8
            let top = i + 1
            let bottom = i - 1

            let index_array = []

            for(let j = 0; j < right_ramin; j++) { //右边剩余判断
                if (this.eliminateArray[right]) {
                    if (this.eliminateArray[right].tag == tag) {
                        index_array.push(this.eliminateArray[right])
                        right = right + 8
                    }
                }
            }

            index_array.push(cube)
            if (index_array.length >= 3) {
                index_array_new = index_array
                offset_y = 1
                break
            }
        }
        
        if (index_array_new.length < 3) {
            direction = "row"
            for(let i = 0; i < this.eliminateArray.length; i++) {
                let cube = this.eliminateArray[i]
                let tag = cube.tag
                let line = 0
                let row = 0
                let left_ramin = Math.floor(i / 8) //左边有几个
                let right_ramin = Math.floor((63 - i) / 8) //右边有几个
                let top_ramin = 8 * (left_ramin + 1) - 1 - i
    
                //判断四个方向有没有相同tag
                let left = i - 8
                let right = i + 8
                let top = i + 1
    
                let index_array = []
                index_array.push(cube)
                for(let j = 0; j < top_ramin; j++) { //上边剩余判断
                    if (this.eliminateArray[top]) {
                        if (this.eliminateArray[top].tag == tag && this.eliminateArray[top].posX == cube.posX) {
                            index_array.push(this.eliminateArray[top])
                            top = top + 1
                        }
                    }
                }

                if (index_array.length >= 3) {
                    index_array_new = index_array
                    offset_y = index_array.length
                    break
                }
            }
        }
        
        if (index_array_new.length <= 0) {
            return
        }

        console.log("index_array_newindex_array_newindex_array_new", index_array_new)
        //消除
        for(let i = 0; i < this.eliminateArray.length; i++) {
            let cube = this.eliminateArray[i]
            for (let j = 0; j < index_array_new.length; j++) {
                if (cube.index == index_array_new[j].index) {
                    this.eliminateArray[i] = null
                    cube.destroy()
                }
            }
        }

        // console.log("index_array_newindex_array_new", this.eliminateArray, index_array_new)

        //数据交换
        let maxPosX = index_array_new[index_array_new.length - 1].posX
        let maxPosY = index_array_new[index_array_new.length - 1].posY
        for (let i = 0; i < this.eliminateArray.length; i++) {
            let cube = this.eliminateArray[i]
                if (cube != null) {
                    if (direction == "line") { //横向消除
                        for (let j = 0; j < index_array_new.length; j++) {
                            if (cube.getPosition().x == index_array_new[j].posX && cube.getPosition().y > index_array_new[j].posY) { //已经放置的y坐标大于移动cube的不考虑
                                var tween =  new Tween(cube)
                                .to(0.1, { position: new Vec3(cube.getPosition().x , cube.getPosition().y - this.cellSize * offset_y, -1) })
                                .start();
                               // cube.setPosition(cube.getPosition().x , cube.getPosition().y - (this.cellSize * offset_y))
                                let a = this.eliminateArray[cube.index]
                                this.eliminateArray[cube.index] = this.eliminateArray[cube.index - 1]
                                this.eliminateArray[cube.index - 1] = a
                            }
                        }
                    }else{ //竖向消除
                        if (cube.getPosition().x == maxPosX && cube.getPosition().y > maxPosY) { //已经放置的y坐标大于移动cube的不考虑
                            var tween =  new Tween(cube)
                            .to(0.1, { position: new Vec3(cube.getPosition().x , cube.getPosition().y - this.cellSize * offset_y, -1) })
                            .start();
                            //  cube.setPosition(cube.getPosition().x , cube.getPosition().y - (this.cellSize * offset_y))
                            let a = this.eliminateArray[cube.index]
                            this.eliminateArray[cube.index] = this.eliminateArray[cube.index - offset_y]
                            this.eliminateArray[cube.index - offset_y] = a
                        }
                    }
            }
        } 
        console.log("index_array_newindex_array_new", this.eliminateArray, index_array_new, offset_y)

        //数据整理
        for (let j = 0; j< this.eliminateArray.length; j++) {
            let cube = this.eliminateArray[j]
            if (cube) {
                let newi = Math.floor(j / 8)
                let newj = j % 8
                cube.line = newi
                cube.row = newj
                cube.index = j
                cube.posX = startPosx + newi * this.cellSize + this.cellSize/2
                cube.posY = startPosy + newj * this.cellSize + this.cellSize/2
            }
        }

        //生成新块落下
        let index = 0
        for (let j = 0; j< this.eliminateArray.length; j++) {
            if (this.eliminateArray[j] == null) {
                let newi = Math.floor(j / 8)
                let newj = j % 8
                let atlas = await gFunc.loadPlistSync("test_res/public.plist", SpriteAtlas) as SpriteAtlas; 
                let rand = math.randomRangeInt(1,5)
                const frame = atlas.getSpriteFrame('public/public_mark_spirit_icon' + rand);
                
                let cube = cc.find("cube", this.node)
                let newNode = cc.instantiate(cube)
                newNode.active = true
                newNode.getComponent(Sprite).spriteFrame = frame
                newNode.getComponent(UITransform).setContentSize(new Size(this.cellSize, this.cellSize))
                newNode.setPosition(startPosx + newi * this.cellSize + this.cellSize/2,startPosy + newj * this.cellSize + this.cellSize/2 + 300)
                this.node.addChild(newNode)
                newNode.tag = rand
                newNode.line = newi
                newNode.row = newj
                newNode.index = j
                newNode.posX = startPosx + newi * this.cellSize + this.cellSize/2
                newNode.posY = startPosy + newj * this.cellSize + this.cellSize/2

                index = index + 1
                this.eliminateArray[j] = newNode

                // newNode.setPosition(startPosx + newi * this.cellSize + this.cellSize/2,startPosy + newj * this.cellSize + this.cellSize/2)
                var tween =  new Tween(newNode)
                .to(0.1, { position: new Vec3(startPosx + newi * this.cellSize + this.cellSize/2,startPosy + newj * this.cellSize + this.cellSize/2, 0) })
                .start();
            }
        }
        // console.log("index_array_newindex_array_new", this.eliminateArray, index_array_new)

        //递归调用检查
        if (index_array_new.length > 0) {
            setTimeout(()=>{ 
                this.checkEliminClean()
            }, 2000);
        }
    }

    touchStart(event) {
        let sceenPos = event.getUILocation();
        // this.node.convertToNodeSpaceAR(sceenPos);

        // console.log("startpos", sceenPos.x - 320 , sceenPos.y - 480)
        let choose_x = Math.floor(sceenPos.x - 320)
        let choose_y = Math.floor(sceenPos.y - 480)
        let choose_cube
        for(let i = 0; i < this.eliminateArray.length; i++) {
            let cube = this.eliminateArray[i]
            let pos = cube.getPosition()
            let right_x = pos.x + this.cellSize/2
            let left_x = pos.x - this.cellSize/2
            let top_y = pos.y + this.cellSize/2
            let bottom_y = pos.y - this.cellSize/2
            console.log("startpos", choose_x, choose_y, left_x, right_x, top_y, bottom_y)

            if (choose_x >= left_x && choose_x <=right_x && choose_y >= bottom_y && choose_y <=top_y) {
                choose_cube = cube 
                break  
            }
        }

        console.log("choose_cube", choose_cube)

        if (choose_cube) {
            var tween =  new Tween(choose_cube)
            .to(0.05, { scale: new Vec3(0.9, 0.9, 0.9) })
            .to(0.05, { scale: new Vec3(1, 1, 1) })
            .start();

            this.startPosX = choose_cube.getPosition().x
            this.startPosY = choose_cube.getPosition().y
            this.chooseCube = choose_cube
        }
    }

    touchEnd(event) {
        if (this.chooseCube == null) {
            return
        }

        let sceenPos = event.getUILocation();
        let ended_x = Math.floor(sceenPos.x - 320)
        let ended_y = Math.floor(sceenPos.y - 480)
        let top_y = this.startPosY + this.cellSize/2
        let bottom_y = this.startPosY - this.cellSize/2
        let right_x = this.startPosX + this.cellSize/2
        let left_x = this.startPosX - this.cellSize/2

        if (ended_x < this.startPosX &&  ended_y >= bottom_y && ended_y <=top_y ) {
            if (Math.abs(ended_x - this.startPosX) < 20) { //轻微滑动不算移动
                return 
            }
            gFunc.showToast("左移")
            this.changeMoveData(-1, 0)
        }

        if (ended_x > this.startPosX &&  ended_y >= bottom_y && ended_y <=top_y ) {
            if (Math.abs(ended_x - this.startPosX) < 20) { //轻微滑动不算移动
                return 
            }
            gFunc.showToast("右移")
            this.changeMoveData(1, 0)
        }

        if (ended_y < this.startPosY &&  ended_x >= left_x && ended_x <=right_x ) {
            if (Math.abs(ended_y - this.startPosY) < 20) { //轻微滑动不算移动
                return 
            }
            gFunc.showToast("下移")
            this.changeMoveData(0, -1)
        }

        if (ended_y > this.startPosY &&  ended_x >= left_x && ended_x <=right_x ) {
            if (Math.abs(ended_y - this.startPosY) < 20) { //轻微滑动不算移动
                return 
            }
            gFunc.showToast("上移")
            this.changeMoveData(0, 1)
        }
        
    }

    changeMoveData(line , row){
        let nowLine = this.chooseCube.line
        let nowRow = this.chooseCube.row

        let endLine = nowLine + line
        let endRow = nowRow + row
        let endCube 
        let index = 0
        for(let i = 0; i < this.eliminateArray.length; i++) {
            let cube = this.eliminateArray[i]
            if (cube.line == endLine && cube.row == endRow) {
                endCube = cube
                break
            }
            index = index + 1
        }

        if (endCube) {
            var tween =  new Tween(endCube)
            .to(0.05, { scale: new Vec3(0.9, 0.9, 0.9) })
            .to(0.05, { scale: new Vec3(1, 1, 1) })
            .start();
        }

        var tween =  new Tween(this.eliminateArray[this.chooseCube.index])
        .to(0.1, { position: new Vec3(this.eliminateArray[index].posX , this.eliminateArray[index].posY, 0) })
        .start();

        var tween =  new Tween(this.eliminateArray[index])
        .to(0.1, { position: new Vec3(this.eliminateArray[this.chooseCube.index].posX,this.eliminateArray[this.chooseCube.index].posY, 0) })
        .call(() => {
            console.log("替换前", this.eliminateArray, this.chooseCube.index, index)
            let a = this.eliminateArray[this.chooseCube.index]
            this.eliminateArray[this.chooseCube.index] = this.eliminateArray[index]
            this.eliminateArray[index] = a
            console.log("替换后", this.eliminateArray)
        })
        .start();

        //数据整理
        // for (let j = 0; j< this.eliminateArray.length; j++) {
        //     let cube = this.eliminateArray[j]
        //     if (cube) {
        //         let newi = Math.floor(j / 8)
        //         let newj = j % 8
        //         cube.line = newi
        //         cube.row = newj
        //         cube.index = j
        //         cube.posX = startPosx + newi * this.cellSize + this.cellSize/2
        //         cube.posY = startPosy + newj * this.cellSize + this.cellSize/2
        //     }
        // }

        //check 后期提出来
        // let index_array_new = []
        // let playBoard = cc.find("nodeLayer/playBoard", this.node)
        // let playBoardPos = playBoard.getPosition()
        // let playBoardSize = playBoard.getContentSize()
        // let startPosx = playBoardPos.x - playBoardSize.width / 2
        // let startPosy = playBoardPos.y - playBoardSize.height / 2
        // let offset_y = 1
        // let direction = "line"
        // for(let i = 0; i < this.eliminateArray.length; i++) {
        //     let cube = this.eliminateArray[i]
        //     let tag = cube.tag
        //     let line = 0
        //     let row = 0
        //     let left_ramin = Math.floor(i / 8) //左边有几个
        //     let right_ramin = Math.floor((63 - i) / 8) //右边有几个
        //     let top_ramin = 7 - i
        //     let bottom_ramin = i

        //     //判断四个方向有没有相同tag
        //     let left = i - 8
        //     let right = i + 8
        //     let top = i + 1
        //     let bottom = i - 1

        //     let index_array = []

        //     for(let j = 0; j < right_ramin; j++) { //右边剩余判断
        //         if (this.eliminateArray[right]) {
        //             if (this.eliminateArray[right].tag == tag) {
        //                 index_array.push(this.eliminateArray[right])
        //                 right = right + 8
        //             }
        //         }
        //     }

        //     index_array.push(cube)
        //     if (index_array.length >= 3) {
        //         index_array_new = index_array
        //         offset_y = 1
        //         break
        //     }
        // }
        
        // if (index_array_new.length < 3) {
        //     direction = "row"
        //     for(let i = 0; i < this.eliminateArray.length; i++) {
        //         let cube = this.eliminateArray[i]
        //         let tag = cube.tag
        //         let line = 0
        //         let row = 0
        //         let left_ramin = Math.floor(i / 8) //左边有几个
        //         let right_ramin = Math.floor((63 - i) / 8) //右边有几个
        //         let top_ramin = 8 * (left_ramin + 1) - 1 - i
    
        //         //判断四个方向有没有相同tag
        //         let left = i - 8
        //         let right = i + 8
        //         let top = i + 1
    
        //         let index_array = []
        //         index_array.push(cube)
        //         for(let j = 0; j < top_ramin; j++) { //上边剩余判断
        //             if (this.eliminateArray[top]) {
        //                 if (this.eliminateArray[top].tag == tag && this.eliminateArray[top].posX == cube.posX) {
        //                     index_array.push(this.eliminateArray[top])
        //                     top = top + 1
        //                 }
        //             }
        //         }

        //         if (index_array.length >= 3) {
        //             index_array_new = index_array
        //             offset_y = index_array.length
        //             break
        //         }
        //     }
        // }
        
        // if (index_array_new.length <= 0) {
            gFunc.showToast("移动后无法消除")
            // let a = this.eliminateArray[this.chooseCube.index]
            // this.eliminateArray[this.chooseCube.index] = this.eliminateArray[index]
            // this.eliminateArray[index] = a
            
            // var tween =  new Tween(this.eliminateArray[this.chooseCube.index])
            // .to(0.1, { position: new Vec3(this.eliminateArray[index].posX , this.eliminateArray[index].posY, 0) })
            // .start();

            // var tween =  new Tween(this.eliminateArray[index])
            // .to(0.1, { position: new Vec3(this.eliminateArray[this.chooseCube.index].posX,this.eliminateArray[this.chooseCube.index].posY, 0) })
            // .call(() => {
            //     console.log("替换前", this.eliminateArray, this.chooseCube.index, index)
            //     let a = this.eliminateArray[this.chooseCube.index]
            //     this.eliminateArray[this.chooseCube.index] = this.eliminateArray[index]
            //     this.eliminateArray[index] = a
            //     console.log("替换后", this.eliminateArray)
            // })
            // .start();

            // //数据整理
            // for (let j = 0; j< this.eliminateArray.length; j++) {
            //     let cube = this.eliminateArray[j]
            //     if (cube) {
            //         let newi = Math.floor(j / 8)
            //         let newj = j % 8
            //         cube.line = newi
            //         cube.row = newj
            //         cube.index = j
            //         cube.posX = startPosx + newi * this.cellSize + this.cellSize/2
            //         cube.posY = startPosy + newj * this.cellSize + this.cellSize/2
            //     }
            // }
        // }
    }
}

