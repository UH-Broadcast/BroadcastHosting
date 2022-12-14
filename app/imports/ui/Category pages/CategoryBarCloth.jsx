import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Col, Nav, Navbar, Row, Container } from 'react-bootstrap';
import { ItemsDatabase } from '../../api/Items/Item';
import LoadingSpinner from '../components/LoadingSpinner';
import AllItems from '../components/AllItems';

const CategoryBarCloth = () => {
  const { ready, items } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Items documents.
    const subscription = Meteor.subscribe(ItemsDatabase.userPublicationNameAll);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Items documents
    const ItemData = ItemsDatabase.collection.find({ category: 'Clothing' }).fetch();

    return {
      items: ItemData,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Row>
      <Col>
        <Navbar bg="light" expand="lg" id="catBar">
          <Nav className="me-auto justify-content-start">
            <Nav.Link id="every-item-categories-navBar" as={NavLink} to="/ItemListing" key="itemBar" style={{ color: 'black' }}>All Items</Nav.Link>
            <Nav.Link id="every-item-categories-navBarShoes" as={NavLink} to="/CategoryBarShoes" key="itemBarShoes" style={{ color: 'black' }}>Shoes</Nav.Link>
            <Nav.Link id="every-item-categories-navBarCloths" as={NavLink} to="/CategoryBarCloths" key="itemBarCloths" style={{ color: 'black' }}>Clothing</Nav.Link>
            <Nav.Link id="every-item-categories-navBarIns" as={NavLink} to="/CategoryBarIns" key="itemBarIns" style={{ color: 'black' }}>Instruments</Nav.Link>
            <Nav.Link id="every-item-categories-navBarBooks" as={NavLink} to="/CategoryBarBooks" key="itemBarBooks" style={{ color: 'black' }}>Books</Nav.Link>
            <Nav.Link id="every-item-categories-navBarJewl" as={NavLink} to="/CategoryBarJewl" key="itemBarJewl" style={{ color: 'black' }}>Jewelry</Nav.Link>
            <Nav.Link id="every-item-categories-navBarPur" as={NavLink} to="/CategoryBarPur" key="itemBarPur" style={{ color: 'black' }}>Purses</Nav.Link>
            <Nav.Link id="every-item-categories-navBarFur" as={NavLink} to="/CategoryBarFur" key="itemBarFur" style={{ color: 'black' }}>Furnitures</Nav.Link>
            <Nav.Link id="every-item-categories-navBarToys" as={NavLink} to="/CategoryBarToys" key="itemBarToy" style={{ color: 'black' }}>Toys</Nav.Link>
            <Nav.Link id="every-item-categories-navBarApp" as={NavLink} to="/CategoryBarApp" key="itemBarApp" style={{ color: 'black' }}>Applicances</Nav.Link>
            <Nav.Link id="every-item-categories-navBarOther" as={NavLink} to="/CategoryBarOther" key="itemBarOther" style={{ color: 'black' }}>Other</Nav.Link>
          </Nav>
        </Navbar>
        <Container>
          <Row xs={1} md={2} lg={3} className="g-4">
            {items.map((item) => (
              <Col key={item._id}><AllItems item={item} collection={ItemsDatabase.collection} /> <br /></Col>))}
          </Row>
        </Container>
      </Col>
    </Row>
  ) : <LoadingSpinner />);
};

export default CategoryBarCloth;
