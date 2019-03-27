'use strict';

import Item from './item';
import User from './user';
import Feed from './feed';

/**
 * Create an instance of Galas api
 *
 * @param {Axious} Axios instance to work with
 * @return {Galas} A new instance of Galas
 */

function Galas(axios) {
  this.Item = new Item('items', axios)
  this.User = new User('users', axios)
  this.Feed = new Feed('feed', axios)
}

function createApiInstance(axios) {
  return new Galas(axios);
}

export { createApiInstance };
