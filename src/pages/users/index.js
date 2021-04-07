import React, { useState, useEffect } from 'react';

import { socket } from '../../api/socket';

import { userStore } from '../../store';
import { UserService } from '../../api';

import View from './view';

const Container = (props) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [roomName, setRoomName] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      const result = await UserService.getUsers(1, 20);

      const usersWithoutMe = result.data.filter(
        (item) => item._id !== userStore.data.id,
      );

      setUsers(usersWithoutMe);
    };

    getUsers();
  }, []);

  const openUser = (id) => {
    setUser(users.find((item) => item._id === id));
  };

  const createRoom = () => {
    if (roomName.trim()) {
      socket.emit('rooms:create', userStore.data.id, user._id, roomName.trim());
      closeModal();
      props.history.push('/rooms');
    }
  };

  const changeRoomName = (value) => {
    setRoomName(value);
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setRoomName('');
    setIsOpenModal(false);
  };

  return (
    <View
      users={users}
      user={user}
      openUser={openUser}
      createRoom={createRoom}
      roomName={roomName}
      changeRoomName={changeRoomName}
      isOpenModal={isOpenModal}
      titleModal={'Message'}
      messageModal={'Please, write room name'}
      openModal={openModal}
      closeModal={closeModal}
      clickModalOk={createRoom}
    />
  );
};

export default Container;
