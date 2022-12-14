import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, NumField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { ItemsDatabase } from '../../api/Items/Item';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  name: String,
  price: Number,
  image: String,
  description: String,
  ownerInformation: String,
  category: {
    type: String,
    allowedValues: ['Clothing', 'Purses', 'Shoes', 'Instruments', 'Jewelry', 'Furniture', 'Books', 'Toys', 'Appliances', 'Other'],
    defaultValue: 'Other',
  },
});

const bridge = new SimpleSchema2Bridge(formSchema);
/* Renders the AddStuff page for adding a document. */
const AddListing = () => {
  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { name, price, image, description, ownerInformation, category } = data;
    const owner = Meteor.user().username;
    const offer = '0';
    console.log(owner, offer);
    ItemsDatabase.collection.insert(
      { name, price, offer, category, image, description, ownerInformation, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      },
    );
  };

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  let fRef = null;
  return (
    <Container id="add-listing-page" className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center m-5"><h2 style={{ fontSize: '40px', fontFamily: 'Academy Engraved LET', color: 'white' }}>Add Listing</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <TextField id="addListingFormName" name="name" />
                <NumField id="addListingFormPrice" name="price" decimal={null} />
                <TextField id="addListingFormImage" name="image" />
                <LongTextField id="addListingFormDescription" name="description" />
                <TextField id="addListingFormOwnerInfo" name="ownerInformation" />
                <SelectField id="addListingFormCategory" name="category" />
                <SubmitField id="addListingFormSubmit" value="Submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default AddListing;
