import React from 'react'
import { uid } from 'uid'

const Users = ({data}) => {
  return (
    <div>
        {data.map(element=>{
            return (
                <div key={uid(10)}>
                <h2>{element.name}</h2>
                <p>{element.email}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Users