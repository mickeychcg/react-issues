import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Home from './Home';
import Issues from './Issues';
import IssueShow from './IssueShow';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        issues: [],
        
      }
  }

  componentDidMount() {
    let issueApi='https://api.github.com/repos/facebook/react/issues?page=1&per_page=100'

    axios.get(issueApi).then( response=> {
      console.log("THIS IS THE RESPONSE:" + response)
      this.setState({
        issues: response.data
        
      })
    }).catch(err=> console.log(err))
  }
  render() {
    

    return (
      <Router>
      <div className="App">
        <nav>
          <Link to='/'>Home</Link> |{' '}
          <Link to='/issues'>Issues</Link> |{' '}
        </nav>
          <Route exact path='/'  component={Home} />
          <Route exact path='/issues'  render={()=><Issues issues={this.state.issues} />} />
          <Route path='/issues/:id' render={(props) => <IssueShow issues={this.state.issues} {...props}/>}/>
          
      </div>
      </Router>
    );
  }
}

export default App;