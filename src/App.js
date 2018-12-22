import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import appRoutes from './routes/appRoutes';

const switchRoutes = (
  <Switch>
    {appRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class App extends Component {
  render() {
    return (
      <div>
        <h1>que onda</h1>
        <SideBar />
        {switchRoutes}
      </div>
    );
  }
}

export default App;
