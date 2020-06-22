import React, {Component} from 'react';

import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send"

export class MessageForm extends Component {
    state = {
        author: "Пользователь",
        text: ""
    }

    handleInputChange = (event) => {
        this.setState({
            text: event.target.value
        });
    }

    handleCtrlEnterDown = (event) => {
        if (event.ctrlKey && event.keyCode === 13) {
            this.handleMessageSend();
        }
    }

    handleMessageSend = () => {
        const handler = this.props.onSend;
        if (typeof handler === 'function') {
            if (this.state.text.trim()) {
                handler({
                    author: this.state.author,
                    time: "00:00:00",
                    text: this.state.text
                })
            }
            this.setState({text: ""})
        }
    }

    render() {
        const {value} = this.state;
        return (
            <div className='message-form'>
                <TextField name="text" value={this.state.text} label="Message..."
                           onChange={this.handleInputChange} onKeyDown={this.handleCtrlEnterDown}
                           multiline autoFocus rowsMax={2} fullWidth/>
                <Fab variant="round" color="primary" className="message-form__button"
                     onClick={this.handleMessageSend} size="small"><SendIcon /></Fab>
            </div>
        );
    }
}