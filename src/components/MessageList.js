import React, {Component} from 'react';

import {MessageListItem} from "./MessageListItem";

export class MessageList extends Component{
    state = {
        messages: [
            {
                author: "Пользователь1",
                time: "XX.XX.XX",
                text: "Какое-то сообщение 1"
            },
            {
                author: "Пользователь2",
                time: "XX.XX.XX",
                text: "Какое-то сообщение в ответ на первое"
            },
            {
                author: "Пользователь1",
                time: "XX.XX.XX",
                text: "Какое-то сообщение 2"
            },
        ],
    }
    interval = null;

    addMessage(message) {
        this.setState({
            messages: this.state.messages.concat(message),
        })
    }

    // componentDidMount() {
    //     this.interval = setInterval(() => {}, 5000);
    // }

    render() {
        const {messages} = this.state;
        return (
            <div className='message-list'>
                {messages.map((message, index) => {
                    return <MessageListItem key = {index} author={message.author} text={message.text} time={message.time}/>
                })}
            </div>
        );
    }
}