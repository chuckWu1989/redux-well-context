import React from 'react';
import PropTypes from 'prop-types';
import ProductList from '../ProductsList';
import ProductItem from '../../routers/ProductItemRouter';

const Products = props => (
  <ProductList title="Products">
    {
      props.products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCartClicked={() => props.addToCart(product.id)}
        />
      ))
    }
  </ProductList>
);
Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
  })),
  addToCart: PropTypes.func.isRequired,
};

export default Products;
