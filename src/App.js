
import './App.css';
import LinkInput from './comp/LinkInput/LinkInput'
import Table from './comp/Table/Table'
import React from 'react';
//imports functions from another file, so that class methods don't get too thicc
import * as AppCompLogic from './logic/appCompMethodLogic'
import dummyData from "./data"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayTable: false,
      audiusURL: '',
      trackData: '',
    };
  }

  showTable(value) {
    this.setState({displayTable: true, audiusURL: value}) 
  }
  resetTableDisplay = () => {
    this.setState({displayTable: false, trackData: ''})
  }
  handleLinkSubmit(){ //on link submit:
    //pass the link to server (fetch request. could be GET with link as a header? server checks the link and sends back info?)
    AppCompLogic.fetchRequest();
    //receive data (process fetch request. should be received from the fetch request. which i'll have to break down somehow.)
    AppCompLogic.receiveData();
    //function routing works! now need to figure out how to actually display the data
    AppCompLogic.displayTrackInfo(dummyData);
    
  }
  componentDidMount(){}

  render(){
    return (
      <div>
        <header className='container textaligncenter bmargin50'>
        <h1 className="mainTitle">Audius Calculator</h1>
        <p>find out your track's trending stats</p>
        </header>
        <main>
          <div className="container">
            <LinkInput onSubmit={(value)=>this.showTable(value)}/>
          </div>
          <div className="container tmargin100">
           {this.state.displayTable?
           <Table 
              reset={this.resetTableDisplay}
              link={this.state.audiusURL}
              trackData={dummyData}
            />:null}
          </div>
        </main>
      </div>
    );
}
}

export default App;
