var React = require('react');
var TrackStore = require('../stores/track_store');
var TrackPlayer = require("./track_player");

var Jukebox = React.createClass({
  getInitialState: function () {
    return {isPlaying: false, currentTrack: 0, tracks: []};
  },

  componentDidMount: function () {
    this.listener = TrackStore.addListener(this._handleChange);
  },

  _handleChange: function () {
    this.setState({tracks: TrackStore.all()});
  },

  deleteTrack: function(e){

  },

  render: function() {
    var trackPlayers = this.state.tracks.map(function(track) {
      return <TrackPlayer key={track.name} track={track} />;
    });

    return (
      <div>
        {trackPlayers}
      </div>
    );
  }
});

module.exports = Jukebox;
