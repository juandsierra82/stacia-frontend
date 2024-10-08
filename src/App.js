import React from 'react';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import { Outlet, Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { Pencil } from 'react-bootstrap-icons';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>
            Welcome to the Royal Palm Villas Portal{' '}
            <Button variant="outline-primary" as={Link} to={'/building/edit'}>
              Edit Building Details{' '}
              <Pencil style={{ paddingBottom: '3px', marginLeft: '5px' }} />
            </Button>
          </h1>
          <Navigation />
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
