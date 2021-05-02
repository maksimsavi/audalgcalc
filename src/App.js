
import './App.css';
import LinkInput from './comp/LinkInput/LinkInput'
import Table from './comp/Table/Table'
import React from 'react';
import classNames from 'classnames'
//import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayTable: false,
      audiusURL: ''
    };
  }

  changeTableState (value) {
    this.setState({displayTable: true, audiusURL: value})
    console.log(this.state.audiusURL)
  }

  render(){
    const headerClass = classNames('container','textaligncenter','bmargin50')
    return (
      <div>
        <header className={headerClass}>
        <h1 className="mainTitle">Audius Calculator</h1>
        <p>short info about app functionality</p>
        </header>
        <main>
          <div className="container">
            <LinkInput onSubmit={(value)=>this.changeTableState(value)}/>
          </div>
          <div className="container">
           {this.state.displayTable?<Table/>:null}
          </div>
        </main>
      </div>
    );
}
}

export default App;
