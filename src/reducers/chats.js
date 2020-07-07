import {CHATS_LOAD, CHATS_SEND, CHATS_ADD, CHATS_DELETE} from "actions/chats";

import update from 'react-addons-update';

const initialState = {
    entries: {},
    lastMessageFrom: '',
}

const dataBackend = {
    '1': {
        name: 'Chat 1',
        messages: [
            {
                author: "Пользователь1",
                time: "00:00:00",
                text: "Какое-то сообщение 1"
            },
            {
                author: "Пользователь2",
                time: "00:00:00",
                text: "Какое-то сообщение в ответ на первое"
            },
            {
                author: "Пользователь1",
                time: "00:00:00",
                text: "Какое-то сообщение 2"
            },
        ]
    },
    '2': {
        name: 'Chat 2',
        messages: [
            {
                author: "ПользовательXX",
                time: "00:00:00",
                text: "В чате 2"
            },
            {
                author: "Пользователь2",
                time: "00:00:00",
                text: "Какое-то сообщение в ответ на первое"
            },
            {
                author: "Пользователь1",
                time: "00:00:00",
                text: "Какое-то сообщение 2"
            },
        ]
    },
    '3': {
        name: 'Chat 3',
        messages: [
            {
                author: "Пользователь1",
                time: "00:00:00",
                text: "Какое-то сообщение в чате 3"
            },
            {
                author: "Пользователь2",
                time: "00:00:00",
                text: "Какое-то сообщение в ответ на первое"
            },
            {
                author: "Пользователь1",
                time: "00:00:00",
                text: "Какое-то сообщение 2"
            },
        ]
    }
}


export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHATS_LOAD:
            return {
                ...state,
                entries: dataBackend,
            };
        case CHATS_SEND:
            return update(state, {
                entries: {
                    [action.payload.chatId]: {
                        messages: {
                            $push: [{
                                text: action.payload.text,
                                author: action.payload.author,
                                time: action.payload.time
                            }]
                        }
                    },
                },
                lastMessageFrom: {
                    $set: action.payload.author
                }
            });
        case CHATS_ADD: {
            const {chatId, name} = action.payload;
            return update(state, {
                entries: {
                    $merge: {
                        [chatId]: {
                            name,
                            messages: [],
                        }
                    }
                }
            })
        }
        case CHATS_DELETE: {
            const {chatId} = action.payload;
            return update(state, {
                entries: {
                    $unshift: [chatId]
                }
            })
        }
        default:
            return state;
    }
}