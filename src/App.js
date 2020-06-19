import React, {Component} from 'react';
import {MessageList} from "./components/MessageList";
import {UserList} from "./components/UserList";
import {MessageForm} from "./components/MessageForm";

export class App extends Component{
    state = {

    }
    handleMessageSend = (message) => {

    }

    render() {
        return (
            <div className='container'>
                <div className="panel">
                    <MessageList />
                    <UserList />
                </div>
                <MessageForm onSend={this.handleMessageSend} />
            </div>
        );
    }
}