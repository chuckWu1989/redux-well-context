import AppDomainModel from '../../models/AppDomainModel';

export const initialize = appName => (
  (dispatch, getState, context) => {
    const domain = new AppDomainModel(appName, context);
    domain.explore().create();
  }
);
export const handleGoClick = (appName, history) => (
  (dispatch, getState, context) => {
    const domain = new AppDomainModel(appName, context);
    const { value } = domain.explore().get();
    history.push(value);
  }
);
export const handleKeyUp = (e, appName, history) => (
  (dispatch, getState, context) => {
    if (e.keyCode === 13) {
      dispatch(handleGoClick());
    }
  }
);
export const saveValue = (e, appName) => (
  (dispatch, getState, context) => {
    const domain = new AppDomainModel(appName, context);
    domain.explore().set(e.target.value);
  }
);
export const dispose = appName => (
  (dispatch, getState, context) => {
    const domain = new AppDomainModel(appName, context);
    domain.explore().remove();
  }
);
