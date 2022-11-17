import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <div>
    <Container id="landing-page" fluid className="py-3">
      <Row className="align-middle text-center">
        <Col className="d-flex flex-column justify-content-center">
          <h1>Welcome to UH Broadcast</h1>
          <h3>Commerce, products, and services available for the UH Community</h3>
        </Col>
      </Row>
      <div id="recent-page" className="landing-page-green">
        <Container className="justify-content-center text-center">
          <h2>Recent</h2>
          <Row md={4}>
            <Image src="/images/item1-example.png" width={250} />
            <Image src="/images/item2-example.png" width={250} />
            <Image src="/images/item3-example.png" width={250} />
            <Image src="/images/item4-example.png" width={250} />
          </Row>
        </Container>
      </div>
      <div id="trending-section">
        <Container className="justify-content-center text-center ">
          <h2 style={{ color: '#376551' }}>Trending</h2>
          <Row md={1} lg={2}>
            <Col xs={6}>
              <Image src="/images/item1-example.png" width={250} />
            </Col>
            <Col xs={6}>
              <Image src="/images/item2-example.png" width={250} />
            </Col>
            <Col xs={6}>
              <Image src="/images/item3-example.png" width={250} />
            </Col>
            <Col xs={6}>
              <Image src="/images/item4-example.png" width={250} />
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  </div>
);

export default Landing;
