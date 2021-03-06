import React from 'react';
import { Header, Image } from 'semantic-ui-react';

import './style.scss';

const View = (props) => {
  return (
    <div className="header__container">
      <div className="header__avatar">
        <Image
          avatar
          src="https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/"
        />
        <div className="header__label">
          <Header size="medium">{'ant.goncharik@gmail.com'}</Header>
        </div>
        <div className="header__modal">
          <div className="header__modal_item" onClick={() => 1}>
            <Header size="medium">My profile</Header>
          </div>
          <div className="header__modal_item" onClick={() => 1}>
            <Header size="medium">Signout</Header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
