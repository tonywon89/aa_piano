// Note = require('./util/note');
// TONES = require('./constants/tones');
var React = require("react");
var ReactDOM = require("react-dom");
require ('./util/key_listener');

var KeyStore = require("./stores/key_store.js");
var PianoKey = require("./components/piano_key");

var PianoGrinder = React.createClass({
  render: function() {
    return (
      <div>
        <PianoKey noteName={'C5'}/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<PianoGrinder/>, document.getElementById("content"));
});
