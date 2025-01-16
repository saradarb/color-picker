import React from 'react'
import { useContext } from 'react'
import { UserContext } from './ComponentA'

function ComponentD() {

  const user = useContext(UserContext);



  return (
    <div className="box">
        
       <p>ComponentD </p> 
       <h2> {`Bye ${user}`} </h2>
        
    </div>
  )
}

export default ComponentD