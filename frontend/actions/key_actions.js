var dispatcher = require('../dispatcher/dispatcher');

var KeyActions = {
  keyPressed: function(note) {
    dispatcher.dispatch({
      actionType: 'KEY_PRESSED',
      noteName: note
    });
  }

};

module.exports = KeyActions;
