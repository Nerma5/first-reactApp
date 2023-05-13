import React, {useState, useEffect}from "react";

const FetchData = () => {

    const[album, setAlbum] = useState ([])
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res =>  setAlbum(res.album))
        .catch(err => console.log(err))
    }, [])


    return(
        <div className="container"> 
        <div className="ul">
            <ul>
                {album.map((user, index) => {
                    return(
                        <ul key={index}>
                            <li>{user.id}</li>
                        </ul>
                    )
                }
                )}
            </ul>

        </div>
        </div>
    )
}

export default FetchData