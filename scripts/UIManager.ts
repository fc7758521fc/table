import { _decorator, Component, Node, Prefab, Tween, Vec3, director, Label, TypeScript, Script} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UIManager')
export class UIManager extends Component{
    static onLoad(){
        this.ui_stack = []
        this.main_node = new Node();
        this.pop_node = new Node();
    }

    static setNodeParent(scene) {
        this.onLoad()
        this.main_node.parent = scene
        this.pop_node.parent = scene
    }

    static showDefaultConfigUI(params) {
        this.showUI(params)
    }

    static showUI(params){
        let root = cc.instantiate(params.rootNode);
        root.parent = this.main_node
        this.ui_stack.push(root)

        console.log("当前界面数量",this.ui_stack.length)
        console.log("当前界面数据", this.ui_stack)
    }

    static close() {
        //每次删除最上面的界面
        let topIndex = this.ui_stack.length - 1
        if (this.ui_stack[topIndex]) {
            let node = this.ui_stack[topIndex]
            node.destroy()
            this.ui_stack.splice(topIndex, 1)
        }

        console.log("当前界面数量",this.ui_stack.length)
        console.log("当前界面数据", this.ui_stack)
    }

    static addToast(node) {
        node.parent = this.pop_node
    }


}

