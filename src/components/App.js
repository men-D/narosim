import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Dashboard from './dashboard/Dashboard';
import ProjectDetails from './projects/ProjectDetails';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import CreateProject from './projects/CreateProject';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
