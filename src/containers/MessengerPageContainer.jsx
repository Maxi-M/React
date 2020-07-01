import React, {Component} from "react";
import {connect} from 'react-redux';

import {MessengerPage} from "pages/MessengerPage";
import {chatsLoad, chatsSend} from "actions/chats";

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
        // if (message.author !== 'Bot') {
        //     this.handleBotReply(message);
        // }
    }

    render() {
        const {chatId, chats, messages} = this.props;
        return (
            <MessengerPage messages={messages} chats={chats} sendMessage={this.handleMessageSend}/>
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

    return {
        chats: chatsArray,
        messages,
        chatId: match.params.id ? match.params.id : null
    }
}

function mapDispatchToProps(dispatch) {
    return {
        chatsLoadAction: () => dispatch(chatsLoad()),
        chatsSendAction: (message) => dispatch(chatsSend(message))
    }
}

export const MessengerPageRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerPageContainer);