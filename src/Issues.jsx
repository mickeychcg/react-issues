import React from 'react';
import {Link} from 'react-router-dom';

const Issues = (props) => {

  const issues = props.issues.map((issue, index) => (
    <div key={index}>
      <h3><Link to={`/issues/${issue.id}`}>{issue.title}</Link></h3>
      <p>{issue.body}</p>
    </div>
  ))  
  return (
    <div className="App">
      <h2>Want to submit an issue to bookface/react?</h2>
        <p>If you have a bug or an idea, read the contributing guidelines before opening an issue. Issues labeled good first issue can be good first contributions</p>
      {issues}
    </div>
  )
}

export default Issues;