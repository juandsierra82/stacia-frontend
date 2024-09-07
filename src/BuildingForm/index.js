import React, { useState } from 'react';
import { Card, Col, Row, Button, Form } from 'react-bootstrap';

const BuildingForm = () => {
  const [building, setBuilding] = useState({});
  return (
    <Card className="form-card">
      <Form>
        <Row>
          <Form.Group className="mb-3">
            <Form.Control
              id="buildingName"
              placeholder="Building Name"
              value={building.name}
            />
          </Form.Group>
        </Row>
        <Form.Group className="multi-line-form">
          <Form.Control
            id="buildingAddress1"
            placeholder="Building Address Line 1"
            value={building.address1}
          />
          <Form.Control
            id="buildingAddress2"
            placeholder="Building Address Line 2"
            value={building.address2}
          />
          <Form.Group className="inline-form">
            <Row>
              <Col>
                <Form.Control
                  id="buildingCity"
                  placeholder="city"
                  value={building.city}
                />
              </Col>
              <Col>
                <Form.Control
                  id="buildingState"
                  placeholder="state"
                  value={building.state}
                />
              </Col>
              <Col>
                <Form.Control
                  id="buildingZip"
                  placeholder="zipCode"
                  value={building.postalCode}
                />
              </Col>
            </Row>
          </Form.Group>
        </Form.Group>
        <Form.Group className="form-textarea">
          <Form.Control
            id="formDescription"
            placeholder="Short Building Description"
            as="textarea"
          ></Form.Control>
        </Form.Group>
        <Button className="submit-form" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
};
export default BuildingForm;
