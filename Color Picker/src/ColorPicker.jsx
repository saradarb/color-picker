import React from 'react'
import { useState } from 'react'

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF");
    const [name, setName] = useState("");



    function handleColorChange (event) {
        setColor(event.target.value);
    }

    function handleNameChange (event) {
        setName(event.target.value);
    }


  return (
    <div className="theContainerOfColors">
        <input value={name} placeholder='What/s Your Name' onChange={handleNameChange} />
        <h1> What's your favourite color {name} ? </h1>
        <div className="someColorPicker" style={{backgroundColor : color}} >
          <p> Your favourite color is : {color} </p>
        </div>
        <label> Select a Color : </label>
        <input type="color" value={color} onChange={handleColorChange}/>

    </div>
  )
}

export default ColorPicker