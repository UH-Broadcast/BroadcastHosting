import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { ItemsDatabase } from '../../api/Items/Item';
import Items from '../components/Items';

/* Renders a table containing all of the Items documents. Use <ItemData> to render each row. */
const ListItems = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, items } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Items documents.
    const subscription = Meteor.subscribe(ItemsDatabase.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Items documents
    const ItemData = ItemsDatabase.collection.find({}).fetch();
    return {
      items: ItemData,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h2>List Items</h2>
            <Button id="listitembutton"><Link to="/categories"> Sort by Category </Link>
            </Button>
          </Col>
          <Row xs={1} md={2} lg={3} className="g-4">
            {items.map((item) => (<Col key={item._id}><Items item={item} collection={ItemsDatabase.collection} /> </Col>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListItems;
