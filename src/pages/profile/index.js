import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { UserService } from '../../api';
import { userStore } from '../../store';
import { Toast } from '../../components';

import View from './view';

const Container = (props) => {
  const [name, setName] = useState(userStore.data.name);
  const [description, setDescription] = useState(userStore.data.description);
  const [loading, setLoading] = useState(false);
  const [strAvatar, setStrAvatar] = useState('');
  const [fileAvatar, setFileAvatar] = useState(null);

  const changeName = (value) => {
    setName(value);
  };

  const changeDescription = (value) => {
    setDescription(value);
  };

  const save = async () => {
    try {
      setLoading(true);

      if (
        name !== userStore.data.name ||
        description !== userStore.data.description
      ) {
        await userStore.save(name, description);
      }

      if (fileAvatar) {
        const formData = new FormData();
        formData.append('id', userStore.data.id);
        formData.append('avatar', fileAvatar);

        const resultUserUpdated = await UserService.updateUser(formData, {
          contentType: 'multipart/form-data',
        });

        setFileAvatar(null);
      }
    } catch (error) {
      Toast('error', error.message);
    } finally {
      setLoading(false);
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
      changeName={changeName}
      changeDescription={changeDescription}
      save={save}
      loading={loading}
      strAvatar={strAvatar}
      changeAvatar={changeAvatar}
    />
  );
};

export default observer(Container);
