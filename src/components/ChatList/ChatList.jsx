import React, {Component} from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export class ChatList extends Component {
    state = {
        users: [],
    }

    render() {
        return (
            <div className='chat-list'>
                <div className="sidebar__header chat-list__header">
                    Вам доступны чаты:
                </div>
                <div className="sidebar__content chat-list__content">
                    <List className="chat-list__list" component="nav">
                        <ListItem button>
                            <ListItemText primary="Чат 1"/>
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Чат 2"/>
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Чат 3"/>
                        </ListItem>
                    </List>
                </div>
            </div>
        );
    }
}