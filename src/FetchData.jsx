import React,{useState, useEffect} from "react";

const FetchData = () =>{
    const[user, setUser] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    })
    return(
        <div>

        </div>
    )
}

export default FetchData