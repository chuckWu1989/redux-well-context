import AppDomainModel from '../../models/AppDomainModel';

export const initialize = appName => (
  (dispatch, getState, context) => {
    const domain = new AppDomainModel(appName, context);
    domain.create();
  }
);
export const dispose = appName => (
  (dispatch, getState, context) => {
    const domain = new AppDomainModel(appName, context);
    domain.dispose();
  }
);
