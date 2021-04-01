import React from 'react';
import { List } from 'semantic-ui-react';

import { RoomItem, MessageItem } from '../../components';
import { Input, Button } from '../../ui-kit';

import './style.scss';

const View = (props) => {
  return (
    <div className="rooms__container">
      <div className="rooms__list">
        <List selection divided verticalAlign="middle">
          {props.rooms.map((item) => {
            return <RoomItem name={item.name} />;
          })}
        </List>
      </div>
      <div className="rooms__messages">
        <MessageItem />
        <MessageItem left />
        <MessageItem left />
        <MessageItem />
        <MessageItem />
        <MessageItem left />
        <MessageItem left />
        <MessageItem />
        <MessageItem />
        <MessageItem left />
        <MessageItem left />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
      </div>
      <div className="rooms__actions">
        <Input className="rooms__input" onChange={() => 1} />
        <Button
          className="rooms__button"
          lable="Send"
          icon
          iconName="send"
          labelPosition="left"
          loading
          disabled
          onClick={() => 1}
        />
      </div>
    </div>
  );
};

export default View;
