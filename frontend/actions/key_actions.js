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
  },

  notesPlayed: function(notes) {
    dispatcher.dispatch({
      actionType: 'NOTES_PLAYED',
      notes: notes
    });
  }
};

module.exports = KeyActions;
