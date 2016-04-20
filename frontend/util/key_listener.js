var KeyActions = require('../actions/key_actions');

var Mapping = {
  65: "C5",
  87: "Db5",
  83: "D5",
  69: "Eb5",
  68: "E5",
  70: "F5",
  84: "Gb5",
  71: "G5",
  89: "Ab5",
  72: "A5",
  85: "Bb5",
  74: "B5",
  75: "C6"
};

$(document).on('keydown', function (event) {
  var note = Mapping[event.keyCode];
  KeyActions.keyPressed(note);
});

$(document).on('keyup', function (event) {

});
