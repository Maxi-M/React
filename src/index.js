import React from 'react';
import ReactDom from 'react-dom';

import './style.css';
import './test.scss';

const messagesData = ["Сообщение 1", "Сообщение 2"];

const Message = (props) => <div>{props.text}</div>

const MessageList = ({data}) => {
    return data.map((item, index) => <Message text={item} key={index} />);
}

// const MessageInput = (props) => <input type="text" value={props.value}/>

// const handleClick = () => {
//     messagesData.push(MessageInput.text);
// }
// const ButtonSend = () => {
//     return <div onClick={handleClick}>Send</div>
// }

ReactDom.render(
    <MessageList data={messagesData} />,
//    <MessageInput value="П" />,
//    <ButtonSend />,
    document.getElementById('root'),
);