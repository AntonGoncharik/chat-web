import React from 'react';
import { Message } from 'semantic-ui-react';

import './style.scss';

const View = (props) => {
  return (
    // eslint-disable-next-line prettier/prettier
    <div className={`message__container ${props.left ? 'message-left' : 'message-right'}`}>
      <Message content="Anton" />
    </div>
  );
};

export default View;
