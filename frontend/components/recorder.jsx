var React = require('react');
var Track = require('../util/track');
var KeyStore = require('../stores/key_store');
var TrackActions = require('../actions/track_actions');

var Recorder = React.createClass({
  getInitialState: function () {
    return {isRecording: false, track: new Track({name: "Default"}) };
  },

  componentDidMount: function () {
    this.listener = KeyStore.addListener(this.handleChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
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
    }
  },

  stopRecording: function() {
    if(this.state.isRecording){
      this.state.track.stopRecording();
      TrackActions.saveTrack(this.state.track);
      this.setState({isRecording: false,
        track: new Track({name: "Default", roll:this.state.track.roll})});
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
