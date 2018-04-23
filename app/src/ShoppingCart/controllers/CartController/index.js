import React from 'react';
import Product from '../../views/Product';
import MappingModel from '../../models/MappingModel';
import CartModel from '../../models/CartModel';
import { buyProducts } from '../../api';

export const getCartProducts = (query, state) => {
  const data = [];
  const cart = query(state).mapping('shopping', 'cart');
  const ids = cart.get('addedIds');
  const quantity = cart.get('quantityById');
  if (ids) {
    ids.toList().forEach((id) => {
      const product = query(state).withId(id).toJS();
      product.quantity = quantity.get(id);
      data.push(product);
    });
  }
  return data;
};
export const getTotal = (query, state) => {
  const cart = query(state).mapping('shopping', 'cart');
  const ids = cart.get('addedIds');
  const quantity = cart.get('quantityById');
  let result = 0;
  if (ids) {
    result = ids.toList().reduce((total, id) => {
      const product = query(state).withId(id);
      const price = product.get('price');
      return total + (price * quantity.get(id));
    }, result);
  }
  return result.toFixed(2);
};
export const getNodes = (products) => {
  if (products.length > 0) {
    return (
      products.map(product => (
        <Product
          key={product.id}
          title={product.title}
          price={product.price}
          quantity={product.quantity}
        />
      ))
    );
  }
  return <em>Please add some products to cart.</em>;
};
export const hasProducts = (products) => {
  const result = products.length > 0 ? '' : 'disabled';
  return result;
};
export const checkout = products => (
  (dispatch, getState, context) => {
    buyProducts(products, () => {
      context.connect();
      const cart = context.model(MappingModel).find('shopping').mapping('cart', CartModel);
      cart.addedIds = cart.addedIds.clear();
      cart.quantityById = cart.quantityById.clear();
      cart.update();
      context.disconnect();
    });
  }
);
