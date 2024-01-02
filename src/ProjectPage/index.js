import { NavLink, Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function ProjectPage() {
  return (
    <Container>
      <Row>
        <Nav variant="underline" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link as={NavLink} to="tasks" eventKey="tasks-1">
              Tasks
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="vendors" eventKey="vendors-1">
              Vendors
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="budget" eventKey="budget-1">
              Budget
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>
      <Outlet />
    </Container>
  );
}

export default ProjectPage;
