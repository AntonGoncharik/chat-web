import React from 'react';
import { Input } from 'semantic-ui-react';

import './style.scss';

const View = (props) => {
  return (
    <Input
      placeholder="Enter..."
      size="large"
      className={props.className}
      onChange={props.onChange}
    />
  );
};

export default View;
