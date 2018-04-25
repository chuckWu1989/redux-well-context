import AsyncModel from '../../models/AsyncModel';
import PostModel from '../../models/PostModel';

const requestPosts = subreddit => (
  (dispatch, getState, context) => {
    context.connect();
    const entity = context.model(AsyncModel).find('async');
    const post = entity.postsBySubreddit.get(subreddit) || {};
    post.isFetching = true;
    post.didInvalidate = false;
    entity.postsBySubreddit = entity.postsBySubreddit.set(subreddit, post);
    entity.update();
    context.disconnect();
  }
);
const receivePosts = (subreddit, json) => (
  (dispatch, getState, context) => {
    context.connect();
    const entity = context.model(AsyncModel).find('async');
    const items = json.data.children.map(child => child.data);
    const post = new PostModel(false, false, items, Date.now());
    entity.postsBySubreddit = entity.postsBySubreddit.set(subreddit, post);
    entity.update();
    context.disconnect();
  }
);
const fetchPosts = subreddit => (
  (dispatch, getState, context) => {
    dispatch(requestPosts(subreddit));
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)));
  }
);
const shouldFetchPosts = subreddit => (
  (dispatch, getState, context) => {
    context.connect();
    const entity = context.model(AsyncModel).find('async');
    const post = entity.postsBySubreddit.get(subreddit);
    context.disconnect();
    if (!post) {
      return true;
    }
    if (post.isFetching) {
      return false;
    }
    return post.didInvalidate;
  }
);
const invalidateSubreddit = subreddit => (
  (dispatch, getState, context) => {
    context.connect();
    const entity = context.model(AsyncModel).find('async');
    const post = entity.postsBySubreddit.get(subreddit) || {};
    post.didInvalidate = true;
    entity.postsBySubreddit = entity.postsBySubreddit.set(subreddit, post);
    entity.update();
    context.disconnect();
  }
);

export const initialize = () => (
  (dispatch, getState, context) => {
    context.connect();
    context.model(AsyncModel).create('async').update();
    context.disconnect();
  }
);
export const fetchPostsIfNeeded = subreddit => (
  (dispatch, getState, context) => {
    if (dispatch(shouldFetchPosts(subreddit))) {
      return dispatch(fetchPosts(subreddit));
    }
    return undefined;
  }
);
export const receiveProps = (nextProps, props) => (
  (dispatch, getState, context) => {
    if (nextProps.selectedSubreddit !== props.selectedSubreddit) {
      dispatch(fetchPostsIfNeeded(nextProps.selectedSubreddit));
    }
  }
);
export const selectSubreddit = subreddit => (
  (dispatch, getState, context) => {
    context.connect();
    const entity = context.model(AsyncModel).find('async');
    entity.selectedSubreddit = subreddit;
    entity.update();
    context.disconnect();
  }
);
export const dispose = () => (
  (dispatch, getState, context) => {
    context.connect();
    context.model(AsyncModel).find('async').del();
    context.disconnect();
  }
);
export const getPostInformation = (query, state) => {
  const async = query(state).withId('async');
  const selectedSubreddit = async.get('selectedSubreddit');
  const { isFetching, lastUpdated, items: posts } = async.getIn(['postsBySubreddit', selectedSubreddit]) || {};
  return {
    selectedSubreddit,
    isFetching,
    lastUpdated,
    posts,
  };
};
export const handleRefreshClick = (e, props) => (
  (dispatch, getState, context) => {
    e.preventDefault();
    const { selectedSubreddit } = props;
    dispatch(invalidateSubreddit(selectedSubreddit));
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }
);
