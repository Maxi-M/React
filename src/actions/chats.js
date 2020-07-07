export const CHATS_LOAD = 'CHATS_LOAD';
export const CHATS_SEND = 'CHATS_SEND';
export const CHATS_ADD = 'CHATS_ADD';
export const CHATS_DELETE = 'CHATS_DELETE';

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

export const chatsAdd = (chatId, name) => {
    return {
        type: CHATS_ADD,
        payload: {chatId, name},
    }
};

export const chatsDelete = (chatId) => {
    return {
        type: CHATS_DELETE,
        payload: {chatId},
    }
};