import React from 'react'
import { useState } from 'react'

function MyComponent() {

    const [count, setCount] = useState(1990)

    function handlePlus () {
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)

    }
    function handleDown () {
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
    }
    function handlereset () {
        setCount(1990)
    }




  return (
    <div>
        <p>Choose your birth year{count} </p>
        <button onClick={handlePlus}> Up </button>
        <button onClick={handleDown}> Down </button>
        <button onClick={handlereset}> reset </button>
    </div>
  )
}

export default MyComponent