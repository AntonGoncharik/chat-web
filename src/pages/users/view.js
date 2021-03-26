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
          {props.users.map((item) => (
            <UserItem
              name={item.name}
              onClick={() => props.openUser(item._id)}
            />
          ))}
        </List>
      </div>
      {props.user && (
        <div className="users__profile">
          <Card user={props.user} />
        </div>
      )}
    </div>
  );
};

export default View;
