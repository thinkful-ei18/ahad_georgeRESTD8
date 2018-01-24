/* global getItems */

'use strict';

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/ahadgeorge';
  function getItems(callback) {
    // callback('api module works!');
    // $.getJSON(`${BASE_URL}/items`,callback);

  }
  
  return {
    getItems
  };
})(); 
