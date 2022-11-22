import { _decorator, Component, Node, Prefab, Tween, Vec3, director, Label, TypeScript, Script} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UIManager')
export class UIManager extends Component{
    static onLoad(){
        this.ui_stack = []
    }

    static showDefaultConfigUI(params) {
        this.onLoad()
        this.showUI(params)
    }

    static showUI(params){
        let current_node = new Node();
        current_node.parent = params.parent

        let bg = cc.instantiate(params.bg);
        bg.parent = current_node

        console.log("this.ui_stack", this.ui_stack)
        this.ui_stack.push(current_node)
    }

    static close() {
        for (let key in this.ui_stack) {
            let node = this.ui_stack[key]
            node.destroy()
            this.ui_stack.splice(0, 1)
            return 
        }
    }
}

