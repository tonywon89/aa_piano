var React = require('react');
var PianoKey = require('./piano_key');
var TONES = require('../constants/tones');

var Piano = React.createClass({
  render: function() {
    var noteNames = Object.keys(TONES);
    var keys = noteNames.map(function(noteName, idx) {
      return <PianoKey key={idx} noteName={noteName}/>;
    });
    return (
      <div className={"piano"}>
        {keys}
      </div>
    );
  }
});

module.exports = Piano;
