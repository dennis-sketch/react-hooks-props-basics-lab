import React from 'react'

function links(props) {
  return (
    
    <div>
      <h3>links</h3>
        <a href={props.linkedin}>{props.linkedin}</a>
        <a href ={props.github}>{props.github}</a>
    </div>
  )
}

export default links
