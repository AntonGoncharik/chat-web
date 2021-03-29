/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { SemanticToastContainer } from 'react-semantic-toasts';

import { connectSocket, socket } from './api/socket';

import { Auth, Dashboard, Dialogues, Users, Profile } from './pages';
import { Sidebar, Header, Toast } from './components';

import 'semantic-ui-css/semantic.min.css';
import './style/index.scss';

import { userStore } from './store';

const App = () => {
  useEffect(() => {
    const autosignin = async () => {
      try {
        await userStore.autosignin();
      } catch (error) {
        Toast('error', error.message);
      }
    };

    autosignin();
  }, []);

  useEffect(() => {
    if (userStore.data.id) {
      connectSocket();
      socket &&
        socket.on('connect', () => {
          console.log(socket.id);
          socket && socket.emit('connectUser', 'world');

          // socket.emit('connectUser', userStore.data.id);
          // socket.emit('connectUser');
        });
      // socket &&
      //   socket.on('hello', (arg) => {
      //     console.log(arg); // world
      //   });
      // socket && socket.emit('connectUser', 'world');
      // socket && socket.emit('connectUser', userStore.data.id);
    }
  }, [userStore.data.id]);

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
          return <Redirect to="/signin" />;
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
      <Route exact path="/signin" render={(props) => <Auth {...props} />} />
      <PrivateRoute component={layout} />
      <SemanticToastContainer position="bottom-right" animation="fly down" />
    </BrowserRouter>
  );
};

export default observer(App);
