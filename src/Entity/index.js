import Immutable from 'immutable';
import STORENAME from '../constants/Config';

function Entity(state, dispatch, Model, operator) {
  if (typeof Model !== 'function') {
    throw new Error('Model must be a class');
  }
  if (typeof operator !== 'object' || operator === null) {
    throw new Error('operator must be an non-null object');
  }
  class EntityModel extends Model {
    constructor() {
      super(state, dispatch);
      Object.defineProperties(this, {
        id: {
          value: undefined,
          writable: true,
        },
        state: {
          value: Immutable.isImmutable(state) ? state.get(STORENAME) : state[STORENAME],
        },
        dispatch: {
          value: dispatch,
        },
      });
      Object.keys(operator).forEach((key) => {
        Object.defineProperty(this, key, {
          value: operator[key],
        });
      });
    }
  }
  return new EntityModel();
}

export default Entity;
