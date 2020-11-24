import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Form1 = (props) => {
  return (
     <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleName">Name</Label>
            <Input type="text" name="name" id="exampleName"/>
          </FormGroup>
        </Col>
      </Row>
      <Button>Sign in</Button>
    </Form>
  );
}

export default Form1;