import React from 'react';
import { List, Image } from 'semantic-ui-react';

import './style.scss';

const View = (props) => {
  return (
    <List.Item
      // eslint-disable-next-line prettier/prettier
      className={`room-item__container ${props.active ? 'room-item__container-active' : ''}`}
      onClick={() => props.openRoom(props.id)}
      active={props.active}
    >
      <Image
        avatar
        src="https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/"
      />
      <List.Content>
        <List.Header>{props.name}</List.Header>
      </List.Content>
    </List.Item>
  );
};

export default View;
