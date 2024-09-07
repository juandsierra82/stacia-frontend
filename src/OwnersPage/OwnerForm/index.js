import React from 'react';
import { Card, Form, Button, Dropdown } from 'react-bootstrap';

const OwnerForm = () => {
  return (
    <Card>
      <Form>
        <Form.Group className="mb-3" controlId="ownerName">
          <Form.Control type="email" placeholder="Enter owner name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ownerName">
          <Form.Control type="email" placeholder="Enter owner email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ownerName">
          <Form.Control type="email" placeholder="Enter owner phone" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ownerName">
          <Form.Control type="email" placeholder="Enter owner birthday" />
        </Form.Group>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Select Unit
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">201</Dropdown.Item>
            <Dropdown.Item href="#/action-2">301</Dropdown.Item>
            <Dropdown.Item href="#/action-3">302</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default OwnerForm;
