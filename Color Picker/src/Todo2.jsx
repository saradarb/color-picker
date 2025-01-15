import React from 'react'
import { useState } from 'react';

function Todo2() {


    const [tasks, setTasks] = useState([]);
    const [newTasks, setNewTasks] = useState("");



    function handleTasksinput(event){
        setNewTasks(event.target.value);
    }

    function addTasks() {
        if (newTasks.trim() !== "") {
            setTasks((t) => [...t, newTasks]);
            setNewTasks(""); 
        }
    }
        
    

    function removeTasks(index){
        setTasks(tasks.filter((_,i) => i !== index))
    }
    function moveTasksUp(index){
        if(index > 0){
            const UpdatedTasks = [...tasks];
            [UpdatedTasks[index], UpdatedTasks[index -1]] =
            [UpdatedTasks[index -1], UpdatedTasks[index]];
            setTasks(UpdatedTasks);
        }

    }
    function moveTasksDown(index){
        if(index < tasks.length -1){
            const UpdatedTasks = [...tasks];
            [UpdatedTasks[index +1], UpdatedTasks[index]] =
            [UpdatedTasks[index], UpdatedTasks[index +1]];
            setTasks(UpdatedTasks);
        }

    }





  return (
    <div> 
        <h2> To Do List</h2>
        <input type="text" placeholder="Entre Task Here.." value={newTasks} onChange={handleTasksinput} />
        <button onClick={addTasks}> Entre</button>
        <ol> 
            {tasks.map((task, index) =>
            <li key={index}>
                <span> {task} </span>
                <button onClick={() => removeTasks(index)}> Delete </button>
                <button onClick={() => moveTasksUp(index)}> Up </button>
                <button onClick={() => moveTasksDown(index)}> Down </button>
            </li>
            
            
            )}
            
        </ol>




    </div>
  )
}

export default Todo2