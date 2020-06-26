import React, {Component} from "react";
import {MessageList} from "components/MessageList";
import {UserList} from "components/UserList";
import {ChatList} from "components/ChatList";
import {MessageForm} from "components/MessageForm";

export class MessengerPage extends Component {
    state = {
        lastMessageFrom: "",
        chats: {
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
        },
    }
    get currentChat() {
        const {match} = this.props;
        const id = match.params.id;

        return id && this.state.chats[id] ? id : '1';
    }

    handleMessageSend = (message) => {
        const {chats} = this.state;
        const chat = this.state.chats[this.currentChat];

        chat.messages = chat.messages.concat([message]);

        this.setState({
            chats: {
                ...chats,
                [this.currentChat]: chat
            }
        });
        if (message.author !== 'Bot') {
            this.handleBotReply(message);
        }
    }

    handleBotReply = (message) => {
        const {author} = message;

        if (this.state.lastMessageFrom !== author) {
            this.setState({
                lastMessageFrom: author,
            })
            setTimeout(() => {
                this.handleMessageSend({
                    author: "Bot",
                    text: `Привет, ${author}, сообщение принято`,
                    time: "00:00:00"
                });
                this.setState({
                    lastMessageFrom: "",
                })
            }, 1000)
        }
    }
    get messages() {
        const {chats} = this.state;
        const currentChat = this.currentChat;

        let messages = [];

        if (currentChat && chats[currentChat]) {
            messages = chats[currentChat].messages;
        }
        return messages;
    }

    render() {
        return (
            <div className="content">
                <div className="panel">
                    <MessageList ref="messages" messages={this.messages}/>
                    <div className="sidebar">
                        <UserList/>
                        <ChatList chats={this.state.chats}/>
                    </div>
                </div>
                <MessageForm onSend={this.handleMessageSend}/>
            </div>
        )
    }
}