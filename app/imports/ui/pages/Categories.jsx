import React from 'react';
import { Container } from 'react-bootstrap';

const Categories = () => (
  <Container className="align-middle text-center">
    <h1>All Items by Category</h1>
    <br />
    <select name="selectList" id="selectList">
      <option value="option 1">Option 1</option>
      <option value="option 2">Option 2</option>
    </select>

  </Container>
);
export default Categories;
