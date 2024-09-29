import React from 'react';
import { Tab, ListGroup, Col, Row, Card } from 'react-bootstrap';
import { Link, Outlet, useParams } from 'react-router-dom';

const BalanceBreakDown = () => {
  const { feeId } = useParams();
  return (
    <Card className="border-0">
      <Card.Subtitle>Current Balance: $2000</Card.Subtitle>
      <Card.Body>
        <Tab.Container id="balance-breakdown">
          <Tab.Content>
            <p>Fee Breakdown 2024</p>
          </Tab.Content>
          <Row>
            <Col sm={4}>
              <ListGroup>
                <ListGroup.Item
                  as={Link}
                  action
                  to={`./fees/1`}
                  active={'1' === feeId}
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">June 2024 Maintainence</div>
                    <Row>
                      <Col>Amount Owed: $0</Col> <Col>AutoPay: On</Col>
                    </Row>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item
                  as={Link}
                  action
                  to={`./fees/2`}
                  active={'2' === feeId}
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">July 2024 Maintainence</div>
                    <Row>
                      <Col>Owed: $500</Col> <Col>AutoPay: On</Col>
                    </Row>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item
                  as={Link}
                  action
                  to={`./fees/3`}
                  active={'3' === feeId}
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">August 2024 Maintainence</div>
                    <Row>
                      <Col>Owed: $50000</Col> <Col>AutoPay: Off</Col>
                    </Row>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Outlet />
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Card.Body>
    </Card>
  );
};
export default BalanceBreakDown;
