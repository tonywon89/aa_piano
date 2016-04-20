var dispatcher = require('../dispatcher/dispatcher');

var KeyActions = {
  keyPressed: function(note) {
    dispatcher.dispatch({
      actionType: 'KEY_PRESSED',
      noteName: note
    });
  },

  keyReleased: function(note) {
    dispatcher.dispatch({
      actionType: 'KEY_RELEASED',
      noteName: note
    });
  }
};

module.exports = KeyActions;
