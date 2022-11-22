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
    }

    static close() {
        for (let key in this.ui_stack) {
            let node = this.ui_stack[key]
            node.destroy()
            this.ui_stack.splice(0, 1)
            return 
        }
    }

    static addToast(node) {
        node.parent = this.pop_node
    }


}

