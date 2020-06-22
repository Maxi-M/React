import React, {Component} from 'react';

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

    handleMessageSend = () => {
        const handler = this.props.onSend;
        if (typeof handler  === 'function') {
            handler({
                author: this.state.author,
                time: "XX.XX.XX",
                text: this.state.text
            })

            this.setState({text: ""})
        }
    }

    render() {
        const {value} = this.state;
        return (
            <div className='message-form'>
                <input className="message-form__input" type="text" name="text" value={this.state.text} placeholder="Message..."
                       onChange={this.handleInputChange}
                />
                <button className="message-form__button" onClick={this.handleMessageSend}>Отправить</button>
            </div>
        );
    }
}