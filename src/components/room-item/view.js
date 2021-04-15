import React from 'react';
import { List, Image } from 'semantic-ui-react';

import imageRoom from '../../assets/images/room.png';
import './style.scss';

const View = (props) => {
  return (
    <List.Item
      // eslint-disable-next-line prettier/prettier
      className={`room-item__container ${props.active ? 'room-item__container-active' : ''}`}
      onClick={() => props.openRoom(props.id)}
      active={props.active}
    >
      <Image avatar src={imageRoom} />
      <List.Content>
        <List.Header>{props.name}</List.Header>
      </List.Content>
    </List.Item>
  );
};

export default View;
