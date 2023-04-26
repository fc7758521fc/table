import { _decorator, Component, Node, screen, sys, native, ResolutionPolicy, view, UITransform, Prefab, instantiate, sp, View } from 'cc';
// import { NATIVE } from 'cc/env';
// import { VERSION_CODE } from './version';
// import { NetManager } from "./core/netManager";
// import LOGIN from "./protocol/dr2_login";
// import { CMD_NAME } from './core/protocolConfig';
// import { EventManager } from './core/eventManager';
// import { ResManager } from './core/resManager';
// import { UIManager } from './core/uiManager';
// import { ScheduleManager } from './core/scheduleManager';

const { ccclass, property } = _decorator;

@ccclass('main')
export class main extends Component {
    @property({type:Node, displayName:'GRoot(根节点)', tooltip:'所有场景UI根节点'})
    g_root:Node|null = null;

    onLoad(){
        this.resize();
    }

    start() {
        // this.initManager()
        
        // this.test01();
        // this.testSpine();
        // this.testNetManager();
    }

    initManager() {
        EventManager.Instance.init()
        ResManager.Instance.init()
        UIManager.Instance.init()
        ScheduleManager.Instance.init()

        dh.eventManager = EventManager.Instance;
        dh.resManager = ResManager.Instance;
        dh.uiManager = UIManager.Instance;
        dh.scheduleManager = ScheduleManager.Instance;
    }

    /**
     * 热更新部分仅逻辑测试，最终应该在 main.js实现相关逻辑
     */
    test01(){
        dh.userData.setString(dh.userData.KEYS.VERSION, "0.1.12");
        let ver = this.getUserVersion();
        let is_user_big = this.cmpVersion(ver, VERSION_CODE);
        if(is_user_big){
            this.setPaths(ver);
        }
        //this.cmpVersion("0.1.12", "0.1.13");
        var cfg1, cfg2;
        let asyncFn = async () => await new Promise((resolve, reject) => {
            import("./config/tconf").then(({tcfg})=>{
                cfg1 = tcfg;
                resolve(tcfg);
            })
        })
        let asyncFn2 = async () => await new Promise((resolve, reject) => {
            import("./config/tconf").then(({tcfg})=>{
                cfg2 = tcfg;
                resolve(tcfg);
            })
        })
        Promise.all([asyncFn(), asyncFn2()]).then(()=>{
            console.log(cfg1.reward[0].num);
            console.log(cfg2.name);
        })
        console.log("----------------test01:");
    }

    async testSpine() {
        // dh.resManager.loadRes("resources", "logo/logo_new", Prefab, (err, data:Prefab)=>{
        //     if(err){
        //         dh.logger.trace("err  load:" + err);
        //         return
        //     }
        //     var node =  instantiate(data);
        //     this.g_root.addChild(node)
        //     var spp:sp.Skeleton = node.getComponent(sp.Skeleton);
        //     spp.premultipliedAlpha = false;
        //     spp.setAnimation(0, "en", false);
        // });

        let data = await dh.resManager.loadRes("resources", "logo/logo_new", Prefab) as Prefab;
        var node =  instantiate(data);
        this.g_root.addChild(node)
        var spp:sp.Skeleton = node.getComponent(sp.Skeleton);
        spp.premultipliedAlpha = false;
        spp.setAnimation(0, "en", false);
    }

    testNetManager() {
        console.log("123123123123123123123213123123")
        NetManager.getInstance().connect(() => {
            NetManager.getInstance().send<LOGIN.Ipbreq_salt, LOGIN.Ipbrsp_salt>({
                sid: 0,
                name: CMD_NAME.SALT,
                data: {
                    account: "x003@163.com",
                },
                callback: (data) => {
                    // this.login(data["uid"], data["salt"])
                }
            })

            NetManager.getInstance().startHeart(0)
        });

        // NetManager.getInstance().close()
    }

    /**
     * 获取用户数据版本号
     */
    getUserVersion():string {
        //require("./version")
        let version = sys.localStorage.getItem("aaVersion");
        console.log(version);
        return version;
    }

    deleteUserVersion(ver:string){
        if(!NATIVE){
            return;
        }
        let data_path = native.fileUtils.getWritablePath();
        console.log("data path:",data_path);
        let up_dir = data_path + "/" + ver;
        if(native.fileUtils.isDirectoryExist(up_dir)){
            native.fileUtils.removeDirectory(up_dir);
        }
    }

    /**
     *
     * @param user_version 用户数据版本
     * @param code_version 包体版本
     * 如果包体版本大于用户数据版本，删除用户数据版本
     * @returns
     */
    cmpVersion(user_version:string, code_version:string):boolean {
        if(null == user_version || "" == user_version){
            return false;
        }
        var u_vers = user_version.split(".");
        var c_vers = code_version.split(".");
        u_vers.forEach((str, idx, arr)=>{
            console.log("idx:", idx, str, c_vers[idx]);
            if(Number(str) < Number(c_vers[idx])){
                this.deleteUserVersion(user_version);
                return false;
            }
        });
        return true;
    }

    /**
     * 设置热更新目录
     */
    setPaths(ver:string){
        if(!NATIVE){
            return;
        }
        let data_path = native.fileUtils.getWritablePath();
        console.log("data path:",data_path);
        let up_dir = data_path + "/" + ver;
        if(native.fileUtils.isDirectoryExist(up_dir)){
            native.fileUtils.addSearchPath(up_dir, true);
        }
    }

    /** 游戏画布尺寸变化 */
    resize() {
        let dr = dh.gConst.design_resolution;

        var s = screen.windowSize;
        var rw = s.width;
        var rh = s.height;
        var finalW = rw;
        var finalH = rh;

        if ((rw / rh) > (dr.width / dr.height)) {
            // 如果更长，则用定高
            finalH = dr.height;
            finalW = finalH * rw / rh;
        }
        else {
            // 如果更短，则用定宽
            finalW = dr.width;
            finalH = finalW * rh / rw;
        }

        // 手工修改canvas和设计分辨率，这样反复调用也能生效。
        view.setDesignResolutionSize(finalW, finalH, ResolutionPolicy.UNKNOWN);
        // let transform = this.g_root.getComponent(UITransform);
        // transform!.width = finalW;
        // transform!.height = finalH;

        dh.logger.trace(dr, "设计尺寸");
        dh.logger.trace(s, "屏幕尺寸");
    }
}

