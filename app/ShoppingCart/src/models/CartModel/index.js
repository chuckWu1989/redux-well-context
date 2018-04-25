import { Map, Set } from 'immutable';

class CartModel {
  constructor() {
    this.addedIds = Set();
    this.quantityById = Map();
  }
}

export default CartModel;
