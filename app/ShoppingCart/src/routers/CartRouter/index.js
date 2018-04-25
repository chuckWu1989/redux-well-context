import { connect } from 'react-redux';
import { query } from 'redux-well-context';
import { getNodes, checkout, hasProducts, getCartProducts, getTotal } from '../../controllers/CartController';
import Cart from '../../views/Cart';

const mapStateToProps = state => ({
  products: getCartProducts(query, state),
  total: getTotal(query, state),
});
const mapDispatchToProps = dispatch => ({
  getNodes,
  hasProducts,
  onCheckoutClicked: products => dispatch(checkout(products)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
