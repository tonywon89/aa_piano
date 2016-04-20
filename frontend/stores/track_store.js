var Store = require('flux/utils').Store;
var dispatcher = require('../dispatcher/dispatcher');

var TrackStore = new Store(dispatcher);

var _tracks = [];

var saveTrack = function(track){
  _tracks.push(track);
  TrackStore.__emitChange();
};

TrackStore.all = function() {
  return _tracks.slice();
};

TrackStore.__onDispatch = function(payload) {
  switch(payload.actionType){
    case "SAVE_TRACK":
      saveTrack(payload.track);
      break;
  }
};

module.exports = TrackStore;
