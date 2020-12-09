import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Archive from '../sections/Archive';

function Project({ id }) {
  return (
    <div className="work" id={id}>
      <div className="work-wrapper">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/archive">Archive</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/archive" component={Archive} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default Project;
