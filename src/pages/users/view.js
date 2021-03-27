import React from 'react';
import { List, Header, Divider } from 'semantic-ui-react';

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
          />
        </div>
      )}
      {!props.user && (
        <div className="users__noone">
          <Header size="huge">Please, choose a someone user</Header>
        </div>
      )}
    </div>
  );
};

export default View;
