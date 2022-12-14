import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { AutoForm, ErrorsField, HiddenField, NumField, SubmitField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import swal from 'sweetalert';
import LoadingSpinner from '../components/LoadingSpinner';
import { ItemsDatabase } from '../../api/Items/Item';

const bridge = new SimpleSchema2Bridge(ItemsDatabase.schema);

const MakeOffer = () => {
  const { _id } = useParams();
  // console.log('MakeOffer', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, items } = useTracker(() => {
    // Get access to Items database.
    const subscription = Meteor.subscribe(ItemsDatabase.userPublicationNameAll);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const ItemData = ItemsDatabase.collection.findOne(_id);
    return {
      items: ItemData,
      ready: rdy,
    };
  }, [_id]);

  const submit = (data) => {
    const { offer } = data;
    ItemsDatabase.collection.update(_id, { $set: { offer } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  };

  return (ready ? (
    <Container id="make-offer-page" className="container-fluid">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Make Offer</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={items}>
            <Card>
              <Card.Body>
                <NumField id="makeOfferAmount" name="offer" decimal={null} />
                <SubmitField id="makeOfferSubmit" value="Submit" />
                <ErrorsField />
                <HiddenField name="owner" />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default MakeOffer;
