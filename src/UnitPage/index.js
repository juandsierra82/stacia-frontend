import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { Person, Pencil } from 'react-bootstrap-icons';

import BalanceBreakDown from './Fees/BalanceBreakDown';

const UnitPage = () => {
  const { unitAddress } = useParams();
  return (
    <Card className="form-card">
      <Card.Title>Unit {unitAddress}</Card.Title>
      <Card.Body>
        <Card.Text>
          <Row>
            <Col>
              <p>
                <div>Unit Size as building percent: 6%</div>
                <div>Owner Name(s): Juan Sierra</div>
                <div>Resident Name(s): Juan Sierra</div>
              </p>
              <div>
                <Button variant="outline-primary" size="sm">
                  <Person
                    style={{ paddingBottom: '2px', marginRight: '5px' }}
                  />
                  <span>Edit Owner/Resident Info</span>
                </Button>
              </div>
            </Col>
            <Col>
              <p>
                <div>Preferred Payment Method: Juan's Bank Account</div>
                <div>AutoPay: On</div>
                <div>Date of Last Payment: 07/07/2024</div>
              </p>
              <div>
                <Button variant="outline-warning" size="sm">
                  <Pencil
                    style={{ paddingBottom: '1px', marginRight: '5px' }}
                  />
                  <span>Edit Payment Method</span>
                </Button>
              </div>
            </Col>
          </Row>
        </Card.Text>
        <hr />
        <BalanceBreakDown />
      </Card.Body>
    </Card>
  );
};

export default UnitPage;
