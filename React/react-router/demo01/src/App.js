import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const ParamsExample = () => (
  <Router>
    <div>
      <h2>accounts</h2>
      <ul>
        <li>
          <Link to="/netflix">netflix</Link>
        </li>
        <li>
          <Link to="/zillow-group">zillow-group</Link>
        </li>
        <li>
          <Link to="/yahoo">yahoo</Link>
        </li>
        <li>
          <Link to="/modus-create">modus-create</Link>
        </li>
      </ul>

      <Route path="/:id" component={Child} />

      <Route
        path="/order/:direction(asc|desc)"
        component={ComponentWithRegex}
      />
    </div>
  </Router> 
)

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

const ComponentWithRegex = ({ match }) => (
  <div>
    <h3>Only asc/desc are allowed: {match.params.direction}</h3>
  </div>
);

export default ParamsExample
