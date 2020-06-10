import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavBar } from '../components'
import { DreamsList, DreamsInsert, DreamsUpdate } from '../pages'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/dreams/list" exact component={DreamsList} />
        <Route path="/dreams/create" exact component={DreamsInsert} />
        <Route
          path="/dreams/update/:id"
          exact
          component={DreamsUpdate}
        />
      </Switch>
    </Router>
  )
}

export default App;
