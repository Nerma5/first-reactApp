import React, {useState, useEffect} from "react";

const Movies = () =>{

    fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr',{
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bca2c254demsh6a0091815b9b001p1719fejsn3f06a878686c',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    },[])
    .then(res => console.log(res.json()))
    .catch(err => console.log(err))

    
    return(
        <div className="movies">

        </div>
    )
}

export default Movies