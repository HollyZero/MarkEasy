import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import Mark from './Mark';
import Edit from './Edit';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, Switch} from 'react-router';
import history from "./history.js"
import ImportStLst from "./ImportStLst";
import CreateFeedBack from "./createFeedBack.js";
import notFound from "./notFound.js";
import ExportFeedback from "./ExportFeedback";

ReactDOM.render(
    <Router history={history}>
        <div>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/importstlst" component={ImportStLst}/>
                <Route exact path="/exportfeedback" component={ExportFeedback}/>
                <Route exact path="/mark" component={Mark}/>
                <Route exact path="/edit" component={Edit}/>
                <Route exact path="/create_feedback" render={(props)=>(<CreateFeedBack {...props} stage={1}/>)}/>
                <Route path="*" component={notFound} />
            </Switch>
        </div>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
