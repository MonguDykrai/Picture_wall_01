import React from "react";
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <NavLink to="/" activeClassName="current" activeStyle={{color: 'red'}}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/topics">Topics</NavLink>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <NavLink to={`${match.url}/rendering`}>Rendering with React</NavLink>
      </li>
      <li>
        <NavLink to={`${match.url}/components`}>Components</NavLink>
      </li>
      <li>
        <NavLink to={`${match.url}/props-v-state`}>Props v. State</NavLink>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);


/**
 * props
 * {match: {…}, location: {…}, history: {…}
 */
const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

ReactDOM.render(
  <BasicExample />,
  document.getElementById('app')
)