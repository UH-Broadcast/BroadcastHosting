import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const ItemDetails = ({ itemD }) => (
  <tr>
    <td>{itemD.name}</td>
    <td>{itemD.price}</td>
    <td>{itemD.image}</td>
    <td>{itemD.description}</td>
    <td>{itemD.owner}</td>
    <td>{itemD.category}</td>
    <td>
      <Link to={`/makeoffer/${itemD._id}`}>Edit</Link>
    </td>
  </tr>
);

// Require a document to be passed to this component.
ItemDetails.propTypes = {
  itemD: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    description: PropTypes.string,
    owner: PropTypes.string,
    category: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default ItemDetails;
