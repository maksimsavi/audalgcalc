import './Table.css'
import React from 'react';
import TrackStatsHeader from "../TrackStatsHeader/TrackStatsHeader"
import TrackStats from '../TrackStats/TrackStats'
class Table extends React.Component {
    
    componentDidMount(){
        console.log(this.props.link)
    }

    render(){
        return (
            <div className="inner-container">
                <TrackStatsHeader trackData={this.props.trackData}/>
                <TrackStats trackData={this.props.trackData}/>
            </div>
        )
    }
}

export default Table