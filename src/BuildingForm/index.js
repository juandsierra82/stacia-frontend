import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Button, Form, InputGroup } from 'react-bootstrap';
import { GET_BUILDINGS } from '../HomePage/queries';
import { UPSERT_BUILDING } from './queries';
import { useQuery, useMutation } from '@apollo/client';
import { Trash, PlusCircle } from 'react-bootstrap-icons';
import { buildQueryVariables } from './utils';

const BuildingForm = () => {
  const [building, setBuilding] = useState({});
  const [units, setUnits] = useState([]);
  const [currentUnit, setCurrentUnit] = useState(null);
  const [validated, setValidated] = useState(false);
  const { loading, error, data } = useQuery(GET_BUILDINGS);
  const [upsertBuilding] = useMutation(UPSERT_BUILDING);
  useEffect(() => {
    if (data && data.buildings && data.buildings.length) {
      const building = data.buildings[0];
      setBuilding(building);
      setUnits(building.units || []);
    }
  }, [data]);
  if (loading) return null;
  if (error) return `Error! ${error}`;
  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    const variables = buildQueryVariables(building, units);
    const updatedBuilding = await upsertBuilding({
      variables,
    });
    await setBuilding(updatedBuilding.data);
  };
  return (
    <Card className="form-card">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Form.Group className="mb-3">
            <Form.Control
              required
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
            required
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
                  required
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
                  required
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
                  required
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
        <hr />
        <Row>
          <Col sm={4}>
            <Form.Group className="rowAdd">
              <Form.Label>Building Units</Form.Label>
              <InputGroup>
                <Button
                  variant="outline-secondary"
                  title="Click to add unit to building"
                  onClick={async (e) => {
                    if (currentUnit && currentUnit.address)
                      await setUnits([...units, currentUnit]);
                    await setCurrentUnit(null);
                  }}
                >
                  <PlusCircle />
                </Button>
                <Form.Control
                  id="addUnit"
                  placeholder="Add Unit to building"
                  value={currentUnit ? currentUnit.address : ''}
                  onChange={async (e) => {
                    const {
                      target: { value: address },
                    } = e;
                    if (address) await setCurrentUnit({ address });
                  }}
                />
                {units
                  .filter(({ deleted }) => !deleted)
                  .map(({ address, deleted }, idx) => {
                    return (
                      <InputGroup id={`input-group-${address}-${deleted}`}>
                        <Button
                          id={`delete-${address}`}
                          disabled={deleted}
                          variant="outline-secondary"
                          onClick={async (e) => {
                            units[idx].deleted = true;
                            setUnits([...units]);
                          }}
                        >
                          <Trash />
                        </Button>
                        <Form.Control
                          id={`input-${address}`}
                          disabled
                          placeholder="Remove Unit"
                          value={address}
                          readOnly
                        />
                      </InputGroup>
                    );
                  })}
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
        <Button className="submit-form" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
};
export default BuildingForm;
