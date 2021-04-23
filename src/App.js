import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import { SearchList } from './SearchList'
import { CreateSearch } from './CreateSearch'
import { EditSearch } from './EditSearch'

function App() {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Searchs</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Search Here</Link>
          </li>
        </ul>
      </nav>
    <Switch>
      <Route exact path="/" component={SearchList}/>
      <Route path="/edit/:id" component={EditSearch}/>
      <Route path="/create" component={CreateSearch}/>
    </Switch>
    </div>
  );
}

export default App;
