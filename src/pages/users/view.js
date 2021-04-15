import React from 'react';
import { List, Header } from 'semantic-ui-react';

import { UserItem } from '../../components';
import { Card } from '../../ui-kit';

import './style.scss';

const View = (props) => {
  return (
    <div className="users__container">
      <div className="users__list">
        <List selection divided verticalAlign="middle" animated>
          {props.users.map((item) => (
            <UserItem
              key={item._id}
              name={item.name}
              avatar={item.avatar}
              onClick={() => props.openUser(item._id)}
              active={item._id === props.user?._id}
            />
          ))}
        </List>
      </div>
      {props.user && (
        <div className="users__profile">
          <Card
            name={props.user.name}
            email={props.user.email}
            avatar={props.user.avatar}
            createdAt={props.user.createdAt}
            description={props.user.description}
            createRoom={props.createRoom}
            roomName={props.roomName}
            changeRoomName={props.changeRoomName}
            isOpenModal={props.isOpenModal}
            titleModal={props.titleModal}
            messageModal={props.messageModal}
            openModal={props.openModal}
            closeModal={props.closeModal}
            clickModalOk={props.clickModalOk}
          />
        </div>
      )}
      {!props.user && (
        <div className="users__noone">
          <Header size="huge">Please, choose a someone user on the left</Header>
        </div>
      )}
    </div>
  );
};

export default View;
