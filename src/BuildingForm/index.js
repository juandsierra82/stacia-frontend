import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Button, Form, InputGroup } from 'react-bootstrap';
import { GET_BUILDINGS } from '../HomePage/queries';
import { UPSERT_BUILDING } from './queries';
import { useQuery, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { Trash, PlusCircle, BoxArrowRight } from 'react-bootstrap-icons';
import { buildQueryVariables } from './utils';

const BuildingForm = () => {
  const navigate = useNavigate();
  const [building, setBuilding] = useState({});
  const [units, setUnits] = useState([]);
  const [currentUnit, setCurrentUnit] = useState(null);
  const [validated, setValidated] = useState(false);
  const { loading, error, data } = useQuery(GET_BUILDINGS);
  const [upsertBuilding] = useMutation(UPSERT_BUILDING);
  const [isDirty, setIsDirty] = useState(false);
  useEffect(() => {
    if (data && data.buildings && data.buildings.length === 0 && validated) {
      setIsDirty(true);
    }
  }, [data, validated]);
  useEffect(() => {
    if (data && data.buildings && data.buildings.length) {
      const building = data.buildings[0];
      setBuilding(building);
      setUnits(building.units || []);
    }
  }, [data]);
  useEffect(() => {
    if (data && data.buildings && data.buildings.length) {
      let buildingData = data.buildings[0];
      const oldBuilding = JSON.stringify(data.buildings[0]);
      const newBuilding = JSON.stringify(building);
      const newUnits = JSON.stringify(
        units.filter(({ deleted }) => !deleted).map(({ address }) => address)
      );
      const oldUnits = JSON.stringify(
        buildingData.units.map(({ address }) => address)
      );
      const buildingChanged = oldBuilding !== newBuilding;
      const unitsChanged = oldUnits !== newUnits;
      setIsDirty(buildingChanged || unitsChanged);
    }
  }, [data, building, units]);
  if (loading) return null;
  if (error) return `Error! ${error}`;
  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    if (!isDirty && building.id) return;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    const variables = buildQueryVariables(building, units);
    await upsertBuilding({
      variables,
      update: (cache, { data: { upsertBuilding } }) => {
        const data = cache.readQuery({ query: GET_BUILDINGS });
        data.buildings[0] = upsertBuilding;
        cache.writeQuery({ query: GET_BUILDINGS }, data);
      },
    });
  };
  return (
    <Card className="form-card">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Form.Group className="mb-3">
            <Form.Control
              required
              key="buildingName"
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
            key="buildingAddress1"
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
            key="buildingAddress2"
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
                  key="buildingCity"
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
                  key="buildingState"
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
                  key="buildingZip"
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
            key="formDescription"
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
                  disabled={
                    currentUnit
                      ? !!units.find(
                          ({ address, deleted }) =>
                            address === currentUnit.address && !deleted
                        )
                      : true
                  }
                  variant="outline-secondary"
                  title="Click to add unit to building"
                  onClick={async (e) => {
                    if (currentUnit && currentUnit.address)
                      await setUnits([...units, currentUnit]);
                    await setCurrentUnit('');
                  }}
                >
                  <PlusCircle />
                </Button>
                <Form.Control
                  key="addUnit"
                  placeholder="Add Unit to building"
                  value={currentUnit ? currentUnit.address : ''}
                  onChange={async (e) => {
                    const {
                      target: { value: address },
                    } = e;
                    if (address) {
                      await setCurrentUnit({ address });
                    } else {
                      await setCurrentUnit('');
                    }
                  }}
                />
                {units
                  .filter(({ deleted }, idx) => !deleted)
                  .map(({ id, address, deleted }, idx) => {
                    return (
                      <InputGroup key={`input-group-${address}-${deleted}`}>
                        <Button
                          key={`delete-button-${address}`}
                          disabled={deleted}
                          variant="outline-secondary"
                          onClick={() => {
                            const newUnits = units.map((u) => {
                              if (u.address === address) {
                                u.deleted = true;
                              }
                              return u;
                            });
                            setUnits([...newUnits]);
                          }}
                        >
                          <Trash />
                        </Button>
                        <Form.Control
                          key={`delete-input-${address}`}
                          disabled
                          placeholder="Remove Unit"
                          value={address}
                          readOnly
                        />
                        {id && (
                          <Button
                            key={`link-to-unit-${id}`}
                            variant="outline-primary"
                            title={`Go to unit ${address}`}
                            onClick={() => {
                              navigate(`../../units/${address}`, {
                                relative: 'path',
                              });
                            }}
                          >
                            <BoxArrowRight />
                          </Button>
                        )}
                      </InputGroup>
                    );
                  })}
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
        <Button
          className="submit-form"
          type="submit"
          disabled={!isDirty && building.id}
        >
          Submit
        </Button>
      </Form>
    </Card>
  );
};
export default BuildingForm;
