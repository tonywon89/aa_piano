var Store = require('flux/utils').Store;
var dispatcher = require('../dispatcher/dispatcher');

var KeyStore = new Store(dispatcher);

module.exports = KeyStore;
