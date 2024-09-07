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
              onChange={(e) => {
                const {
                  target: { value: name },
                } = e;
                setBuilding((oldState) => ({ ...oldState, name }));
              }}
            />
          </Form.Group>
        </Row>
        <Form.Group className="multi-line-form">
          <Form.Control
            id="buildingAddress1"
            placeholder="Building Address Line 1"
            value={building.address1}
            onChange={(e) => {
              const {
                target: { value: address1 },
              } = e;
              setBuilding((oldState) => ({ ...oldState, address1 }));
            }}
          />
          <Form.Control
            id="buildingAddress2"
            placeholder="Building Address Line 2"
            value={building.address2}
            onChange={(e) => {
              const {
                target: { value: address2 },
              } = e;
              setBuilding((oldState) => ({ ...oldState, address2 }));
            }}
          />
          <Form.Group className="inline-form">
            <Row>
              <Col>
                <Form.Control
                  id="buildingCity"
                  placeholder="city"
                  value={building.city}
                  onChange={(e) => {
                    const {
                      target: { value: city },
                    } = e;
                    setBuilding((oldState) => ({ ...oldState, city }));
                  }}
                />
              </Col>
              <Col>
                <Form.Control
                  id="buildingState"
                  placeholder="state"
                  value={building.municipality}
                  onChange={(e) => {
                    const {
                      target: { value: municipality },
                    } = e;
                    setBuilding((oldState) => ({ ...oldState, municipality }));
                  }}
                />
              </Col>
              <Col>
                <Form.Control
                  id="buildingZip"
                  placeholder="zipCode"
                  value={building.postalCode}
                  onChange={(e) => {
                    const {
                      target: { value: postalCode },
                    } = e;
                    setBuilding((oldState) => ({ ...oldState, postalCode }));
                  }}
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
            value={building.description}
            onChange={(e) => {
              const {
                target: { value: description },
              } = e;
              setBuilding((oldState) => ({ ...oldState, description }));
            }}
          />
        </Form.Group>
        <Button className="submit-form" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
};
export default BuildingForm;