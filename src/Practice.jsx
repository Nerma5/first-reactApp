import React, {useState, useEffect} from "react";

const Practice = () =>{

const[photos, setPhotos]= useState([])

useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => res.json())
    .then(data => {setPhotos(data)})
    .catch(err => console.log(err))
},[])


    return(
        <div className="practice">
            {photos.length > 0 && (
                <ul>
                    {photos.map(photo =>(
                        <li key={photo.id}>{photo.url}</li>
                    ))}
                </ul>
            )}

        </div>
    )
}

export default Practice