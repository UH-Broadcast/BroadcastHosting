import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container, Image } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Item = ({ item }) => (
  <Card>
    <Card.Header>
      <Container>
        <Image src={item.image} width={75} />
      </Container>
      <Card.Title>Name: {item.name}</Card.Title>
      <Card.Subtitle>Price: {item.price}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>Description: {item.description}</Card.Text>
    </Card.Body>
    <Card.Footer>Owner Contact: {item.ownerInformation}</Card.Footer>
  </Card>
);

// Require a document to be passed to this component.
Item.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    description: PropTypes.string,
    ownerInformation: PropTypes.string,
    // _id: PropTypes.string,
  }).isRequired,
};

export default Item;
