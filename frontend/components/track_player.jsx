var React = require('react');

var TrackPlayer = React.createClass({
  playTrack: function() {
    this.props.track.play();
  },

  render: function() {

    return (
      <div>
        <span>{this.props.track.name}</span>
        <button onClick={this.playTrack}>Play</button>
        <button onClick={this.props.deleteTrack}>Delete</button>
      </div>
    );
  }
});

module.exports = TrackPlayer;
