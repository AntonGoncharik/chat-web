import React from 'react';
import { Input } from 'semantic-ui-react';

import './style.scss';

const View = (props) => {
  return (
    <Input
      placeholder="Enter..."
      size="large"
      className={props.className}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default View;
