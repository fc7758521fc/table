// import LOGIN from "../protocol/dr2_login.js";
// import LOGIC from "../protocol/dr2_logic.js";
import COMM from "./protocol/dr2_comm.js";

export const enum CMD_NAME{
    // ECHO = "NET_CMD_ECHO",
    // REG = "NET_CMD_REG",
    // SALT = "NET_CMD_SALT",
    // LOGIN = "NET_CMD_LOGIN",
    // AUTH = "NET_CMD_AUTH",
    // SYNC = "NET_CMD_SYNC",

    TEST = "NET_CMD_TEST"
}

// 客户端主动发起的请求
export const CMD_CONFIG = { 
    [CMD_NAME.TEST] : {
        group: 1,
        type: 1,
        req: COMM.pb_player,
        rsp: COMM.pb_player,
    },

    // [CMD_NAME.REG]: {
    //     group: 2,
    //     type: 1,
    //     req: LOGIN.pbreq_reg,
    //     rsp: LOGIN.pbrsp_reg,
    // },

    // [CMD_NAME.SALT]: {
    //     group: 2,
    //     type: 2,
    //     req: LOGIN.pbreq_salt,
    //     rsp: LOGIN.pbrsp_salt,
    // },

    // [CMD_NAME.LOGIN]: {
    //     group: 2,
    //     type: 3,
    //     req: LOGIN.pbreq_login,
    //     rsp: LOGIN.pbrsp_login,
    // },

    // [CMD_NAME.AUTH]: {
    //     group: 3,
    //     type: 1,
    //     req: LOGIC.pbreq_auth,
    //     rsp: LOGIC.pbrsp_auth,
    // },

    // [CMD_NAME.SYNC]: {
    //     group: 3,
    //     type: 2,
    //     req: LOGIC.pbreq_sync,
    //     rsp: LOGIC.pbrsp_sync,
    // },
}

export const enum EVENT_NAME{
    MAIL = "NET_EVENT_MAIL",
    CHAT = "NET_EVENT_CHAT",
}

// 服务器推送事件
export const EVENT_CONFIG = {
    // [EVENT_NAME.MAIL]: {
    //     group: 5,
    //     type: 0,
    //     rsp: COMM.pb_mail,
    // },

    // [EVENT_NAME.CHAT]: {
    //     group: 7,
    //     type: 0,
    //     rsp: COMM.pb_chat,
    // },
}