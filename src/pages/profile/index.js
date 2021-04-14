import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { userStore } from '../../store';
import { Toast } from '../../components';
import { BASE_URL } from '../../config';
import View from './view';

const Container = (props) => {
  const [name, setName] = useState(userStore.data.name);
  const [description, setDescription] = useState(userStore.data.description);
  const [strAvatar, setStrAvatar] = useState('');
  const [fileAvatar, setFileAvatar] = useState(null);

  const changeName = (value) => {
    setName(value);
  };

  const changeDescription = (value) => {
    setDescription(value);
  };

  const save = () => {
    try {
      if (
        name !== userStore.data.name ||
        description !== userStore.data.description
      ) {
        userStore.save({ name, description });
      }

      if (fileAvatar) {
        const formData = new FormData();
        formData.append('id', userStore.data.id);
        formData.append('avatar', fileAvatar);

        userStore.save({ formData });

        setFileAvatar(null);
      }
    } catch (error) {
      Toast('error', error.message);
    }
  };

  const changeAvatar = (e) => {
    const img = e.target.files[0];
    if (img) {
      setFileAvatar(img);
      // eslint-disable-next-line no-undef
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onloadend = () => {
        setStrAvatar(reader.result);
      };
    }
  };

  return (
    <View
      name={name}
      email={userStore.data.email}
      createdAt={userStore.data.createdAt}
      description={description}
      avatar={`${BASE_URL}/${userStore.data.avatar}`}
      changeName={changeName}
      changeDescription={changeDescription}
      save={save}
      loading={userStore.data.loading}
      strAvatar={strAvatar}
      changeAvatar={changeAvatar}
    />
  );
};

export default observer(Container);
