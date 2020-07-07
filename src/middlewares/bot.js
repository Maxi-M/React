import {CHATS_SEND, chatsSend} from "actions/chats";

export function botMiddleware(store) {
    return function dispatchWrap(next) {
        return function dispatchAnswer(action) {
            if (action.type === CHATS_SEND) {
                const {author, chatId} = action.payload;
                if (author !== 'Bot' && store.getState().chats.lastMessageFrom !== author) {
                    setTimeout(() => {
                        store.dispatch(chatsSend({
                            chatId,
                            author: "Bot",
                            text: `Привет, ${author}, сообщение принято`,
                            time: "00:00:00"
                        }))
                    }, 1000)
                }
            }
            return next(action);
        }

    }
}