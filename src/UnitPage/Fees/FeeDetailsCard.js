import React from 'react';
import { useParams } from 'react-router-dom';
import PaymentsTable from './PaymentsTable';
import { Row, Col, Button } from 'react-bootstrap';
import { Cash } from 'react-bootstrap-icons';

const FeeDetails = () => {
  const { feeId } = useParams();
  return (
    <Row>
      <Col>
        <div>Original Amount: $3000</div>
        <div>Total Paid: $3000</div>
        <div>Fee Type: Maintainence</div>
        <div>Due On: 01/02/24</div>
      </Col>
      <Col>
        <p>
          <div>Total Owed: $0</div>
        </p>
        <div>
          <Button variant="outline-success" size="sm">
            <Cash style={{ paddingBottom: '1px', marginRight: '5px' }} />
            <span>Submit Payment</span>
          </Button>
        </div>
      </Col>
      <hr />
      <PaymentsTable />
    </Row>
  );
};

export default FeeDetails;
