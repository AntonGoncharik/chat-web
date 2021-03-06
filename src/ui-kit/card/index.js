import React from 'react';
import { Card, Image } from 'semantic-ui-react';

import { Button } from '..';

import './style.scss';

const View = (props) => {
  return (
    <Card className="card__container">
      <Image
        src="https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Anton</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>My status</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button lable="Write" icon iconName="facebook messenger" />
      </Card.Content>
    </Card>
  );
};

export default View;
