import MappingModel from '../../models/MappingModel';
import ProductsModel from '../../models/ProductsModel';
import ProductModel from '../../models/ProductModel';
import CartModel from '../../models/CartModel';

export const addToCart = id => (
  (dispatch, getState, context) => {
    context.connect();
    const product = context.model(ProductModel).find(id);
    if (product.inventory > 0) {
      const table = context.model(MappingModel).find('shopping');
      const cart = table.mapping('cart', CartModel);
      product.inventory -= 1;
      product.update();
      cart.addedIds = cart.addedIds.add(id);
      cart.quantityById = cart.quantityById.set(id, (cart.quantityById.get(id) || 0) + 1);
      cart.update();
    }
    context.disconnect();
  }
);
export const getVisibleProducts = (query, state) => {
  const data = [];
  const ids = query(state).mapping('shopping', 'products').get('ids');
  if (ids) {
    ids.forEach((id) => {
      data.push(query(state).withId(id).toJS());
    });
  }
  return data;
};
