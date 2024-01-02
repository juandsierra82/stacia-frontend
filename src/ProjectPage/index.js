import { Link, Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function ProjectPage() {
  return (
    <>
      <Nav variant="underline" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link as={Link} to="/project/1/tasks" eventKey="tasks-1">
            Tasks
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/project/1/vendors" eventKey="vendors-1">
            Vendors
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/project/1/budget" eventKey="budget-1">
            Budget
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Outlet />
    </>
  );
}

export default ProjectPage;
