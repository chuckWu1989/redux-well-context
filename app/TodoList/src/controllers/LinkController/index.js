import LinkModel from '../../models/LinkModel';
import MappingModel from '../../models/MappingModel';
import { SHOW_ALL } from '../../constants/Config';

export const setActive = filter => (
  (dispatch, getState, context) => {
    context.connect();
    const table = context.model(MappingModel).createIfNotExist('mydb');
    let entity = table.mapping('link', LinkModel);
    if (!entity) {
      entity = context.model(LinkModel).create();
      table.join(entity, 'link').update();
    }
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
