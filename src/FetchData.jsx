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
                <table>
                    {user.map(user =>(
                        <tr key={user.id}>
                            <th>{user.name}</th></tr>
                            
                    ))}
                </table>
            )}
        </div>
    )
}

export default FetchData