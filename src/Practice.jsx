import React,{useState, useEffect} from "react";


const Practice = () =>{

    const[comments, setComments] = useState([])

    useEffect( () =>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(data => {setComments(data)})
        .catch(err => console.log(err))
    })

    return(
        <div className="practice">

        </div>
    )
}

export default Practice