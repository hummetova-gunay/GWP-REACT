import React from 'react'

const DecButton = ({decCount}) => {
  return (
    <button onClick={()=>decCount()}>Decrement the value</button>
  )
}

export default DecButton