import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Outlet, NavLink } from 'react-router-dom';
import { ArrowUp, ArrowDown, Trash } from 'react-bootstrap-icons';

const TasksPage = () => {
  return (
    <Row>
      {' '}
      <Col>
        <ListGroup numbered>
          <ListGroup.Item as={NavLink} to="1">
            Cras justo odio Task 1 <ArrowDown />
            <Trash />
          </ListGroup.Item>
          <ListGroup.Item as={NavLink} to="2">
            Cras justo odio Task 2 <ArrowUp />
            <ArrowDown />
            <Trash />
          </ListGroup.Item>
          <ListGroup.Item as={NavLink} to="3">
            Cras justo odio Task 3 <ArrowUp />
            <Trash />
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col>
        <Outlet />
      </Col>
    </Row>
  );
};

export default TasksPage;
