export const CHATS_LOAD = 'CHATS_LOAD';
export const CHATS_SEND = 'CHATS_SEND';

export const chatsLoad = () => {
    return {
        type: CHATS_LOAD
    }
};

export const chatsSend = (message) => {
    return {
        type: CHATS_SEND,
        payload: message,
    }
};