class PostModel {
  constructor(isFetching = false, didInvalidate = false, items = [], lastUpdated) {
    this.isFetching = isFetching;
    this.didInvalidate = didInvalidate;
    this.items = items;
    this.lastUpdated = lastUpdated;
  }
}

export default PostModel;
