import React, {Component} from "react";
import {MessageList} from "components/MessageList";
import {UserList} from "components/UserList";
import {ChatList} from "components/ChatList";
import {MessageForm} from "components/MessageForm";

export class MessengerPage extends Component {

    // handleBotReply = (message) => {
    //     const {author} = message;
    //
    //     if (this.state.lastMessageFrom !== author) {
    //         this.setState({
    //             lastMessageFrom: author,
    //         })
    //         setTimeout(() => {
    //             this.handleMessageSend({
    //                 author: "Bot",
    //                 text: `Привет, ${author}, сообщение принято`,
    //                 time: "00:00:00"
    //             });
    //             this.setState({
    //                 lastMessageFrom: "",
    //             })
    //         }, 1000)
    //     }
    // }

    render() {
        const {chats, messages} = this.props;
        return (
            <div className="content">
                <div className="panel">
                    <MessageList ref="messages" messages={messages}/>
                    <div className="sidebar">
                        <UserList/>
                        <ChatList chats={chats}/>
                    </div>
                </div>
                {/*<MessageForm onSend={this.handleMessageSend}/>*/}
            </div>
        )
    }
}