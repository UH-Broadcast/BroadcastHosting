import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import { ItemsDatabase } from '../../api/Items/Item';
import UserItems from '../components/UserItems';

/* Renders a table containing all of the Items documents. Use <ItemData> to render each row. */
const UserListings = () => {
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
    <Container id="list-Item-page" className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h2 className="m-5" style={{ fontSize: '40px', fontFamily: 'Academy Engraved LET', color: 'white' }}>User Items</h2>
          </Col>
          <Row xs={1} md={2} lg={3} className="g-4">
            {items.map((item) => (<Col key={item._id}><UserItems item={item} collection={ItemsDatabase.collection} /> </Col>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default UserListings;
