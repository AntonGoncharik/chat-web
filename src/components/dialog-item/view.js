import React from 'react';
import { List, Image } from 'semantic-ui-react';

import './style.scss';

const View = (props) => {
  return (
    <List.Item className="dialog__container">
      <Image
        avatar
        src="https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/"
      />
      <List.Content>
        <List.Header>Anton</List.Header>
      </List.Content>
    </List.Item>
  );
};

export default View;
