import React, {Component} from 'react';

export class UserList extends Component{
    state = {
        users: [
        ],
    }
    render() {
        return (
            <div className='user-list'>
                <div className="sidebar__header user-list__header">
                    Сейчас в чате
                </div>
                <div className="sidebar__content user-list__users">
                    <p>Чат 1</p>
                    <p>Чат 2</p>
                    <p>Чат 3</p>
                </div>
            </div>
        );
    }
}