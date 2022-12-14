import React from 'react';
import { Container } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container fluid className="py-3 h-100" id="landing-page">
    <h1 className="text-center align-middle" style={{ fontSize: '80px', fontFamily: 'Academy Engraved LET', color: 'white' }}>UH Broadcast</h1>
    <Container className="justify-content-center">
      <h3 className="text-center m-3" style={{ fontSize: '40px', fontFamily: 'Academy Engraved LET', color: 'white' }}>Commerce, products, and services available for the UH Community</h3>
    </Container>
  </Container>
);

export default Landing;
