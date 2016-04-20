var React = require("react");
var ReactDOM = require("react-dom");

require ('./util/key_listener');
var KeyStore = require("./stores/key_store.js");
var Piano = require("./components/piano");
var Recorder = require("./components/recorder");

var PianoGrinder = React.createClass({
  render: function() {
    return (
      <div>
        <Piano/>
        <Recorder/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<PianoGrinder/>, document.getElementById("content"));
});
