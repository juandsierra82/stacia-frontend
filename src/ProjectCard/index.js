import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProjectCardDetails from './ProjectCardDetails';
import { PROJECTS } from './mocks';
import { Link } from 'react-router-dom';

function Project() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{PROJECTS[0].name}</Card.Title>
        <Card.Text>
          {PROJECTS[0].description}
          <ProjectCardDetails />
        </Card.Text>
        <Button href="/project/foo" variant="primary">
          Edit Project
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Project;
