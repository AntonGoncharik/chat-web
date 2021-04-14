import React from 'react';

import { Card } from '../../ui-kit';

import './style.scss';

const View = (props) => {
  return (
    <>
      <Card
        edit
        name={props.name}
        email={props.email}
        createdAt={props.createdAt}
        description={props.description}
        avatar={props.avatar}
        changeName={props.changeName}
        changeDescription={props.changeDescription}
        save={props.save}
        loading={props.loading}
        strAvatar={props.strAvatar}
        changeAvatar={props.changeAvatar}
      />
    </>
  );
};

export default View;
