import { isImmutable, Map } from 'immutable';
import STORENAME from '../constants/Config';

const withId = state => (
  (id) => {
    let result;
    if (isImmutable(state)) {
      result = state.getIn([STORENAME, id]);
    } else {
      const { store } = state;
      result = store.get(id);
    }
    return result === undefined ? Map({}) : result;
  }
);
const mapping = state => (
  (...items) => {
    const handler = withId(state);
    const itemId = items.reduce((prev, curr) => handler(prev).get(curr));
    return handler(itemId);
  }
);
const query = state => ({
  withId: withId(state),
  mapping: mapping(state),
});

export default query;
