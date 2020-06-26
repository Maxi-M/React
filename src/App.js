import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {routes} from './routes'
import {Link} from 'react-router-dom';

export class App extends Component{


    render() {
        return (
            <div className='container'>
                <div className="header">
                </div>
                <BrowserRouter>
                    <Switch>
                        {routes.map((route, index) => <Route key={index} {...route}/>)}
                    </Switch>
                </BrowserRouter>
                <footer className="footer">&copy; Moskovskiy 2020</footer>
            </div>
        );
    }
}