import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link, Switch
} from 'react-router-dom'

import Loadable from 'react-loadable';
import Loading from './components/Loading';


const LoadableHome = Loadable({
    loader: () => import('./simpleComponents/home'),
    loading: Loading,
});
const LoadableAbout = Loadable({
    loader: () => import('./simpleComponents/about'),
    loading: Loading,
});
const LoadableTopics = Loadable({
    loader: () => import('./simpleComponents/topics'),
    loading: Loading,
});

const RouterCodeSplit = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/about">关于</Link></li>
                <li><Link to="/topics">主题列表</Link></li>
            </ul>

            <hr/>
            <Switch>
                <Route exact path="/" component={LoadableHome}/>
                <Route path="/about" component={LoadableAbout}/>
                <Route path="/topics" component={LoadableTopics}/>
            </Switch>
        </div>
    </Router>
)

export default RouterCodeSplit