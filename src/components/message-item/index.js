import React from 'react';

import View from './view';

const Container = (props) => {
  return <View text={props.text} left={props.left} />;
};

export default Container;
