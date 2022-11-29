import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Item = ({ item, collection }) => {
  const removeItem = (docID) => {
    console.log(`The item to remove is ${docID}`);
    collection.remove(docID);
  };

  return (
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
          owner Contact: {item.ownerInformation}
        </Card.Text>
        <Link id="make-offer-list" to={`/makeoffer/${item._id}`}>Make Offer</Link>
        <Button variant="danger" onClick={() => removeItem(item._id)}> Delete this item</Button>
      </Card.Body>
    </Card>
  );
};
// Require a document to be passed to this component.
Item.propTypes = {
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
  collection: PropTypes.object.isRequired,
};

export default Item;
