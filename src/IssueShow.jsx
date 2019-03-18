import React from 'react';
import ReactMarkdown from 'react-markdown';


const IssueShow = (props) => {
  let issue = props.issues.find((issue) => {
      return issue.id === parseInt(props.match.params.id)
  })
  console.log(props.match.params.id);
  if (props.issues.length) {
    return (
      <div>
        <h1>{issue.title}</h1>
        <h2>Issue # - {issue.number}</h2>
            <ReactMarkdown source={issue.body} />
      </div>
    )
  } else {
    return <h3> loading... </h3>
  }
}

export default IssueShow;