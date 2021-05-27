import "./TrackStatsHeader.css"
export default function Welcome(props) {
    let currentTrackData = props.trackData.currentScore;
    return (
        <div className="track-stats-header padding15">
            <h1>{currentTrackData.owner}</h1>
            <h2>{currentTrackData.track}</h2>
            <p>{currentTrackData.created}</p>
        </div>
    );
  }