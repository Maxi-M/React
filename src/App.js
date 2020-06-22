import React, {Component} from 'react';
import {MessageList} from "./components/MessageList";
import {UserList} from "./components/UserList";
import {MessageForm} from "./components/MessageForm";

export class App extends Component{
    state = {

    }
    handleMessageSend = (message) => {
        this.refs.messages.addMessage(message);

        setTimeout(() => {
            const {author} = this.refs.messages.state.messages[this.refs.messages.state.messages.length - 1];
            this.refs.messages.addMessage({
                author: "Bot",
                text: `Привет ${author}, сообщение принято`,
                time: "00:00:00"
            });
        }, 1000)
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