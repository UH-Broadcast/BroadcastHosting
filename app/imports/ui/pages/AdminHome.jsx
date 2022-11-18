import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
/* admin home page should have a received reports list for complaints. */
const AdminHome = () => (
  <Container id="adminhome" fluid className="align-middle text-center">
    <h1 id="admin-home-title">Admin Home</h1>
    <br />
    <br />
    <Table striped bordered hover>
      <thead>
        <tr>
          <th colSpan={3}><strong>User Comments/Suggestions/Complaints</strong></th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Comment/Suggestion/Complaint</th>
          <th>Mark as Resolved</th>
        </tr>
        <tr>
          <td>Name 1</td>
          <td>Name 2 is being mean and overpricing things</td>
          <td>Not resolved</td>
        </tr>
      </thead>
      <tbody />
    </Table>
    <br />
    <div>
      <h3 id="admin-search-title">Search for User to Ban/Unban</h3>
      <br />
      <input placeholder="Type name or email" />
      <Button id="adminbutton">Search</Button>
    </div>
  </Container>
);

export default AdminHome;
