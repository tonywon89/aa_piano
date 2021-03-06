var React = require('react');
var Note = require('../util/note');
var TONES = require('../constants/tones');
var KeyStore = require('../stores/key_store');

var PianoKey = React.createClass({

  getInitialState: function() {
    return {pressed: false};
  },

  componentDidMount: function () {
    this.note = new Note(TONES[this.props.noteName]);
    this.listener = KeyStore.addListener(this._handlePressed);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _handlePressed: function () {
    if (KeyStore.isDown(this.props.noteName)) {
      this.note.start();
      this.setState({pressed: true});
    } else {
      this.note.stop();
      this.setState({pressed: false});
    }
  },

  render: function () {
    var pressedClass = this.state.pressed ? "pressed" : "";
    var color = this.props.noteName.match(/b/) ? 'black' : 'white';
    var className = pressedClass + " key " + color;
    return (
      <div className={className}>
        {this.props.noteName}
      </div>
    );
  }
});

module.exports = PianoKey;
