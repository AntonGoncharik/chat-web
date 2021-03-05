import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

import './style.scss';

const View = (props) => {
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <Menu pointing vertical className='menu__container'>
      <Menu.Item
        as={Link}
        to='/dashboard'
        name='dashboard'
        active={activeItem === 'dashboard'}
        onClick={() => setActiveItem('dashboard')}
      />
      <Menu.Item
        as={Link}
        to='/dialogues'
        name='dialogues'
        active={activeItem === 'dialogues'}
        onClick={() => setActiveItem('dialogues')}
      />
      <Menu.Item
        as={Link}
        to='/users'
        name='users'
        active={activeItem === 'users'}
        onClick={() => setActiveItem('users')}
      />
    </Menu>
  );
};

export default View;
