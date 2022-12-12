import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import { ItemsDatabase } from '../../api/Items/Item';

/* Renders a table containing all of the Items documents. Use <ItemData> to render each row. */
const UserListings = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready } = useTracker(() => {
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
            <h2>Community Feedback</h2>
          </Col>
          <Row className="g-4 m-3">
            {/* Start of Feedback Entry */}
            <Card className="mx-auto" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Rena</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">12/06/2022</Card.Subtitle>
                <Card.Text>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  "Looks cute and easy to use for beginners."
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="mx-auto" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Anat</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">12/08/2022</Card.Subtitle>
                <Card.Text>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  "Easy to use."
                  <br />
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  "Sounds like some radio station."
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="mx-auto" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Cole</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">12//2022</Card.Subtitle>
                <Card.Text>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  "Text"
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="mx-auto" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Fourth Reviewer</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Date</Card.Subtitle>
                <Card.Text>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  "Text"
                </Card.Text>
              </Card.Body>
            </Card>
            {/* {items.map((item) => (<Col key={item._id}><UserItems item={item} collection={ItemsDatabase.collection} /> </Col>))} */}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default UserListings;
