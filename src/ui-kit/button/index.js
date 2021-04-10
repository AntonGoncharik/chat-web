import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

import './style.scss';

const View = (props) => {
  return (
    <Button
      icon={props.icon}
      labelPosition={props.labelPosition}
      fluid={props.fluid}
      size="large"
      onClick={props.onClick}
      disabled={props.disabled}
      className={props.className}
      loading={props.loading}
      as={props.as}
      htmlFor={props.htmlFor}
    >
      {props.icon && <Icon name={props.iconName} />}
      {props.lable}
    </Button>
  );
};

export default View;
