import React, {Component} from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';

export class ChatList extends Component {
    state = {
        chats: this.props.chats,
    }

    render() {
        let chatComponents =[];

        for (let chatKey in this.props.chats) {
            chatComponents.push(
                <ListItem key={chatKey} button>
                    <Link to={`/chats/${chatKey}`}>
                        <ListItemText primary={this.props.chats[chatKey].name}/>
                    </Link>
                </ListItem>
            );
        }
        return (
            <div className='chat-list'>
                <div className="sidebar__header chat-list__header">
                    Вам доступны чаты:
                </div>
                <div className="sidebar__content chat-list__content">
                    <List className="chat-list__list" component="nav">
                        {[...chatComponents]}
                    </List>
                </div>
            </div>
        );
    }
}