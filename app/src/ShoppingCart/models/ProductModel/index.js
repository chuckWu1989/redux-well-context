class ProductModel {
  constructor(json = {}) {
    this.id = json.id;
    this.title = json.title;
    this.price = json.price;
    this.inventory = json.inventory;
  }
}

export default ProductModel;
