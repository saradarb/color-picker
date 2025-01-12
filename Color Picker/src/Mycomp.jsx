import React from 'react'
import { useState } from 'react'

function Mycomp() {


    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){
        const newCar = {year: carYear, make: carMake, model:carModel};
        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")
    }

    function handleRemoveCar(index){
        setCars(c => c.filter((_,i) => i !== index));
    }

    function HandleYearChange(event){
        setCarYear(event.target.value);
    }

    function HandleMakeChange(event){
        setCarMake(event.target.value);
    }

    function HandleModelChange(event){
        setCarModel(event.target.value);
    }

  return (
    <div>
        <h2> list of Car Objects </h2>
        <ul>
        {cars.map((car, index) => <li 
        key={index} onClick={() => handleRemoveCar(index)}> 
        {car.year} {car.make} {car.model}
        </li> )}
        </ul>
        <p>Your favourite car is {carMake} </p>

        <input type="number" value={carYear} onChange={HandleYearChange}/> <br/>
        <input type="text" value={carMake} onChange={HandleMakeChange} placeholder="Entre Car Make"/> <br/>
        <input type="text" value={carModel} onChange={HandleModelChange} placeholder="Entre Car Model"/> <br/>
        <button onClick={handleAddCar}> Add Car</button>

    </div>
  )
}

export default Mycomp


