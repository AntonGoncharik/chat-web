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
            createdAt={props.user.createdAt}
            description={props.user.description}
            createRoom={props.createRoom}
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
