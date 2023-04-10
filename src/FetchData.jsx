import React,{useState, useEffect} from "react";

const FetchData = () =>{


    
    return(
        <div>
            {user.length > 0 && (
                <table>
                    {user.map(user =>(
                        <tr key={user.id}>
                            <th>{user.name}</th>
                            <th>{user.name}</th></tr>

                            
                    ))}
                </table>
            )}
        </div>
    )
}

export default FetchData