import React, {Component} from 'react';

import classNames from 'classnames';

export class MessageListItem extends Component{
    state = {
        message: {
            author: this.props.author,
            text: this.props.text,
            time: this.props.time,
        }
    }
    render() {
        const classes = classNames('message-item__text', {
            'message-item__text_bot': this.state.message.author === 'Bot'
        })

        return (
            <div key={this.state.message.key} className="message-item">
                <span className="message-item__time">{this.state.message.time}</span>
                <span className="message-item__author">{this.state.message.author}:</span>
                <span className={classes}>{this.state.message.text}</span>
            </div>
        );
    }
}