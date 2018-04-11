import { handleActions } from 'redux-actions';
import { UPDATE, DELETE } from '../../constants/ActionTypes';
import InitialModel from '../../models/InitialModel';

export default handleActions(
  {
    [UPDATE]: (state, { payload: { id, payload } }) => state.set(id, payload),
    [DELETE]: (state, { payload: { id } }) => state.remove(id),
  },
  InitialModel,
);
