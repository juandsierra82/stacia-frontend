import React from 'react';
import {
  Row,
  Col,
  FloatingLabel,
  Form,
  InputGroup,
  Button,
} from 'react-bootstrap';
import { Trash, PlusCircle } from 'react-bootstrap-icons';

const OwnerOrResidentFormRow = ({
  formType,
  id,
  name,
  email,
  phone,
  idx,
  alterList = () => {},
}) => {
  return (
    <Row key={`id-${id}-${name}-${email}-${phone}-${formType}`}>
      {idx === 0 && <p>{`${formType}s:`}</p>}
      <Col sm={4}>
        <FloatingLabel
          label={`${formType} Name`}
          controlId={`${formType}NameInput`}
          className="mb-3"
        >
          <Form.Control placeholder={`${formType} Name`} defaultValue={name} />
        </FloatingLabel>
      </Col>
      <Col sm={3}>
        <FloatingLabel
          label={`${formType} Email`}
          controlId={`${formType}EmailInput`}
          className="mb-3"
        >
          <Form.Control
            placeholder={`${formType} Email`}
            type="email"
            defaultValue={email}
          />
        </FloatingLabel>
      </Col>
      <Col sm={3}>
        <FloatingLabel
          label={`${formType} Phone`}
          controlId={`${formType}PhoneInput`}
          className="mb-3"
        >
          <Form.Control
            placeholder={`${formType} Phone`}
            type="phone"
            defaultValue={phone}
          />
        </FloatingLabel>
      </Col>
      <Col sm={2}>
        <InputGroup className="mb-3">
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() =>
              alterList({
                itemId: id,
                deleted: true,
                listType: formType,
              })
            }
          >
            <Trash style={{ paddingBottom: '1px', marginRight: '5px' }} />
          </Button>
          {idx === 0 && (
            <Button
              variant="outline-info"
              size="sm"
              onClick={() =>
                alterList({
                  added: true,
                  listType: formType,
                })
              }
            >
              <PlusCircle
                style={{ paddingBottom: '1px', marginRight: '5px' }}
              />
            </Button>
          )}
        </InputGroup>
      </Col>
    </Row>
  );
};

export default OwnerOrResidentFormRow;
