import React,{useState, useEffect} from "react";

const FetchData = () =>{
const[post, SetPost] = useState([])
useEffect(
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {SetPost(data)})
    .catch(err => console.log(err))
)

    
    return(
        <div className="fetch">
        </div>
    )
}

export default FetchData