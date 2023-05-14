import React, {useState, useEffect} from "react";

const Practice = () =>{

const[toDo, setToDo] = useState([])

useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => {setToDo(data)})
    .catch(err => console.log(err))
},[])

    return(
        <div className="practice">
            <h1>Hello world</h1>
            <h2>Here is some of toDos:</h2>
            {toDo.length > 0 && (
                <ul>
                    {toDo.map(toDo =>(
                        <li key={toDo.id}>{toDo.title}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Practice