import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container, Image } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const ItemAdmin = ({ item }) => (
  <Card className="h-100">
    <Card.Header>
      <Container>
        <Image src={item.image} width={75} />
      </Container>
      <Card.Title>Name: {item.name}</Card.Title>
      <Card.Subtitle>Price: {item.price}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>Description: {item.description}</Card.Text>
      <Card.Text>Owner Contact: {item.ownerInformation}</Card.Text>
    </Card.Body>
    <Card.Footer>Owner ID: {item.owner}</Card.Footer>
  </Card>
);

// Require a document to be passed to this component.
ItemAdmin.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    description: PropTypes.string,
    ownerInformation: PropTypes.string,
    owner: PropTypes.string,
    // _id: PropTypes.string,
  }).isRequired,
};

export default ItemAdmin;
