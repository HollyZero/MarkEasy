import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import Mark from './Mark';
import Edit from './Edit';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route} from 'react-router';
import createHistory from 'history/createHashHistory';

ReactDOM.render(
    <Router history={createHistory()}>
        <div>
            <Route exact path="/" component={App}/>
            <Route exact path="/mark" component={Mark}/>
            <Route exact path="/edit" component={Edit}/>
        </div>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
