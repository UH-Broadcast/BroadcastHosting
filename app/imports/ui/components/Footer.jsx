import React from 'react';
import { Col, Container } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 bg-dark">
    <Container>
      <Col className="text-center">

        <a href="https://uh-broadcast.github.io/">
          UH Broadcast Home Page
        </a>
        <br />
        <a href="/feedback">
          Community Feedback
        </a>
        <br />
        Department of Information and Computer Sciences
        {' '}
        <br />
        University of Hawaii
        <br />
      </Col>
    </Container>
  </footer>
);

export default Footer;
