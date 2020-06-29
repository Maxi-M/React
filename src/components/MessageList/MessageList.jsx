import React, {Component} from 'react';

import {MessageListItem} from "./MessageListItem";

export class MessageList extends Component {
    list = null;

    state = {

    }

    componentDidMount() {
        this.list = document.querySelector('.message-list');
    }

    componentDidUpdate() {
        this.list.scrollTop = this.list.scrollHeight;
    }

    render() {
        return (
            <div className='message-list'>
                {this.props.messages.map((message, index) => {
                    return <MessageListItem key={index} author={message.author} text={message.text}
                                            time={message.time}/>
                })}
            </div>
        );
    }
}