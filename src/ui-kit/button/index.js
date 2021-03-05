import React from 'react'
import { Button } from 'semantic-ui-react'

import './style.scss';

const View = (props) => {
  return (
    <Button
      fluid
      size='large'
      onClick={props.onClick}
      disabled={props.disabled}>
      {props.lable}
    </Button>
  )
};

export default View;