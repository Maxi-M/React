import React, {Component} from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';

export class ChatList extends Component {

    render() {
        const {chats} = this.props;
        return (
            <div className='chat-list'>
                <div className="sidebar__header chat-list__header">
                    Вам доступны чаты:
                </div>
                <div className="sidebar__content chat-list__content">
                    <List className="chat-list__list" component="nav">
                        {chats.map((chat, index) => {
                            <Link to={chat.link}>
                                <ListItem key={index} button>
                                    <ListItemText primary={chat.name}/>
                                </ListItem>
                            </Link>
                        })};
                    </List>
                </div>
            </div>
        );
    }
}