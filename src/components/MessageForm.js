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

    }

    render() {
        const {value} = this.state;
        return (
            <div className='message-form'>
                <input className="message-form__input" type="text" name="text" value={value} placeholder="Message..."
                       onChange={this.handleInputChange}
                />
                <button className="message-form__button" onClick={this.handleMessageSend}>Отправить</button>
            </div>
        );
    }
}