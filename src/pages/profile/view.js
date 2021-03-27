import React from 'react';

import { Card } from '../../ui-kit';

import './style.scss';

const View = (props) => {
  return (
    <>
      <Card
        name={props.name}
        email={props.email}
        createdAt={props.createdAt}
        description={props.description}
      />
    </>
  );
};

export default View;
