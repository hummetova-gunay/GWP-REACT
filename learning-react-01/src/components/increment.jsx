import React from 'react'

const IncButton = ({incCount}) => {
  return (
    <button onClick={()=>incCount()}>Increment the value</button>
  )
}

export default IncButton