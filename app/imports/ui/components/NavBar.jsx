import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);

  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        <Image src="images/BroadCastLogoWhite.png" style={{ display: 'inline-block', height: '100px' }} />
      </Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
            {currentUser ? ([
              <Nav.Link as={NavLink} to="/"> Home </Nav.Link>,
              <Nav.Link id="add-listing-nav" as={NavLink} to="/add" key="add">Add Listing</Nav.Link>,
              <Nav.Link id="list-Items-nav" as={NavLink} to="/list" key="list">User Items</Nav.Link>,
              <Nav.Link id="every-item-categories-nav" as={NavLink} to="/categories" key="everyitem">Items for Sale</Nav.Link>,
              <Nav.Link id="every-item-categories-navBar" as={NavLink} to="/CategoryBar" key="itemBar">Categories</Nav.Link>,
            ]) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'admin') ? ([
              <Nav.Link id="list-items-admin-nav" as={NavLink} to="/adminitem" key="adminitem">Admin Items</Nav.Link>,
              <Nav.Link id="admin-home-nav" as={NavLink} to="/adminhome" key="adminhome">Admin Home</Nav.Link>,
            ]) : ''}
          </Nav>
          <Nav className="justify-content-end">
            {currentUser === '' ? (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" as={NavLink} to="/signin">
                  <PersonFill />
                  Sign
                  in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" as={NavLink} to="/signup">
                  <PersonPlusFill />
                  Sign
                  up
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="navbar-current-user" title={currentUser}>
                <NavDropdown.Item id="navbar-sign-out" as={NavLink} to="/signout">
                  <BoxArrowRight />
                  {' '}
                  Sign
                  out
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
