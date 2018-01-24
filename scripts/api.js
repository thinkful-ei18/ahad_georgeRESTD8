/* global getItems */

'use strict';

const api = (function () {
  const BASE_URL = 'thinkful-list-api.herokuapp.com/ahadgeorge';
  function getItems(callback) {
    callback('api module works!');
  }
  return {
    getItems
  };
})(); 