import React, {Component} from "react";
import {MessageList} from "components/MessageList";
import {UserList} from "components/UserList";
import {ChatList} from "components/ChatList";
import {MessageForm} from "components/MessageForm";

export class MessengerPage extends Component {
    render() {
        const {chats, messages, sendMessage} = this.props;
        return (
            <div className="content">
                <div className="panel">
                    {messages ? <MessageList ref="messages" messages={messages}/> : 'Чат не выбран'}
                    <div className="sidebar">
                        <UserList/>
                        <ChatList chats={chats} addChat={this.props.addChat} deleteChat={this.props.deleteChat}/>
                    </div>
                </div>
                {messages && <MessageForm onSend={sendMessage}/>}
            </div>
        )
    }
}