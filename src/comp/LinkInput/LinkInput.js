import './LinkInput.css'
import React from 'react';


class LinkInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.value)
    //this.props.onSubmit(event);
    
  }
    render() {
        
      return (
        <form id="trackinput" onSubmit={(e)=>this.handleSubmit(e)}>
        <label htmlFor="trackurl">Audius track link:</label>
        <input type="url" 
          id="trackurl" 
          name="trackurl" 
          placeholder="https://audius.co/artistname/trackname" 
          value={this.state.value} 
          onChange={this.handleChange}   
          />
        <input type="submit" value="Submit"/>
        </form>
      );
    }
  }
  
export default LinkInput