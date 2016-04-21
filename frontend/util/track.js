var KeyActions = require('../actions/key_actions');

var trackNum = 1; //TODO THIS WAS ADDED

var Track = function(attributes) {
  this.name = attributes.name;
  this.roll = attributes.roll || [];
};

Track.prototype.startRecording = function () {
  this.name = this.name + " " + trackNum++;
  this.roll = [];
  this.startTime = Date.now();
};

Track.prototype.addNotes = function (notes) {
  var timeElapsed = Date.now() - this.startTime;
  this.roll.push({timeSlice: timeElapsed, notes: notes});
};

Track.prototype.stopRecording = function () {
  this.addNotes([]);
};

Track.prototype.play = function () {
  if(this.intervalId) return;
  var playBackStartTime = Date.now();
  var currentNote = 0;

  this.intervalId = setInterval(function() {
    if (currentNote < this.roll.length) {
      var elapsed = Date.now() - playBackStartTime;
      var currentTimeSlice = this.roll[currentNote].timeSlice;
      if (elapsed >= currentTimeSlice) {
        KeyActions.notesPlayed(this.roll[currentNote].notes);
        currentNote++;
      }
    }
    else {
      clearInterval(this.intervalId);
      delete this.intervalId;
    }
  }.bind(this), 10);
};

module.exports = Track;
