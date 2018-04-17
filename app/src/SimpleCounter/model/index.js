class CounterModel {
  constructor() {
    Object.defineProperties(this, {
      _times: {
        value: 0,
        writable: true,
      },
      times: {
        get: () => this._times,
        set: (value) => {
          if (value > 10) {
            throw new Error('Exceed 10!');
          }
          this._times = value;
        },
        enumerable: true,
      },
    });
  }
}

export default CounterModel;
