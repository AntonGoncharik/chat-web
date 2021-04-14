import React from 'react';
import { Card, Image } from 'semantic-ui-react';

import { Button, Input, TextArea, Modal } from '..';

import './style.scss';

const View = (props) => {
  return (
    <Card className="card__container">
      <Modal
        isOpen={props.isOpenModal}
        title={props.titleModal}
        message={props.messageModal}
        close={props.closeModal}
        clickOk={props.clickModalOk}
      >
        <Input
          value={props.roomName}
          onChange={(event) => props.changeRoomName(event.target.value)}
        />
      </Modal>
      <div className="card__container_image">
        <div
          className="card__image_background"
          style={{
            backgroundImage:
              'url(' +
              `${props.strAvatar ? props.strAvatar : props.avatar}` +
              ')',
          }}
        />
        <Image
          src={`${props.strAvatar ? props.strAvatar : props.avatar}`}
          wrapped
          ui={false}
          className="card__image"
        />
      </div>
      <Card.Content>
        <Card.Header className="card__input">{props.email}</Card.Header>
        <Card.Meta className="card__input">
          <span className="date">{`Joined in ${new Date(
            props.createdAt,
          ).getFullYear()}`}</span>
        </Card.Meta>
        {props.edit ? (
          <div className="card__input">
            <Input
              value={props.name}
              onChange={(event) => props.changeName(event.target.value)}
            />
          </div>
        ) : (
          <Card.Header>{props.name}</Card.Header>
        )}
        {props.edit ? (
          <div className="card__input">
            <TextArea
              value={props.description}
              onChange={(event) => props.changeDescription(event.target.value)}
              className="card__text_area"
            />
          </div>
        ) : (
          <Card.Description>{props.description}</Card.Description>
        )}
      </Card.Content>
      <Card.Content extra>
        {!props.edit && (
          <Button
            lable="Write"
            onClick={props.openModal}
            icon
            iconName="facebook messenger"
            labelPosition="left"
          />
        )}
        {props.edit && (
          <>
            <Button
              lable="Save"
              onClick={props.save}
              icon
              iconName="save"
              labelPosition="left"
              loading={props.loading}
              disabled={props.loading}
            />
            <Button
              as="label"
              htmlFor="file-avatar"
              lable="Upload avatar"
              icon
              iconName="photo"
              labelPosition="left"
              loading={props.loading}
              disabled={props.loading}
            />
            <input
              type="file"
              id="file-avatar"
              style={{ display: 'none' }}
              onChange={props.changeAvatar}
            />
          </>
        )}
      </Card.Content>
    </Card>
  );
};

export default View;
