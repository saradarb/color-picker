import React, { useState } from 'react'
import { useEffect } from 'react'


//Create a component that updates the document title 
//with the value of an input field whenever the user types

function Practice() {

    const [title, setTitle] = useState("")


    useEffect(() =>{
        document.title = `${title}`
        },);

   function handletitle(event){
    setTitle(event.target.value)
   }


  return (
    <div>
        <input onChange={handletitle} placeholder="Entre Title Here..." /> 
        
    </div>
  )
}

export default Practice