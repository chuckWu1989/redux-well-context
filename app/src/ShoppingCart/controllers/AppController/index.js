import MappingModel from '../../models/MappingModel';
import ProductsModel from '../../models/ProductsModel';
import ProductModel from '../../models/ProductModel';
import CartModel from '../../models/CartModel';
import { getProducts } from '../../api';

const getAllProducts = () => (
  (dispatch, getState, context) => {
    getProducts((data) => {
      context.connect();
      const table = context.model(MappingModel).create('shopping');
      const products = context.model(ProductsModel).create();
      const cart = context.model(CartModel).create();
      data.forEach((item) => {
        const product = context.model(ProductModel).create(item.id);
        product.title = item.title;
        product.price = item.price;
        product.inventory = item.inventory;
        product.update();
        products.ids = products.ids.push(item.id);
      });
      products.update();
      cart.update();
      table.join(products, 'products').join(cart, 'cart').update();
      context.disconnect();
    });
  }
);

export default getAllProducts;
