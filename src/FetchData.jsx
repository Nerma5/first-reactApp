import React,{useState, useEffect} from "react";

const FetchData = () =>{
const[post, SetPost] = useState([])
useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(data => {SetPost(data)})
    .catch(err => console.log(err))
},[])

    return(
        <div className="fetch">
            {post.length > 0 && (
                <ul>
                    {post.map(post =>(
                        <li key={post.id}>{post.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default FetchData