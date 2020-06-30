import React, {Component} from 'react';

import {MessageListItem} from "./MessageListItem";

export class MessageList extends Component {
    list = null;

    componentDidMount() {
        this.list = document.querySelector('.message-list');
    }

    componentDidUpdate() {
        this.list.scrollTop = this.list.scrollHeight;
    }

    render() {
        const {messages} = this.props;
        return (
            <div className='message-list'>
                {messages.map((message, index) => {
                    return <MessageListItem key={index} author={message.author} text={message.text}
                                            time={message.time}/>
                })}
            </div>
        );
    }
}