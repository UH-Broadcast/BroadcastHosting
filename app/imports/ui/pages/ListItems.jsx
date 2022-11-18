import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Stuffs } from '../../api/stuff/Stuff';
import LoadingSpinner from '../components/LoadingSpinner';
import Items from '../components/Items';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const ListItems = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Stuffs.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const stuffItems = Stuffs.collection.find({}).fetch();
    return {
      stuffs: stuffItems,
      ready: rdy,
    };
  }, []);
  const items = [{
    name: 'watch', price: '250',
    image: 'https://www.zales.com/productimages/processed/V-20348879_0_800.jpg?pristine=true',
    description: 'G-shock',
    ownerInformation: 'wei',
  },
  {
    name: 'watch', price: '250',
    image: 'https://www.zales.com/productimages/processed/V-20348879_0_800.jpg?pristine=true',
    description: 'G-shock',
    ownerInformation: 'hubert',
  },
  {
    name: 'watch', price: '250',
    image: 'https://www.zales.com/productimages/processed/V-20348879_0_800.jpg?pristine=true',
    description: 'G-shock',
    ownerInformation: 'sydney',
  },
  ];
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h2>List Items</h2>
          </Col>
          <Row xs={1} md={2} lg={3} className="g-4">
            {items.map((item, index) => (<Col key={index}><Items item={item} /> </Col>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListItems;
