import React, {Component} from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";

export class UserList extends Component {
    state = {
        users: [],
    }

    render() {
        return (
            <div className='user-list'>
                <div className="sidebar__header user-list__header">
                    Сейчас в чате
                </div>
                <div className="sidebar__content chat-list__content">
                    <List className="user-list__list" component="nav">
                        <ListItem button>
                            <ListItemText primary="Вася"/>
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Маша"/>
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Петя"/>
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Петя"/>
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Петя"/>
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Петя"/>
                        </ListItem>
                    </List>
                </div>
            </div>
        );
    }
}