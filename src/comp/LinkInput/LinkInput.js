import './LinkInput.css'
import React from 'react';


class LinkInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputValue: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {//allows for controlled state - text field state isn't self-contained, this makes React the source of truth
    this.setState({inputValue: event.target.value});
  }

  handleSubmit(event) { //when user submits, calls the function in props which turns on table and passes the link
    event.preventDefault();
    this.props.onSubmit(this.state.inputValue)
    
  }
    render() {
        
      return (
        <form id="trackinput" className="inner-container " onSubmit={(e)=>this.handleSubmit(e)}>
        <label htmlFor="trackurl">Audius track link:</label>
        <input type="url" 
          id="trackurl" 
          name="trackurl" 
          placeholder="https://audius.co/artistname/trackname" 
          value={this.state.inputValue} 
          onChange={this.handleChange}   
          />
        <input type="submit" value="Submit"/>
        </form>
      );
    }
  }
  
export default LinkInput