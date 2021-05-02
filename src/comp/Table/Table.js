import './Table.css'
import React from 'react';


class Table extends React.Component {
    
    componentDidMount(){
        console.log(this.props.link)
    }
    render(){
        
        return (
            <div className="dataTable">
                <p>table placeholder</p>
                <p><a href={this.props.link}>{this.props.link}</a></p>
                <button onClick={this.props.reset}>reset</button>
            </div>
    )}
}

export default Table