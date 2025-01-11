import React from 'react'
import { useState } from 'react'

function MyComponent() {

    const [foods, setFoods] = useState(["Apple","Orange","Banana"])



    function handleAddFood (event){

        const newFood = document.getElementById("foodInPut").value;
        document.getElementById("foodInPut").value = "";
        setFoods(f =>([...f, newFood]))
    }


    function handleRemoveFood (index){
        setFoods(foods.filter((_,i) => i !== index ));
        
    }



  return (
    <div>
        <h2>List of Food</h2>
        <ul>
            {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)} > 
            {food} </li> )}
        </ul>
        <input type="text" id="foodInPut" placeholder="entre food name" />
        <button onClick={handleAddFood}> Add Food</button>
  
    </div>
  )
}

export default MyComponent