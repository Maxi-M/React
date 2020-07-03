import React, {Component} from 'react';

import classNames from 'classnames';

export class MessageListItem extends Component{
    render() {
        const {author, time, text} = this.props;
        const classes = classNames('message-item__text', {
            'message-item__text_bot': author === 'Bot'
        })

        return (
            <div className="message-item">
                <span className="message-item__time">{time}</span>
                <span className="message-item__author">{author}:</span>
                <span className={classes}>{text}</span>
            </div>
        );
    }
}