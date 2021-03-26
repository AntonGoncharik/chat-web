/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Auth, Dashboard, Dialogues, Users, Profile } from './pages';
import { Sidebar, Header } from './components';

import 'semantic-ui-css/semantic.min.css';
import './style/index.scss';

import { userStore } from './store';

const App = () => {
  useEffect(() => {
    const autoSignin = async () => {
      try {
        await userStore.autoSignin();
      } catch (error) {
        console.log(error);
      }
    };

    autoSignin();
  }, []);

  const layout = (props) => (
    <div className="app__container">
      <div className="app__header">
        <Header {...props} />
      </div>
      <div className="app__sidebar">
        <Sidebar />
      </div>
      <div className="app__content">
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          <Route path="/dashboard" render={() => <Dashboard />} />
          <Route path="/dialogues" render={() => <Dialogues />} />
          <Route path="/users" render={() => <Users />} />
          <Route path="/profile" render={() => <Profile />} />
        </Switch>
      </div>
    </div>
  );

  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => {
          if (userStore.data.auth) {
            return <Component {...props} />;
          }
          return <Redirect to="/login" />;
        }}
      />
    );
  };

  if (userStore.data.loading) {
    return (
      <div className="app__splash">
        <h1>CHAT</h1>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Route exact path="/login" render={(props) => <Auth {...props} />} />
      <PrivateRoute component={layout} />
    </BrowserRouter>
  );
};

export default observer(App);
