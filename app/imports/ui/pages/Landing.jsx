import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-3" style={{ backgroundImage: 'url(/images/ManoaWallpaper.jpg)' }}>
    <Row className="align-middle text-center">
      <Col className="d-flex flex-column justify-content-center">
        <h1>Welcome to UH Broadcast</h1>
        <h3>Commerce, products, and services available for the UH Community</h3>
      </Col>
    </Row>
    <Container className="justify-content-center text-center">
      <h2 style={{ color: '#376551' }}>Recent</h2>
      <Row md={1} lg={2}>
        <Col xs={6}>
          <Image src="/images/item1-example.png" width={250}/>
        </Col>
        <Col xs={6}>
          <Image src="/images/item2-example.png" width={250}/>
        </Col>
        <Col xs={6}>
          <Image src="/images/item3-example.png" width={250}/>
        </Col>
        <Col xs={6}>
          <Image src="/images/item4-example.png" width={250}/>
        </Col>
      </Row>
    </Container>
  </Container>
);

export default Landing;
