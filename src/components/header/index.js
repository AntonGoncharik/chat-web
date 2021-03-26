import React from 'react';

import { userStore } from '../../store';

import View from './view';

const Container = (props) => {
  const goToProfile = () => {
    props.history.push('/profile');
  };

  const signout = () => {
    userStore.signout();
    props.history.push('/auth');
  };

  return (
    <View
      goToProfile={goToProfile}
      signout={signout}
      email={userStore.data.email}
    />
  );
};

export default Container;
