import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProjectDetails from './ProjectDetails';
import { PROJECTS } from './mocks';

function Project() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{PROJECTS[0].name}</Card.Title>
        <Card.Text>
          {PROJECTS[0].description}
          <ProjectDetails />
        </Card.Text>
        <Button variant="primary">Edit Project</Button>
      </Card.Body>
    </Card>
  );
}

export default Project;
