import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {routes} from './routes'
import {Link} from 'react-router-dom';

export class App extends Component{
    render() {
        return (
            <BrowserRouter>
            <div className='container'>
                <div className="header">
                    <Link to={'/'}>Home</Link>&nbsp;&nbsp;&nbsp;
                    <Link to={'/profile'}>Profile</Link>
                </div>
                    <Switch>
                        {routes.map((route, index) => <Route key={index} {...route}/>)}
                    </Switch>

                <footer className="footer">&copy; Moskovskiy 2020</footer>
            </div>
            </BrowserRouter>
        );
    }
}