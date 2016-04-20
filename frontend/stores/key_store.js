var Store = require('flux/utils').Store;
var dispatcher = require('../dispatcher/dispatcher');

var _keys = [];

var KeyStore = new Store(dispatcher);

KeyStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "KEY_PRESSED":
      _keys.push(payload.noteName);
      KeyStore.__emitChange();
      break;
  }
};

module.exports = KeyStore;
