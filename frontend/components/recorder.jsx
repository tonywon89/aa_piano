var React = require('react');
var Track = require('../util/track');
var KeyStore = require('../stores/key_store');

var Recorder = React.createClass({
  getInitialState: function () {
    return {isRecording: false, track: new Track({name: "Default"}) };
  },

  componentDidMount: function () {
    KeyStore.addListener(this.handleChange);
  },

  handleChange: function() {
    if(this.state.isRecording){
      this.state.track.addNotes(KeyStore.allKeys());
    }
  },

  startRecording: function() {
    if(!this.state.isRecording){
      this.state.track.startRecording();
      this.setState({isRecording: true});
      console.log('we are the recordings');
    }
  },

  stopRecording: function() {
    if(this.state.isRecording){
      this.state.track.stopRecording();
      this.setState({isRecording: false});
      console.log('we have stopped recordings');
    }
  },

  playRecording: function() {
    if(!this.state.isRecording){
      this.state.track.play();
    }
  },

  render: function () {
    return (
      <div>
        <button onClick={this.startRecording}>Start Recording</button>
        <button onClick={this.stopRecording}>Stop Recording</button>
        <button onClick={this.playRecording}>Play Recording</button>
      </div>
    );
  }
});

module.exports = Recorder;
