import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import BalanceBreakDown from './Fees/BalanceBreakDown';

const UnitPage = () => {
  const { unitAddress } = useParams();
  return (
    <Card className="form-card">
      <Card.Title>Unit {unitAddress}</Card.Title>
      <Card.Text>Amount of Building: 6%</Card.Text>
      <hr />
      <BalanceBreakDown />
    </Card>
  );
};

export default UnitPage;
