import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

import './style.scss';

const View = (props) => {
  return (
    <Button
      icon={props.icon}
      labelPosition="left"
      fluid={props.fluid}
      size="large"
      onClick={props.onClick}
      disabled={props.disabled}
      className={props.className}
      loading={props.loading}
    >
      {props.icon && <Icon name={props.iconName} />}
      {props.lable}
    </Button>
  );
};

export default View;
