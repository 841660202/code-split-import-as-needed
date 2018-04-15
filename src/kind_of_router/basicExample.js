import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
} from 'react-router-dom'

const routerArry = [{
    path: '/',
    name: 'Home',
    children: [
        {
            path: 'home2',
            name: 'home2',
        }
    ]
}, {
    path: '/about',
    name: 'About',

}, {
    path: '/topics',
    name: 'Topics',

}]
const BasicExample = () => (
    <Router>
        <div>
            <ul>
                {
                    routerArry.map(item =>
                        <li>
                            <NavLink
                                to={item.path}
                                activeStyle={{
                                    fontWeight: 'bold',
                                    color: 'red'
                                }}>{item.name}
                            </NavLink>
                        </li>
                    )
                }
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
        </div>
    </Router>
)

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)
const Home2 = () => (
    <div>
        <h2>Home2</h2>
    </div>
)
const Home3 = () => (
    <div>
        <h2>Home3</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Topics = ({match}) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)

const Topic = ({match}) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

export default BasicExample