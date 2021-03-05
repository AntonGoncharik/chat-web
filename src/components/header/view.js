import React from 'react';
import { Header } from 'semantic-ui-react';

import { Avatar } from '../';

import './style.scss';

const View = (props) => {
  return (
    <div className="header_container">
      <div className="header_avatar">
        <Avatar />
        <div className="header__label">
          <Header size="medium">{'ant.goncharik@gmail.com'}</Header>
        </div>
        <div className="header_modal">
          <div className="header_modal_item" onClick={() => 1}>
            <Header size="medium">my profile</Header>
          </div>
          <div className="header_modal_item" onClick={() => 1}>
            <Header size="medium">signout</Header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
