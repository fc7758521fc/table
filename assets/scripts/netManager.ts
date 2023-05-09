import { CMD_CONFIG, CMD_NAME, EVENT_CONFIG } from "./protocolConfig";
import  COMM  from "./protocol/dr2_comm.d.ts";
import { EventManager } from "./eventManager";

export interface Request<T, M> {
    sid: number;
    name: string;
    data?: T;
    callback?: (data: M) => void
    config?: any;
}

export class NetManager {
    private HOST: string = '127.0.0.1';
    private PORT: number = 8000;
    private FIRST_LEN: number = 2;
    private HEADER_LEN: number = 4;
    private static instance: NetManager
    private littleEndian: boolean = 0x01020304 >> 24 == 4
    private ws?: WebSocket;
    private timeOutId?: number;
    private heartId?: number;
    private requests = [];

    static getInstance() {
        if (!NetManager.instance) {
            NetManager.instance = new NetManager();
        }
        return NetManager.instance
    }

    private constructor() {

    }

    connect(callback: () => void) {
        let ws = new WebSocket('ws://127.0.0.1:8181/test');
        ws.binaryType = "arraybuffer"
        ws.onopen = (event) => {
            console.log("Connection open")
            this.clearTimeOutTimer()
            callback()
        };
        ws.onmessage = (event: MessageEvent) => this.onData(event);
        ws.onerror = (event: Event) => this.onError(event);
        ws.onclose = (event: CloseEvent) => this.onClose(event);

        this.setTimeOutTimer()
        this.ws = ws;
    }

    setTimeOutTimer() {
        this.timeOutId = setTimeout(() => {
            this.onTimeOut()
        }, 8000);
    }

    clearTimeOutTimer() {
        if (this.timeOutId) {
            clearTimeout(this.timeOutId);
            this.timeOutId = null;
        }
    }

    startHeart(sid: number) {
        // this.heartId = setInterval(() => {
        //     this.send<LOGIN.Ipbreq_echo, LOGIN.Ipbrsp_echo>({
        //         sid: sid,
        //         name: CMD_NAME.ECHO,
        //         data: {
        //             echo: 12344321,
        //         },
        //     })
        // }, 60000)
    }

    stopHeart() {
        if (this.heartId) {
            clearInterval(this.heartId);
            this.heartId = null;
        }
    }

    send(data) {
        if (!this.connected()) {
            return
        }

        let config = CMD_CONFIG["NET_CMD_TEST"]
        if (!config) {
            throw new Error(`protocol name error: ${COMM.pb_player}`)
        }
        let content = config.req.encode({name : "fc"}).finish()
        let len = this.HEADER_LEN + content.length;

        let buffer = new ArrayBuffer(this.FIRST_LEN + len)
        let view = new DataView(buffer)
        view.setUint16(0, len, this.littleEndian)
        view.setUint8(2, config.group)
        view.setUint8(3, config.type)
        view.setUint16(4, 1, this.littleEndian)
        for (let i = 0; i < content.length; i++) {
            view.setUint8(6 + i, content[i])
        }

        // req.config = config
        // this.requests.push(req)
        console.log("发送数据", buffer)
        this.ws.send(buffer)
    }

    close() {
        if (this.connecting() || this.connected()) {
            this.ws.close();
        }
    }

    private onData(data: MessageEvent<ArrayBuffer>) {  
        // var data = JSON.parse(data.data)
        // console.log("收到数据", data)  

        // let view = new DataView(data.data)
        // let len = view.getUint16(0, this.littleEndian)
        // let group = view.getUint8(2)
        // let type = view.getUint8(3)

        // let buf = new Uint8Array(len - 2)
        // for (let i = 0; i < buf.length; i++) {
        //     buf[i] = view.getUint8(4 + i)
        // }

        // let is_event = false
        // for (let key in EVENT_CONFIG) {
        //     let config = EVENT_CONFIG[key]
        //     if (config.group == group && config.type == type) {
        //         let msg = config.rsp.decode(buf, len - 2)
        //         EventManager.Instance.dispatchEvent(key, msg)
        //         is_event = true
        //         break
        //     }
        // }

        // if (!is_event) {
        //     for(let index = 0; index < this.requests.length; index++){
        //         let request = this.requests[index]
        //         let config = request.config
        //         if (config.group == group && config.type == type) {
        //             let msg = config.rsp.decode(buf, len - 2)
        //             let callback = request.callback
        //             this.requests.splice(index, 1)
        //             console.log(`ws response data: ${JSON.stringify(msg)}`)
        //             if (callback) {
        //                 callback(msg)
        //             }
        //             break
        //         }
        //     }
        // }
    }

    onError(event: Event) {
        console.log(`Connection error: ${event.type}`);
        this.ws = null;
    }

    onClose(event: CloseEvent) {
        console.log('Connection closed');
        this.ws = null;
    }

    onTimeOut() {
        console.log('Connection timeout');
        this.close()
    }

    connecting() {
        return this.ws && this.ws.readyState === WebSocket.CONNECTING
    }

    connected() {
        return this.ws && this.ws.readyState === WebSocket.OPEN
    }

}


