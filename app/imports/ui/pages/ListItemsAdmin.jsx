import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import { ItemsDatabase } from '../../api/Items/Item';
import ItemsAdmin from '../components/ItemsAdmin';

/* Renders a table containing all of the Items documents. Use <ItemData> to render each row. */
const ListItemsAdmin = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, items } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Items documents.
    const subscription = Meteor.subscribe(ItemsDatabase.adminPublicationName);
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
          <Col className="text-center m-5">
            <h2 style={{ fontSize: '40px', fontFamily: 'Academy Engraved LET', color: 'white' }}>List Items</h2>
          </Col>
          <Row xs={1} md={2} lg={3} className="g-4">
            {items.map((item) => (<Col key={item._id}><ItemsAdmin item={item} collection={ItemsDatabase.collection} /> </Col>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListItemsAdmin;
