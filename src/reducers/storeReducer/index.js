import { handleActions } from "redux-actions";
import { UPDATE, DELETE } from "../../constants/ActionTypes";
import InitialModel from "../../models/InitialModel";

export default handleActions(
  {
    [UPDATE]: (state, { payload: { id, payload } }) => {
      return state.set(id, payload);
    },
    [DELETE]: (state, { payload: { id } }) => {
      return state.remove(id);
    }
  },
  InitialModel
);
