class CounterModel {
  constructor() {
    this._times = 0;
  }
  get times() {
    return this._times;
  }
  set times(data) {
    this._times = data;
  }
}

export default CounterModel;
