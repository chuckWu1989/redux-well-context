import { Map } from 'immutable';

class AsyncModel {
  constructor() {
    this.selectedSubreddit = 'reactjs';
    this.postsBySubreddit = Map();
  }
}

export default AsyncModel;
