import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import './style.scss';

const View = (props) => {
  const location = useLocation();

  return (
    <Menu pointing vertical className="menu__container">
      <Menu.Item
        as={Link}
        to="/dashboard"
        name="dashboard"
        active={location.pathname === '/dashboard'}
      />
      <Menu.Item
        as={Link}
        to="/dialogues"
        name="dialogues"
        active={location.pathname === '/dialogues'}
      />
      <Menu.Item
        as={Link}
        to="/users"
        name="users"
        active={location.pathname === '/users'}
      />
    </Menu>
  );
};

export default View;
