import React,{useState, useEffect} from "react";




const Practice = () =>{
const[types, setTypes] = useState([])

useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {setTypes(data)})
    .catch(err => console.log(err))
},[])
    return(
        <div className="practice">
            {types.length > 0 && (
                <ul>
                    {types.map(type =>(
                        <li key={type.id}>{type.email}</li>

                    ))}
                </ul>
            )}
        </div>
    )
}

export default Practice