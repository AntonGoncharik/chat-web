import React from 'react';
import { Card, Image } from 'semantic-ui-react';

import { Button, Input, TextArea } from '..';

import './style.scss';

const View = (props) => {
  return (
    <Card className="card__container">
      <div className="card__container_image">
        <div className="card__image_background" />
        <Image
          src="https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/"
          wrapped
          ui={false}
          className="card__image"
        />
      </div>
      <Card.Content>
        {props.edit ? (
          <Input
            value={props.name}
            onChange={(event) => props.changeName(event.target.value)}
          />
        ) : (
          <Card.Header>{props.name}</Card.Header>
        )}
        <Card.Header>{props.email}</Card.Header>
        <Card.Meta>
          <span className="date">{`Joined in ${new Date(
            props.createdAt,
          ).getFullYear()}`}</span>
        </Card.Meta>
        {props.edit ? (
          <TextArea
            value={props.description}
            onChange={(event) => props.changeDescription(event.target.value)}
          />
        ) : (
          <Card.Description>{props.description}</Card.Description>
        )}
      </Card.Content>
      <Card.Content extra>
        {!props.edit && (
          <Button
            lable="Write"
            icon
            iconName="facebook messenger"
            labelPosition="left"
          />
        )}
        {props.edit && (
          <Button
            lable="Save"
            onClick={props.save}
            icon
            iconName="save"
            labelPosition="left"
          />
        )}
      </Card.Content>
    </Card>
  );
};

export default View;
