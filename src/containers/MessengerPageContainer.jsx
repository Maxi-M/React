import React, {Component} from "react";
import {connect} from 'react-redux';

import {MessengerPage} from "pages/MessengerPage";
import {chatsLoad, chatsSend, chatsAdd, chatsDelete} from "actions/chats";

class MessengerPageContainer extends Component {
    componentDidMount() {
        const {chatsLoadAction} = this.props;
        chatsLoadAction();
    }

    handleMessageSend = (message) => {
        const {chatId, chatsSendAction} = this.props
        chatsSendAction({
            ...message,
            chatId
        });
    }

    handleChatsAdd = (chatName) => {
        const {newChatId, chatsAddAction} = this.props;
        if (!chatName.trim()) {
            return;
        }
        chatsAddAction(newChatId, chatName)
    }

    handleChatsDelete = (chatId) => {
        const {chatsDeleteAction} = this.props;
        chatsDeleteAction(chatId);
    }

    render() {
        const {chatId, chats, messages} = this.props;
        return (
            <MessengerPage messages={messages} chats={chats} sendMessage={this.handleMessageSend}
                           addChat={this.handleChatsAdd} deleteChat={this.props.handleChatsDelete}/>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const chats = state.chats.entries;

    const {match} = ownProps;
    let messages = null;
    if (match && chats[match.params.id]) {
        messages = chats[match.params.id].messages;
    }

    let chatsArray = [];
    for (let key in chats) {
        if (chats.hasOwnProperty(key)) {
            chatsArray.push({
                name: chats[key].name,
                link: `/chats/${key}`,
            })
        }
    }

    const newId = Object.keys(chats).length ? Object.keys(chats).length + 1 : 1;

    return {
        chats: chatsArray,
        messages,
        chatId: match.params.id ? match.params.id : null,
        newChatId: newId
    }
}

function mapDispatchToProps(dispatch) {
    return {
        chatsLoadAction: () => dispatch(chatsLoad()),
        chatsSendAction: (message) => dispatch(chatsSend(message)),
        chatsAddAction: (newChatId, chatName) => dispatch(chatsAdd(newChatId, chatName)),
        chatsDeleteAction: (chatId) => dispatch(chatsDelete(chatId))
    }
}

export const MessengerPageRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerPageContainer);