import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

import './style.scss';

const View = (props) => {
  return (
    <Modal size={'tiny'} open={props.isOpen} onClose={props.close}>
      <Modal.Header>{props.title}</Modal.Header>
      <Modal.Content className="modal__content">
        <p>{props.message}</p>
        {props.children}
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={props.close}>
          No
        </Button>
        <Button positive onClick={props.clickOk}>
          Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default View;
