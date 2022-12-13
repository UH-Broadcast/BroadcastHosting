import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
// import AddStuff from '../pages/AddStuff';
import EditStuff from '../pages/EditStuff';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import SignOut from '../pages/SignOut';
import NavBar from '../components/NavBar';
import SignIn from '../pages/SignIn';
import NotAuthorized from '../pages/NotAuthorized';
import AddListing from '../pages/AddListing';
import UserListings from '../pages/UserListings';
import ListItemsAdmin from '../pages/ListItemsAdmin';
import AdminHome from '../pages/AdminHome';
// import Categories from '../pages/Categories';
import MakeOffer from '../pages/MakeOffer';
import CategoryBar from '../Category pages/CategoryBar';
import CategoryBarShoes from '../Category pages/CategoryBarShoes';
import CategoryBarCloth from '../Category pages/CategoryBarCloth';
import CategoryBarIns from '../Category pages/CategoryBarIns';
import CategoryBarBooks from '../Category pages/CategoryBarBooks';
import CategoryBarJewl from '../Category pages/CategoryBarJewl';
import CategoryBarPur from '../Category pages/CategoryBarPur';
import CategoryBarFur from '../Category pages/CategoryBarFur';
import CategoryBarToys from '../Category pages/CategoryBarToys';
import CategoryBarApp from '../Category pages/CategoryBarApp';
import CategoryBarOther from '../Category pages/CategoryBarOther';
import CommunityFeedback from '../pages/CommunityFeedback';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/home" element={<ProtectedRoute><Landing /></ProtectedRoute>} />
        {/* <Route path="/categories" element={<ProtectedRoute><Categories /></ProtectedRoute>} /> */}
        <Route path="/list" element={<ProtectedRoute><UserListings /></ProtectedRoute>} />
        <Route path="/ItemListing" element={<ProtectedRoute><CategoryBar /></ProtectedRoute>} />
        <Route path="/CategoryBarShoes" element={<ProtectedRoute><CategoryBarShoes /></ProtectedRoute>} />
        <Route path="/CategoryBarCloths" element={<ProtectedRoute><CategoryBarCloth /></ProtectedRoute>} />
        <Route path="/CategoryBarIns" element={<ProtectedRoute><CategoryBarIns /></ProtectedRoute>} />
        <Route path="/CategoryBarBooks" element={<ProtectedRoute><CategoryBarBooks /></ProtectedRoute>} />
        <Route path="/CategoryBarJewl" element={<ProtectedRoute><CategoryBarJewl /></ProtectedRoute>} />
        <Route path="/CategoryBarPur" element={<ProtectedRoute><CategoryBarPur /></ProtectedRoute>} />
        <Route path="/CategoryBarFur" element={<ProtectedRoute><CategoryBarFur /></ProtectedRoute>} />
        <Route path="/CategoryBarToys" element={<ProtectedRoute><CategoryBarToys /></ProtectedRoute>} />
        <Route path="/CategoryBarApp" element={<ProtectedRoute><CategoryBarApp /></ProtectedRoute>} />
        <Route path="/CategoryBarOther" element={<ProtectedRoute><CategoryBarOther /></ProtectedRoute>} />
        <Route path="/feedback" element={<CommunityFeedback />} />
        <Route path="/makeoffer/:_id" element={<MakeOffer />} />
        <Route path="/add" element={<ProtectedRoute><AddListing /></ProtectedRoute>} />
        <Route path="/edit/:_id" element={<ProtectedRoute><EditStuff /></ProtectedRoute>} />
        <Route path="/adminitem" element={<AdminProtectedRoute><ListItemsAdmin /></AdminProtectedRoute>} />
        <Route path="/adminhome" element={<AdminProtectedRoute><AdminHome /></AdminProtectedRoute>} />
        <Route path="/notauthorized" element={<NotAuthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

/*
 * ProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  return isLogged ? children : <Navigate to="/signin" />;
};

/**
 * AdminProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  if (!isLogged) {
    return <Navigate to="/signin" />;
  }
  const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
  return (isLogged && isAdmin) ? children : <Navigate to="/notauthorized" />;
};

// Require a component and location to be passed to each ProtectedRoute.
ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

ProtectedRoute.defaultProps = {
  children: <Landing />,
};

// Require a component and location to be passed to each AdminProtectedRoute.
AdminProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

AdminProtectedRoute.defaultProps = {
  children: <Landing />,
};

export default App;
