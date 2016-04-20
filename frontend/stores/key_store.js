var Store = require('flux/utils').Store;
var dispatcher = require('../dispatcher/dispatcher');

var _keys = [];

var KeyStore = new Store(dispatcher);

var addKey = function(noteName) {
  if(_keys.indexOf(noteName) === -1){
    _keys.push(noteName);
    KeyStore.__emitChange();
  }
};

var removeKey = function (noteName) {
  for (var i = 0; i < _keys.length; i++) {
    if (_keys[i] === noteName) {
      _keys.splice(i, 1);
      KeyStore.__emitChange();
      return;
    }
  }
};

KeyStore.allKeys = function() {
  return _keys.splice();
};

KeyStore.isDown = function (noteName) {
  return (_keys.indexOf(noteName) > -1);
};

KeyStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
  case "KEY_PRESSED":
    addKey(payload.noteName);
    break;
  case "KEY_RELEASED":
    removeKey(payload.noteName);
    break;
  }
};

module.exports = KeyStore;
