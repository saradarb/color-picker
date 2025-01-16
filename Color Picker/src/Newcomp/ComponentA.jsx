import React  from 'react'
import ComponentB from './ComponentB'
import { useState } from 'react'
import { createContext } from 'react';



export const UserContext = createContext();

function ComponentA() {

    const [user, setUser] = useState("Sara")


  return (
    <div className="box">

       <p>ComponentA </p> 
       <h2> {`hello ${user}`} </h2>
       <UserContext.Provider value={user}>
       <ComponentB />
       </UserContext.Provider>
       
    </div>
  )
}

export default ComponentA