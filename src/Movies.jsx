import React, {useState, useEffect} from "react";

const Movies = () =>{
const[endPoint, setEndPoint]= useState('')

useEffect(()=>{
    fetch('https://moviesminidatabase.p.rapidapi.com/movie/id/%7Bmovie_id%7D/cast/')
    .then(res => console.log(res))
    .then(data => console.log(data))
    .catch(err => console.log(err))
},[])
    return(
        <div className="movies">

        </div>
    )
}

export default Movies