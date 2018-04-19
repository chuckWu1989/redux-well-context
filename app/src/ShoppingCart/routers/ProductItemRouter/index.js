import { connect } from 'react-redux';
import ProductItem from '../../views/ProductItem';
import { isDisabled, getButtonContent } from '../../controllers/ProductController';

const mapDispatchToProps = dispatch => ({
  isDisabled,
  getButtonContent,
});

export default connect(null, mapDispatchToProps)(ProductItem);
