//this generates the list
import "./TrackStats.css"
import TrackStatsItem from "./TrackStatsItem/TrackStatsItem";
export default function TrackStats(props) {
    const currentScore = props.trackData.currentScore;
    const neededScore = props.trackData.neededScore;

    return (
        <ul className="track-stats padding15">
            <TrackStatsItem title={"score"} 
            current={currentScore.score} 
            needed={neededScore.score}/>
            <TrackStatsItem title={"streams"} 
            current={currentScore.streams} 
            needed={neededScore.streams}/>
            <TrackStatsItem title={"reposts"} 
            current={currentScore.reposts} 
            needed={neededScore.reposts}/>
            <TrackStatsItem title={"windowed reposts"} 
            current={currentScore.windowed_reposts} 
            needed={neededScore.windowed_reposts}/>
            <TrackStatsItem title={"saves"} 
            current={currentScore.saves} 
            needed={neededScore.saves}/>
            <TrackStatsItem title={"windowed saves"} 
            current={currentScore.windowed_saves} 
            needed={neededScore.windowed_saves}/>
            <TrackStatsItem title={"karma"} 
            current={currentScore.karma} 
            needed={neededScore.karma}/>
        </ul>
    );
  }

  /*
  I do have a plan for a way to automate this. 
  For now I hardcoded those items because I don't expect them to change.
  but here's the idea:
  -
  first function sorts keys into arrays from both objects.
  then for each key that exists in both it will create an entry in a "good" key array.
  returns the list.
  -
  second function takes an item from "good keys" array,
  finds the values from both data objects,
  returns an object with Title, Current, and Needed scores;
  gives it to the Item component to create a list item. 
  because they are all going to be progress bars i don't expect to have anything that won't fit that criteria,
  but this sorting will eliminate values that won't generate a progress bar. Though now that I think
  about it those few steps can be eliminated. But I don't know what kind of structure API data will have,
  so hardcoding it in makes sure the items are shown in a specific order (later can be specified in the server database)
  and I know it will display the values I need. Plus it makes it pretty apparent what is going on.
  */