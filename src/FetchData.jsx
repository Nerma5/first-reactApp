import React,{useState, useEffect} from "react";

const FetchData = () =>{
    const[user, setUser] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {setUser(data)})
        .catch(err => console.log(err))
    }, [])
    return(
        <div>
            {user.length > 0 && (
                <ul>
                    {user.map(user =>(
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default FetchData