import { connect } from 'react-redux';
import { query } from '../../../lib';
import Products from '../../views/Products';
import { addToCart, getVisibleProducts } from '../../controllers/ProductsController';

const mapStateToProps = state => ({
  products: getVisibleProducts(query, state),
});
const mapDispatchToProps = dispatch => ({
  addToCart: id => dispatch(addToCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
