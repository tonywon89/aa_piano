var AppDispatcher = require('../dispatcher/dispatcher');

var KeyActions = {
  keyPressed: function(note) {
    AppDispatcher.dispatch({
      actionType: 'KEY_PRESSED',
      noteName: note
    });
  }
};

module.exports = KeyActions;
