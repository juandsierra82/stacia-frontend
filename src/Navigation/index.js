import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
const Navigation = () => {
  return (
    <>
      <Nav variant="tabs" defaultActiveKey="#first">
        <Nav.Item>
          <Nav.Link as={Link} to="/" active={true}>
            Home Page
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/units/304">
            My Unit
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/owners">
            Owners
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/residents">
            Residents
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/projects">
            Projects
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/budget">
            Budget
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/board">
            Board
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Navigation;
