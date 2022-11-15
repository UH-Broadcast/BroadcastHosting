import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-3">
    <Row className="align-middle text-center">
      <Col className="d-flex flex-column justify-content-center">
        <h1>UH Broadcast</h1>
        <p>Flea market for the UH Community</p>
      </Col>

    </Row>
  </Container>
);

export default Landing;
