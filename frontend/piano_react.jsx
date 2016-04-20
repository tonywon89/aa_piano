// Note = require('./util/note');
// TONES = require('./constants/tones');
var React = require("react");
var ReactDOM = require("react-dom");

require ('./util/key_listener');
var KeyStore = require("./stores/key_store.js");
var Piano = require("./components/piano");

var PianoGrinder = React.createClass({
  render: function() {
    return (
      <div>
        <Piano className={"piano"}/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<PianoGrinder/>, document.getElementById("content"));
});
