import React from 'react';
import PropTypes from 'prop-types';

const ProductList = props => (
  <div>
    <h3>{props.title}</h3>
    <div>{props.children}</div>
  </div>
);
ProductList.defaultProps = {
  children: undefined,
};
ProductList.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default ProductList;
