import Immutable from 'immutable';

const query = state => ({
  withId: (id) => {
    const result = state.getIn(["store", id]);
    return result === undefined ? Immutable.Map({}) : result;
  }
});

export default query;
