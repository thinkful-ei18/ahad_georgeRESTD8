/* global getItems */

'use strict';

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/ahadgeorge';
  function getItems(callback) {
    // callback('api module works!');
    const newLocal = $.getJSON(`${BASE_URL}/items`,callback);
/* Call in TAs to look at line 9, and end of step 3 */
  }
  function createItem(name, callback) {
    const newItem = {name};
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(newItem),
      success: callback
    });
  }
  
  return {
    getItems,
    createItem
  };
})(); 
