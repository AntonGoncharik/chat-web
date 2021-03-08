import React from 'react';
import { Message } from 'semantic-ui-react';

import './style.scss';

const View = (props) => {
  return (
    <div>
      <Message content={`Total users: ${25}`} />
      <Message content={`Online users: ${6}`} />
      <Message content={`Total friends: ${10}`} />
      <Message content={`Online friends: ${2}`} />
    </div>
  );
};

export default View;
