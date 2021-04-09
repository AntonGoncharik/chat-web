import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';

import { socket } from '../../api/socket';
import { roomsStore, messagesStore, userStore } from '../../store';
import { Toast } from '../../components';

import View from './view';

const Container = (props) => {
  const [room, setRoom] = useState(null);
  const [text, setText] = useState('');

  const rooms = toJS(roomsStore.data);
  const messages = toJS(messagesStore.data);
  const user = userStore.data;

  useEffect(() => {
    const getRooms = async () => {
      try {
        await roomsStore.getRooms(user.id);
      } catch (error) {
        Toast('error', error.message);
      }
    };

    if (!rooms.list.length && user.id) {
      getRooms();
    }
  }, [user.id, rooms.list.length]);

  const changeText = (value) => {
    setText(value);
  };

  const openRoom = (id) => {
    const openedRoom = rooms.list.find((item) => item._id === id);
    if (openedRoom) {
      setRoom(openedRoom);
      messagesStore.clearMessages();
      messagesStore.getMessages(id);
    }
  };

  const sendMessage = () => {
    socket.emit('messages:create', user.id, room._id, text);

    setText('');
  };

  return (
    <View
      rooms={rooms.list}
      room={room}
      messages={messages.list}
      text={text}
      userId={user.id}
      loading={rooms.loading}
      changeText={changeText}
      openRoom={openRoom}
      sendMessage={sendMessage}
      loadingMessages={messages.loading}
    />
  );
};

export default observer(Container);
