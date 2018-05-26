import ExploreDomainModel from '../ExploreDomainModel';
import APIDomainModel from '../APIDomainModel';
import AppModel from '../AppModel';

class AppDomainModel {
  constructor(appName, context) {
    this.appName = appName;
    this.context = context;
  }
  create() {
    this.context.connect();
    this.context.model(AppModel).create(this.appName).update();
    this.context.disconnect();
  }
  call() {
    this.context.connect();
    return this.context.model(AppModel).find(this.appName);
  }
  done() {
    this.context.disconnect();
    return this;
  }
  explore() {
    return new ExploreDomainModel(this);
  }
  api() {
    return new APIDomainModel(this);
  }
  remove() {
    this.context.connect();
    const app = this.context.model(AppModel).find(this.appName);
    if (app) {
      app.del();
    }
    this.context.disconnect();
  }
}

export default AppDomainModel;
