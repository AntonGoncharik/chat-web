import React from 'react';
import { List } from 'semantic-ui-react';

import { UserItem } from '../../components';
import { Card } from '../../ui-kit';

import './style.scss';

const View = (props) => {
  return (
    <div className="users__container">
      <div className="users__list">
        <List selection divided verticalAlign="middle">
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
        </List>
      </div>
      <div className="users__profile">
        <Card />
      </div>
    </div>
  );
};

export default View;
