import React from 'react';
import { Message } from 'semantic-ui-react';

import './style.scss';

const View = (props) => {
  return (
    <div>
      <Message content={`Total users: ${props.allUsers}`} />
      <Message content={`Online users: ${props.onlineUsers}`} />
    </div>
  );
};

export default View;
