import React from 'react';

import { userStore } from '../../store';

import View from './view';

const Container = (props) => {
  return (
    <View
      name={userStore.data.name}
      email={userStore.data.email}
      createdAt={userStore.data.createdAt}
      description={userStore.data.description}
    />
  );
};

export default Container;
