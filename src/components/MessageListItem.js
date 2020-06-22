import React, {Component} from 'react';

export class MessageListItem extends Component{
    state = {
        message: {
            author: this.props.author,
            text: this.props.text,
            time: this.props.time,
        }
    }
    render() {
        return (
            <div key={this.state.message.key} className='message-item'>
                <span className="message-item__time">{this.state.message.time}</span>
                <span className="message-item__author">{this.state.message.author}:</span>
                <span className="message-item__text">{this.state.message.text}</span>
            </div>
        );
    }
}