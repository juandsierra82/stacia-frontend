import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import OwnerOrResidentFormRow from './OwnerOrResidentFormRow';

const AddUnitOwnersModal = ({ show, handleClose }) => {
  const owners = [
    {
      id: 1,
      name: 'Juan Sierra',
      email: 'baolwen@gmail.com',
      phone: '7708767969',
    },
    {
      id: 2,
      name: 'Gloria Sierra',
      email: 'gduilliams1@gmail.com',
      phone: '7708767969',
    },
  ];
  const residents = [
    {
      id: 1,
      name: 'Patrick Whiteside',
      email: 'pwhiteside@gmail.com',
      phone: '7708767969',
    },
    {
      id: 2,
      name: 'Preston Allen',
      email: 'prestonallen88@gmail.com',
      phone: '7708767969',
    },
  ];
  const [displayedOwners, setDisplayedOwners] = useState([...owners]);
  console.log('the displayed', displayedOwners);
  const [displayedResidents, setDisplayedResidents] = useState([...residents]);

  const alterResidentsOrOwners = ({ deleted, added, itemId, listType }) => {
    let changedList =
      listType === 'Owner' ? [...displayedOwners] : [...displayedResidents];
    const setList =
      listType === 'Owner' ? setDisplayedOwners : setDisplayedResidents;
    if (deleted) {
      changedList = changedList.filter(
        ({ id, type }) => id !== itemId && type !== listType
      );
    }
    if (added) {
      changedList.unshift({
        name: '',
        email: '',
        phone: '',
        type: listType,
        id: `${new Date().toISOString()}-temporary`,
      });
    }
    console.log('the changedlist', changedList);
    return setList(() => [...changedList]);
  };

  return (
    <Modal show={show} onHide={handleClose} size={'lg'}>
      <Modal.Header closeButton>
        <Modal.Title>Owner/Resident Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {displayedOwners.map(
            ({ name, email, phone, type: formType, id }, idx) => {
              return (
                <OwnerOrResidentFormRow
                  id={id}
                  name={name}
                  email={email}
                  phone={phone}
                  formType={'Owner'}
                  alterList={alterResidentsOrOwners}
                  idx={idx}
                />
              );
            }
          )}
          {displayedResidents.map(({ name, email, phone, id }, idx) => {
            return (
              <OwnerOrResidentFormRow
                id={id}
                name={name}
                email={email}
                phone={phone}
                formType={'Resident'}
                alterList={alterResidentsOrOwners}
                idx={idx}
              />
            );
          })}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default AddUnitOwnersModal;
