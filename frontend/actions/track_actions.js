var dispatcher = require('../dispatcher/dispatcher');

var TrackActions = {
  saveTrack: function(track) {
    dispatcher.dispatch({
      actionType: "SAVE_TRACK",
      track: track
    });
  }
};

module.exports = TrackActions;
