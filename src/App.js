/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { SemanticToastContainer } from 'react-semantic-toasts';

import { connectSocket, socket } from './api/socket';

import { Auth, Dashboard, Rooms, Users, Profile } from './pages';
import { Sidebar, Header, Toast } from './components';

import 'semantic-ui-css/semantic.min.css';
import './style/index.scss';

import { userStore, roomsStore } from './store';

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
      listenSocket();
    }
  }, [userStore.data.id]);

  const listenSocket = () => {
    socket.on('connect', () => {
      socket.emit('users:connect', userStore.data.id);
    });
    socket.on('users:connect', (onlineUsers) => {
      userStore.setOnlineUsers(onlineUsers);
    });
    socket.on('users:disconnect', (onlineUsers) => {
      userStore.setOnlineUsers(onlineUsers);
    });
    socket.on('rooms:create', (room) => {
      roomsStore.createRoom(room);
    });
    socket.on('rooms:update', (room) => {
      roomsStore.updateRoom(room);
    });
  };

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
          <Route path="/rooms" render={() => <Rooms />} />
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
