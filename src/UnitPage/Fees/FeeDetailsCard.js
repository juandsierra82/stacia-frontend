import React from 'react';
import { useParams } from 'react-router-dom';
const FeeDetails = () => {
  const { feeId } = useParams();
  return <div>THIS IS THE FEE {feeId}</div>;
};

export default FeeDetails;
