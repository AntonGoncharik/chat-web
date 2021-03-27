import React from 'react';
import { Form, TextArea } from 'semantic-ui-react';

import './style.scss';

const View = (props) => {
  return (
    <Form>
      <TextArea
        placeholder="Enter..."
        className={props.className}
        value={props.value}
        onChange={props.onChange}
      />
    </Form>
  );
};

export default View;
