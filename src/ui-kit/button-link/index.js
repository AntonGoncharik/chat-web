import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';

import './style.scss';

const View = (props) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Section link onClick={props.onClick}>
        {props.lable}
      </Breadcrumb.Section>
    </Breadcrumb>
  );
};

export default View;
