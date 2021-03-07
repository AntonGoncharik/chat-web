import React from 'react';
import { List } from 'semantic-ui-react';

import { DialogItem, MessageItem } from '../../components';
import { Input, Button } from '../../ui-kit';

import './style.scss';

const View = (props) => {
  return (
    <div className="dialogues__container">
      <div className="dialogues__list">
        <List selection divided verticalAlign="middle">
          <DialogItem />
          <DialogItem />
          <DialogItem />
          <DialogItem />
          <DialogItem />
          <DialogItem />
          <DialogItem />
          <DialogItem />
          <DialogItem />
          <DialogItem />
          <DialogItem />
          <DialogItem />
          <DialogItem />
          <DialogItem />
          <DialogItem />
          <DialogItem />
          <DialogItem />
          <DialogItem />
          <DialogItem />
          <DialogItem />
          <DialogItem />
          <DialogItem />
        </List>
      </div>
      <div className="dialogues__messages">
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
      <div className="dialogues__actions">
        <Input className="dialogues__input" onChange={() => 1} />
        <Button
          className="dialogues__button"
          lable="Send"
          icon
          iconName="send"
          loading
          disabled
          onClick={() => 1}
        />
      </div>
    </div>
  );
};

export default View;
