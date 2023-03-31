import React, {useState, useEffect} from "react";

const Movies = () =>{
    const http = require('https');

    const options = {
        method: 'GET',
        hostname: 'online-movie-database.p.rapidapi.com',
        port: null,
        path: '/auto-complete?q=game%20of%20thr',
        headers: {
            'X-RapidAPI-Key': 'bca2c254demsh6a0091815b9b001p1719fejsn3f06a878686c',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };
    
    const req = http.request(options, function (res) {
        const chunks = [];
    
        res.on('data', function (chunk) {
            chunks.push(chunk);
        });
    
        res.on('end', function () {
            const body = Buffer.concat(chunks);
            console.log(body.toString());
        });
    });
    
    req.end();
    return(
        <div className="movies">

        </div>
    )
}

export default Movies