import { connect } from 'react-redux';
import getAllProducts from '../../controllers/AppController';
import App from '../../views/App';

const mapDispatchToProps = dispatch => ({
  getAllProducts: () => dispatch(getAllProducts()),
});

export default connect(null, mapDispatchToProps)(App);
