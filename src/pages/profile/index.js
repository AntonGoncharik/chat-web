import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { userStore } from '../../store';

import View from './view';

const Container = (props) => {
  const [name, setName] = useState(userStore.data.name);
  const [description, setDescription] = useState(userStore.data.description);
  const [loading, setLoading] = useState(false);

  const changeName = (value) => {
    setName(value);
  };

  const changeDescription = (value) => {
    setDescription(value);
  };

  const save = async () => {
    if (
      name !== userStore.data.name ||
      description !== userStore.data.description
    ) {
      try {
        setLoading(true);

        await userStore.save(name, description);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
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
      loading={loading}
    />
  );
};

export default observer(Container);
