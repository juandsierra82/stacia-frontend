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
                  July 2024 Maintainence Fee
                </ListGroup.Item>
                <ListGroup.Item
                  as={Link}
                  action
                  to={`./fees/2`}
                  active={'2' === feeId}
                >
                  August 2024 Maintainence Fee
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
