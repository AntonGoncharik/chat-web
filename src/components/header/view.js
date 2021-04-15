import React from 'react';
import { Header, Image } from 'semantic-ui-react';

import imageUser from '../../assets/images/room.png';
import './style.scss';

const View = (props) => {
  return (
    <div className="header__container">
      <div className="header__label">
        <Header size="tiny">{props.name}</Header>
      </div>
      <div className="header__avatar">
        <Image avatar src={`${props.avatar ? props.avatar : imageUser}`} />
        <div className="header__label">
          <Header size="tiny">{props.email}</Header>
        </div>
        <div className="header__modal">
          <div className="header__modal_item" onClick={props.goToProfile}>
            <Header size="tiny">My profile</Header>
          </div>
          <div className="header__modal_item" onClick={props.signout}>
            <Header size="tiny">Signout</Header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
