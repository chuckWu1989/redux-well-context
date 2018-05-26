class DataModel {
  constructor(opts) {
    this.isFetching = opts.isFetching || false;
    this.ids = opts.ids || [];
    this.nextPageUrl = opts.nextPageUrl || undefined;
    this.entities = opts.entities || {};
    this.pageCount = opts.pageCount || 0;
  }
}

export default DataModel;
