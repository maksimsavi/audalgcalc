import "./TrackStatsItem.css"
export default function TrackStatsItem(props) {
    let progressValue = (props.current / props.needed)*100;
    return (
        <li className="track-stat-list-item bmargin25">
            <div className="list-item-info">
                <p className="item-info-title">{props.title}</p> 
                <p className="item-info-current">{props.current}</p> 
                <p className="item-info-needed">/{props.needed}</p>
            </div>
            <div className="list-item-completion-bar">
            <progress max="100" value={progressValue}></progress>
            </div>
        </li>
    );
}
/*
main items will receive:
    Title
    Value
    - Value Goal
if key = "created", don't render. otherwise, render.
*/