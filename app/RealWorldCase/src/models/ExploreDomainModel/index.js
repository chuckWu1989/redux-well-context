import { EXPLORE } from '../../constants/Config';
import ExploreModel from '../ExploreModel';

class ExploreDomainModel {
  constructor(app) {
    this.app = app;
  }
  create() {
    const app = this.app.call();
    const explore = this.model.context.model(ExploreModel).create();
    explore.update();
    app.join(explore, EXPLORE).update();
    app.done();
  }
  get(callback = () => {}) {
    const app = this.app.call();
    const result = app.mapping(EXPLORE, ExploreModel);
    callback(result);
    app.done();
    return result;
  }
  set(value) {
    const app = this.app.call();
    const explore = app.mapping(EXPLORE, ExploreModel);
    explore.value = value;
    explore.update();
    app.done();
  }
  remove() {
    const app = this.app.call();
    const explore = app.mapping(EXPLORE, ExploreModel);
    if (explore) {
      app.explore = explore.del();
      app.udpate();
    }
    app.done();
  }
}

export default ExploreDomainModel;
