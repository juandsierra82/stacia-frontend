import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { BUDGET, CORRESPONDENCE, PROJECT_TASKS } from '../mocks/index';

function ProjectDetails() {
  return (
    <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold"> Next Task: {PROJECT_TASKS[0].name} </div>
          <ul>
            <li>Last Touched by {PROJECT_TASKS[0].touchedBy}</li>
            <li>Status: {PROJECT_TASKS[0].status}</li>
          </ul>
        </div>
        <Badge bg="primary" pill>
          Due On {PROJECT_TASKS[0].dueDate}
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            Latest Communication: {CORRESPONDENCE[0].subject}
          </div>
          <ul>
            <li>By {CORRESPONDENCE[0].author}</li>
            <li>Type: {CORRESPONDENCE[0].type}</li>
          </ul>
        </div>
        <Badge bg="primary" pill>
          Sent On: {CORRESPONDENCE[0].date}
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Budget: {BUDGET.amountBudgeted}</div>
          <ul>
            <li>Last Invoice Paid For: {BUDGET.lastInvoicePaidTo}</li>
            <li>Last Invoice Amount: {BUDGET.amountBudgeted}</li>
            <li>Last Invoice Date: {BUDGET.lastInvoicePaidOn}</li>
          </ul>
        </div>
        <Badge bg="primary" pill>
          Total Expenditure: {BUDGET.totalSpent}
        </Badge>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ProjectDetails;
