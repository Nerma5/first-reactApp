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
                {comments.length > 0 && (
                    <ul>
                        {comments.map(comment =>(
                            <li key={comment.id}>{comment.name}</li>
                        ))}
                    </ul>
                )}
        </div>
    )
}

export default Practice