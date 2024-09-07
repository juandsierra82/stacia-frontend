import React from 'react';
import {
  Badge,
  Button,
  Row,
  Form,
  ListGroup,
  Col,
  Card,
} from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import OwnerForm from './OwnerForm';

const Owners = () => {
  return (
    <Card>
      <Row>
        <OwnerForm />
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action as={Link} to={'/owners/1'}>
              <Row>
                <Col>
                  <strong>Juan Sierra</strong>
                </Col>
                <Col>
                  <Badge bg="primary" pill>
                    Unit 304
                  </Badge>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to={'/owners/2'}>
              <Row>
                <Col>
                  <strong>Jeremy Sapienza</strong>
                </Col>
                <Col>
                  {' '}
                  <Badge bg="primary" pill>
                    Unit 203
                  </Badge>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to={'/owners/2'}>
              <Row>
                <Col>
                  <strong>Jake Mayar</strong>
                </Col>
                <Col>
                  {' '}
                  <Badge bg="primary" pill>
                    Unit 306
                  </Badge>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Outlet />
        </Col>
      </Row>
    </Card>
  );
};

export default Owners;
