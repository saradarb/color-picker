import React from 'react'
import ComponentC from './ComponentC'

function ComponentB() {
  return (
    <div className="box">
        
       <p>ComponentB </p> 
       <ComponentC />
        
    </div>
  )
}

export default ComponentB