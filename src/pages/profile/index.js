import React, { useState } from 'react';

import { userStore } from '../../store';

import View from './view';

const Container = (props) => {
  const [name, setName] = useState(userStore.data.name);
  const [description, setDescription] = useState(userStore.data.description);

  const changeName = (value) => {
    setName(value);
  };

  const changeDescription = (value) => {
    setDescription(value);
  };

  const save = () => {
    userStore.save(name, description);
  };

  return (
    <View
      name={name}
      email={userStore.data.email}
      createdAt={userStore.data.createdAt}
      description={description}
      changeName={changeName}
      changeDescription={changeDescription}
      save={save}
    />
  );
};

export default Container;
