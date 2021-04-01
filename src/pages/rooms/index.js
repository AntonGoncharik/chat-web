import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';

import { roomsStore } from '../../store';

import View from './view';

const Container = (props) => {
  const [room, setRoom] = useState(null);

  return <View rooms={toJS(roomsStore.data)} />;
};

export default observer(Container);
