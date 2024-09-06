import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { useParams } from 'react-router-dom';
const TaskCard = () => {
  const { taskId, projectId } = useParams();

  return (
    <Card>
      <Card.Header>
        Project {projectId} Task {taskId}
      </Card.Header>
      <Card.Body>
        <Card.Title>
          Finish 50 Year <Badge bg="secondary">Status: New</Badge>
        </Card.Title>
        <Card.Text>This is the description of what needs to happen</Card.Text>
        <Button variant="danger" disabled>
          Undo
        </Button>
        <Button variant="primary">Start</Button>
        <Button variant="success">Complete</Button>
      </Card.Body>
    </Card>
  );
};

export default TaskCard;
