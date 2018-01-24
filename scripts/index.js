/* global shoppingList, store, api */
'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems((items)=>{
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
});

// store.items.push(Item.create('apples'));

// api.getItems(function(data) {
//   console.log(data);
// });

// // console.log(api.BASE_URL);

// api.createItem('onions', (newItem) => {
//   api.getItems((items) => {
//     console.log(items);
//     shoppingList.render();
//   });

/* test code: step 6 */

// api.getItems((items) => {
//   const item = items[0];

//   api.updateItem(item.id, { name: 'foobar' }, () => {
//     console.log('updated!');
//   });
// }
// );
