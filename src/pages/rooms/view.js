import React from 'react';
import { List, Header } from 'semantic-ui-react';

import { RoomItem, MessageItem } from '../../components';
import { Input, Button } from '../../ui-kit';

import './style.scss';

const View = (props) => {
  return (
    <div className="rooms__container">
      <div className="rooms__list">
        {!props.rooms.length && (
          <div className="rooms__noone">
            <Header size="huge">There are no rooms yet</Header>
          </div>
        )}
        {!!props.rooms.length && (
          <List selection divided verticalAlign="middle" animated>
            {props.rooms.map((item) => {
              return (
                <RoomItem
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  openRoom={props.openRoom}
                  active={item._id === props.room?._id}
                />
              );
            })}
          </List>
        )}
      </div>
      <div className="rooms__messages">
        {!props.room && !!props.rooms.length && (
          <div className="rooms__noone">
            <Header size="huge">
              Please, choose a someone room on the left
            </Header>
          </div>
        )}
        {props.room && !props.messages.length && !props.loadingMessages && (
          <div className="rooms__noone">
            <Header size="huge">There are no messages in the room yet</Header>
          </div>
        )}
        {props.room &&
          props.messages.map((item) => {
            return (
              <MessageItem
                key={item._id}
                text={item.text}
                left={item.userId !== props.userId}
              />
            );
          })}
      </div>
      <div className="rooms__actions">
        {props.room && (
          <>
            <Input
              className="rooms__input"
              value={props.text}
              onChange={(event) => props.changeText(event.target.value)}
            />
            <Button
              className="rooms__button"
              lable="Send"
              icon
              iconName="send"
              labelPosition="left"
              loading={false}
              disabled={false}
              onClick={props.sendMessage}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default View;
