/* eslint-disable prettier/prettier */
import React from 'react';
import { List, Image } from 'semantic-ui-react';

import './style.scss';

const View = (props) => {
  return (
    <List.Item
      className={`user-item__container ${props.active ? 'user-item__container-active' : ''}`}
      onClick={props.onClick}
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
