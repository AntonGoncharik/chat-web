import React from 'react';

import { userStore } from '../../store';

import View from './view';

const Container = (props) => {
  return (
    <View
      name={userStore.data.name}
      email={userStore.data.email}
      createdAt={new Date(userStore.data.createdAt).getFullYear()}
      description={userStore.data.description}
    />
  );
};

export default Container;
