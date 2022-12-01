import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Container, Row } from 'react-bootstrap';
import { ItemsDatabase } from '../../api/Items/Item';
import AllItems from '../components/AllItems';
import LoadingSpinner from '../components/LoadingSpinner';

const Categories = () => {
  const { ready, items } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Items documents.
    const subscription = Meteor.subscribe(ItemsDatabase.userPublicationNameAll);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Items documents
    const ItemData = ItemsDatabase.collection.find({ }).fetch();

    return {
      items: ItemData,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container id="categories-page" className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h1>All Items by Category</h1>
            <br />
            <select name="selectList" id="selectList">
              <option value="Everything">Everything</option>
              <option value="Clothing1">Clothing</option>
              <option value="Purses1">Purses</option>
              <option value="Shoes1">Shoes</option>
              <option value="Instruments1">Instruments</option>
              <option value="Jewelry1">Jewelry</option>
              <option value="Furniture1">Furniture</option>
              <option value="Books1">Books</option>
              <option value="Toys1">Toys</option>
              <option value="Appliances1">Appliances</option>
              <option value="Other1">Other</option>
            </select>
          </Col>
          <br />
          <Row xs={1} md={2} lg={3} className="g-4">
            {items.map((item) => (<Col key={item._id}><AllItems item={item} collection={ItemsDatabase.collection} /> </Col>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default Categories;
