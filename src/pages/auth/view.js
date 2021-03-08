import React from 'react';
import { Form, Grid, Message, Container, Segment } from 'semantic-ui-react';

import { Button, ButtonLink } from '../../ui-kit';

import './style.scss';

const View = (props) => (
  <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      {props.currentPage === 0 && (
        <>
          <Form size="large">
            <Segment>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <Button lable="Signin" onClick={props.signin} />
            </Segment>
          </Form>
          <Message>
            <Container className="auth__buttons_link">
              <ButtonLink lable="Forget password" onClick={() => 1} />
              <ButtonLink
                lable="I do not have account"
                onClick={() => props.changeCurrentPage(1)}
              />
            </Container>
          </Message>
        </>
      )}
      {props.currentPage === 1 && (
        <>
          <Form size="large">
            <Segment>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail"
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Code"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <Button lable="Signup" />
            </Segment>
          </Form>
          <Message>
            <Container className="auth__buttons_link">
              <ButtonLink lable="Get code" onClick={() => 1} />
              <ButtonLink
                lable="I have account"
                onClick={() => props.changeCurrentPage(0)}
              />
            </Container>
          </Message>
        </>
      )}
    </Grid.Column>
  </Grid>
);

export default View;
