import React from 'react';
import { observer } from 'mobx-react-lite';

import { userStore } from '../../store';

import View from './view';

const Container = (props) => {
  return (
    <View
      allUsers={userStore.data.statistics.allUsers}
      onlineUsers={userStore.data.statistics.onlineUsers}
    />
  );
};

export default observer(Container);
