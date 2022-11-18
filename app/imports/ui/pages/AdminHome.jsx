import React from 'react';
import { Container, Table } from 'react-bootstrap';
/* admin home page should have a received reports list for complaints. */
const AdminHome = () => (
  <Container id="adminhome" fluid className="py-3 align-middle text-center">
    <h1>Admin Home</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Comment/Suggestion/Complaint</th>
          <th>Condition</th>
        </tr>
      </thead>
      <tbody />
    </Table>
  </Container>
);

export default AdminHome;
