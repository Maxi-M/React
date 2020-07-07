import React, {Component} from 'react';

import {List, ListItem, ListItemText, TextField, Button} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';

import {Link} from 'react-router-dom';
import Fab from "@material-ui/core/Fab";

export class ChatList extends Component {
    state = {
        newChatName: '',
    }

    handleChatInputChange = (event) => {
        this.setState({
            newChatName: event.target.value
        });
    }

    handleAddChat = () => {
        const {addChat} = this.props;
        addChat(this.state.newChatName);
        this.setState({
            newChatName: '',
        })
    }

    handleDeleteChat = (event) => {
        const {deleteChat} = this.props;
        console.log(event.target);
    }

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
                            return <Link key={index} to={chat.link}>
                                <ListItem key={index} button>
                                    <ListItemText primary={chat.name}/>
                                    <Button onClick={this.handleDeleteChat}
                                            variant="contained"
                                            color="secondary"
                                            size='small'
                                            startIcon={<DeleteIcon/>}

                                    >
                                        Delete
                                    </Button>
                                </ListItem>
                            </Link>
                        })}
                        <ListItem key={'addChat'}>
                            <TextField id="outlined-basic" label="New chat name" onChange={this.handleChatInputChange}
                                       value={this.state.newChatName}/>
                            <Fab variant="round" color="primary" className="message-form__button"
                                 onClick={this.handleAddChat} size="small"><AddCircleIcon/>
                            </Fab>
                        </ListItem>
                    </List>
                </div>
            </div>
        );
    }
}