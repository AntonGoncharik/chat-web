import React from 'react';
import { observer } from 'mobx-react-lite';

import { userStore } from '../../store';
import { BASE_URL } from '../../config';

import View from './view';

const Container = (props) => {
  const goToProfile = () => {
    props.history.push('/profile');
  };

  const signout = () => {
    userStore.signout();
  };

  return (
    <View
      goToProfile={goToProfile}
      signout={signout}
      email={userStore.data.email}
      name={userStore.data.name}
      avatar={`${BASE_URL}/${userStore.data.avatar}`}
    />
  );
};

export default observer(Container);
