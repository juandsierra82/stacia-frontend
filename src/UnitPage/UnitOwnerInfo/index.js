import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Person } from 'react-bootstrap-icons';
import { AddUnitOwnersModal } from '../../modals';

const UnitOwnerInfo = () => {
  const [showEditOwnersModal, setShowEditOwnersModal] = useState(false);
  const handleClose = (submitted) => setShowEditOwnersModal(false);
  const handleShow = () => setShowEditOwnersModal(true);
  return (
    <>
      <p>
        <div>Unit Size as building percent: 6%</div>
        <div>Owner Name(s): Juan Sierra</div>
        <div>Resident Name(s): Juan Sierra</div>
      </p>
      <div>
        <Button variant="outline-primary" size="sm" onClick={handleShow}>
          <Person style={{ paddingBottom: '2px', marginRight: '5px' }} />
          <span>Edit Owner/Resident Info</span>
        </Button>
      </div>
      <AddUnitOwnersModal
        show={showEditOwnersModal}
        handleClose={handleClose}
      />
    </>
  );
};

export default UnitOwnerInfo;
