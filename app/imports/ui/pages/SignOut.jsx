import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col } from 'react-bootstrap';

/* After the user clicks the "SignOut" link in the NavBar, log them out and display this page. */
const SignOut = () => {
  Meteor.logout();
  return (
    <Col id="signout-page" className="text-center py-3"><h1 style={{ fontFamily: 'Academy Engraved LET', color: 'white' }}>You are signed out.</h1></Col>
  );
};

export default SignOut;
