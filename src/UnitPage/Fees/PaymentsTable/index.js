import React from 'react';
import { Table } from 'react-bootstrap';

const PaymentsTable = () => {
  return (
    <Table striped bordered hover responsive size="sm">
      <thead>
        <strong>Payments</strong>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Type</th>
          <th>Payer</th>
          <th>Cleared</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01/01/2024</td>
          <td>$1000</td>
          <td>ACH</td>
          <td>Juan</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>02/01/2024</td>
          <td>$10</td>
          <td>Check</td>
          <td>Juan</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>03/01/2024</td>
          <td>$1000</td>
          <td>ACH</td>
          <td>Juan</td>
          <td>No</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default PaymentsTable;
