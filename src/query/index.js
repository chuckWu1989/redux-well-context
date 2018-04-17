import Immutable from 'immutable';
import STORENAME from '../constants/Config';

const query = state => ({
  withId: (id) => {
    let result;
    if (Immutable.isImmutable(state)) {
      result = state.getIn([STORENAME, id]);
    } else {
      const { store } = state;
      result = store.get(id);
    }
    return result === undefined ? Immutable.Map({}) : result;
  },
});

export default query;
