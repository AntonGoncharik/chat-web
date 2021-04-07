import React from 'react';

import View from './view';

const Container = (props) => {
  return (
    <View
      id={props.id}
      name={props.name}
      openRoom={props.openRoom}
      active={props.active}
    />
  );
};

export default Container;
