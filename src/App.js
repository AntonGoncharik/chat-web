import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Auth, Dashboard, Dialogues, Users } from './pages';
import { Sidebar } from './components';

import 'semantic-ui-css/semantic.min.css';
import './style/index.scss';

import { userStore } from './store';

const App = () => {
  const layout = (props) => (
    <div className="app__container">
      <div className="app__header">Header</div>
      <div className="app__sidebar">
        <Sidebar />
      </div>
      <div className="app__content">
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/dialogues">
            <Dialogues />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </div>
    </div>
  );

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) => {
        if (userStore.data.auth) {
          return <Component {...props} />;
        }
        return <Redirect to="/auth" />;
      }}
    />
  );

  return (
    <BrowserRouter>
      <Redirect exact from="/" to="/dashboard" />
      <Route exact path="/auth" component={Auth} />
      <PrivateRoute component={layout} />
    </BrowserRouter>
  );
};

export default observer(App);
