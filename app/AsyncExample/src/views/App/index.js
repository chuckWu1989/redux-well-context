import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Picker from '../../views/Picker';
import Posts from '../../views/Posts';

class App extends Component {
  componentWillMount() {
    this.props.initialize();
  }
  componentDidMount() {
    const { fetchPostsIfNeeded, selectedSubreddit } = this.props;
    fetchPostsIfNeeded(selectedSubreddit);
  }
  componentWillReceiveProps(nextProps) {
    this.props.receiveProps(nextProps, this.props);
  }
  componentWillUnmount() {
    this.props.dispose();
  }
  render() {
    const {
      selectSubreddit,
      selectedSubreddit,
      handleRefreshClick,
      lastUpdated,
      isFetching,
      posts,
    } = this.props;
    const isEmpty = posts.length === 0;
    return (
      <div>
        <Picker
          value={selectedSubreddit}
          onChange={selectSubreddit}
          options={['reactjs', 'frontend']}
        />
        <p>
          {
            lastUpdated && (
              <span>
                Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                {' '}
              </span>
            )
          }
          {
            !isFetching && (
              <button onClick={e => handleRefreshClick(e, this.props)}>
                Refresh
              </button>
            )
          }
        </p>
        {
          isEmpty ?
            (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>) :
            (
              <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                <Posts posts={posts} />
              </div>
            )
        }
      </div>
    );
  }
}
App.defaultProps = {
  selectedSubreddit: 'reactjs',
  lastUpdated: undefined,
  isFetching: true,
  posts: [],
};
App.propTypes = {
  posts: PropTypes.array.isRequired,
  selectedSubreddit: PropTypes.string,
  lastUpdated: PropTypes.number,
  isFetching: PropTypes.bool,
  initialize: PropTypes.func.isRequired,
  fetchPostsIfNeeded: PropTypes.func.isRequired,
  receiveProps: PropTypes.func.isRequired,
  selectSubreddit: PropTypes.func.isRequired,
  handleRefreshClick: PropTypes.func.isRequired,
  dispose: PropTypes.func.isRequired,
};

export default App;
