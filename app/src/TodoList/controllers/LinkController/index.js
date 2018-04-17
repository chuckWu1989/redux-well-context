import LinkModel from '../../models/LinkModel';
import { SHOW_ALL } from '../../constants/Config';

export const setActive = filter => (
  (dispatch, getState, context) => {
    context.connect();
    const entity = context.model(LinkModel).find('link') || context.model(LinkModel).create('link');
    entity.active = filter;
    entity.update();
    context.disconnect();
  }
);
export const isDisabled = (active, filter) => {
  if (active) {
    return active === filter;
  } else if (filter === SHOW_ALL) {
    return true;
  }
  return false;
};
