import React, {Component} from 'react';
import {MessageList} from "./components/MessageList";
import {UserList} from "./components/UserList";
import {MessageForm} from "./components/MessageForm";

export class App extends Component{
    state = {

    }
    handleMessageSend = (message) => {
        this.refs.messages.addMessage(message);
    }

    render() {
        return (
            <div className='container'>
                <div className="header">
                    Что-то в заголовке
                </div>
                <div className="panel">
                    <MessageList ref="messages"/>
                    <div className="sidebar">
                        <UserList />
                    </div>
                </div>
                <MessageForm onSend={this.handleMessageSend} />
                <footer className="footer">&copy; Moskovskiy 2020</footer>
            </div>
        );
    }
}