import React from 'react'

function Card(props) {
  return (
    <div className={`${props.css} bg`}>
        {props.children}
    </div>
  )
}

export default Card