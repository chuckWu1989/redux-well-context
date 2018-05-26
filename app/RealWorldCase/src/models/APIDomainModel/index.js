/* eslint consistent-return: off */

import { Map } from 'immutable';
import { camelizeKeys } from 'humps';
import { normalize } from 'normalizr';
import union from 'lodash/union';
import { APIROOT, API } from '../../constants/Config';
import Schema from './schema';
import APIModel from '../APIModel';

class APIDomainModel {
  constructor(app) {
    this.app = app;
  }
  create() {
    const app = this.app.call();
    const api = this.model.context.model(APIDomainModel).create();
    api.update();
    app.join(api, API).update();
    app.done();
  }
  get(callback = () => {}) {
    const app = this.app.call();
    const api = app.mapping(API, APIModel);
    callback(api, app);
    app.done();
    return api;
  }
  loadUser(login, requiredFields = []) {
    this.get(async (api) => {
      const user = api.entities.getIn(['users', login]);
      if (user && requiredFields.every(key => user.has(key))) {
        return null;
      }
      const paginationType = 'starredByUser';
      const entitiesType = 'users';
      const endpoint = `users/${login}`;
      const schema = Schema.USER;
      await this.query(api, endpoint, schema, paginationType, entitiesType, login);
    });
  }
  loadRepo(fullName, requiredFields = []) {
    this.get(async (api) => {
      const repo = api.entities.getIn(['repos', fullName]);
      if (repo && requiredFields.every(key => repo.has(key))) {
        return null;
      }
      const paginationType = 'stargazersByRepo';
      const entitiesType = 'repos';
      const endpoint = `repos/${fullName}`;
      const schema = Schema.REPO;
      await this.query(api, endpoint, schema, paginationType, entitiesType, fullName);
    });
  }
  loadStarred(login, nextPage) {

  }
  async query(api, endpoint, schema, paginationType, entitiesType, role) {
    try {
      const response = await this.fetchAPI(endpoint, schema);
      this.success(api, paginationType, role, response);
      this.setEntities(api, entitiesType, response);
    } catch (e) {
      this.error(api, paginationType, role, e);
    }
  }
  getNextPageUrl(response) {
    const link = response.headers.get('link');
    if (!link) {
      return null;
    }
    const nextLink = link.split(',').find(s => s.indexOf('rel="next"') > -1);
    if (!nextLink) {
      return null;
    }
    return nextLink.trim().split(';')[0].slice(1, -1);
  }
  fetchAPI(endpoint, schema) {
    const fullUrl = (endpoint.indexOf(APIROOT) === -1) ? APIROOT + endpoint : APIROOT;
    return fetch(fullUrl).then(response => (
      response.json().then((json) => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        const camelizedJson = camelizeKeys(json);
        const nextPageUrl = this.getNextPageUrl(response);
        return Object.assign({}, normalize(camelizedJson, schema), { nextPageUrl });
      })
    ));
  }
  setEntities(api, type, response) {
    if (response && 'entities' in response) {
      const users = api.entities.get(type);
      const mergedUsers = users.merge(Map(response.entities));
      api.entities = api.entities.set(type, mergedUsers);
      api.update();
    }
  }
  request(api, type, role) {
    api.pagination = api.pagination.setIn([type, role, 'isFetching'], true);
    api.update();
  }
  success(api, type, role, response) {
    const ids = api.pagination.getIn([type, role, 'ids']);
    const pageCount = api.pagination.getIn([type, role, 'pageCount']);
    api.pagination = api.pagination.setIn([type, role], Map({
      isFetching: false,
      ids: union(ids, response.result),
      nextPageUrl: response.nextPageUrl,
      pageCount: pageCount + 1,
    }));
    api.update();
  }
  error(api, type, role, e) {
    api.pagination = api.pagination.setIn([type, role, 'isFetching'], false);
    api.errorMessage = e.message || 'Something bad happened';
    api.update();
  }
  remove() {
    this.get((api, app) => {
      if (api) {
        app.api = api.del();
        app.udpate();
      }
    });
  }
}
