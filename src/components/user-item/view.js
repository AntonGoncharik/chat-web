/* eslint-disable prettier/prettier */
import React from 'react';
import { List, Image } from 'semantic-ui-react';

import { BASE_URL } from '../../config';
import imageUser from '../../assets/images/user.png';
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
        src={`${props.avatar ? `${BASE_URL}/${props.avatar}` : imageUser}`}
      />
      <List.Content>
        <List.Header>{props.name}</List.Header>
      </List.Content>
    </List.Item>
  );
};

export default View;
