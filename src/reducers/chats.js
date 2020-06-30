const initialState = {
    entries: {}
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

import {CHATS_LOAD, CHATS_SEND} from "actions/chats";

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHATS_LOAD:
            return {
                ...state,
                entries: dataBackend,
            };
        case CHATS_SEND:
            return {

            };
        default:
            return state;
    }
}