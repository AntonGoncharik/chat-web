import React, { useState, useEffect } from 'react';

import { UserService } from '../../api';

import View from './view';

const Container = (props) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      const result = await UserService.getUsers(1, 20);

      setUsers(result.data);
    };

    getUsers();
  }, []);

  const openUser = (id) => {
    setUser(users.find((item) => item._id === id));
  };

  return <View users={users} user={user} openUser={openUser} />;
};

export default Container;
