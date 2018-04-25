import { connect } from 'react-redux';
import { query } from 'redux-well-context';
import App from '../../views/App';
import { initialize, fetchPostsIfNeeded, receiveProps, selectSubreddit, getPostInformation, handleRefreshClick, dispose } from '../../controllers/AppController';

const mapStateToProps = state => ({
  ...getPostInformation(query, state),
});
const mapDispatchToProps = dispatch => ({
  initialize: () => dispatch(initialize()),
  receiveProps: (nextProps, props) => dispatch(receiveProps(nextProps, props)),
  fetchPostsIfNeeded: subreddit => dispatch(fetchPostsIfNeeded(subreddit)),
  selectSubreddit: subreddit => dispatch(selectSubreddit(subreddit)),
  handleRefreshClick: (e, props) => dispatch(handleRefreshClick(e, props)),
  dispose: () => dispatch(dispose()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
