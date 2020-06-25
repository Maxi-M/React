import React, {Component} from 'react';
import {MessageList} from "./components/MessageList";
import {UserList} from "./components/UserList";
import {MessageForm} from "./components/MessageForm";
import {ChatList} from "./components/ChatList";

export class App extends Component{
    state = {
        lastMessageFrom: ""
    }
    handleMessageSend = (message) => {
        this.refs.messages.addMessage(message);
        this.handleBotReply(message);
    }

    handleBotReply = (message) => {
        const {author} = message;

        if (this.state.lastMessageFrom !== author) {
            this.setState({
                lastMessageFrom: author,
            })
            setTimeout(() => {
                this.refs.messages.addMessage({
                    author: "Bot",
                    text: `Привет, ${author}, сообщение принято`,
                    time: "00:00:00"
                });
                this.setState({
                    lastMessageFrom: "",
                })
            }, 1000)
        }
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
                        <ChatList />
                    </div>
                </div>
                <MessageForm onSend={this.handleMessageSend} />
                <footer className="footer">&copy; Moskovskiy 2020</footer>
            </div>
        );
    }
}