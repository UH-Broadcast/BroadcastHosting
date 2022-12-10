import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const AllItems = ({ item }) => (
  <Card className="h-100">
    <Card.Header>
      <Container>
        <Image src={item.image} width={75} height={75} />
      </Container>
      <Card.Title>Name: {item.name}</Card.Title>
      <Card.Subtitle>Price: ${item.price}</Card.Subtitle>
      <Card.Subtitle>Offer: ${item.offer}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>
        Description: {item.description}
        <hr />
        Category: {item.category}
        <hr />
        Owner Contact: {item.ownerInformation}
      </Card.Text>
      <Link id="make-offer-list" to={`/makeoffer/${item._id}`}>Make Offer</Link>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
AllItems.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    offer: PropTypes.number,
    image: PropTypes.string,
    description: PropTypes.string,
    ownerInformation: PropTypes.string,
    owner: PropTypes.string,
    category: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
};

export default AllItems;
