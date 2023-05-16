import React, {useState, useEffect} from "react";

const Movies = () =>{

    const[endPoint, setEndPoints] = useState('')

//tells us that container is just an empty array
    const[container, setContainers] = useState([])

useEffect(()=>{
 fetchMe()
}, [endPoint])

    const fetchMe = () =>{
        
    fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${endPoint}`,{
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bca2c254demsh6a0091815b9b001p1719fejsn3f06a878686c',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    },[])
    .then(res => {return res.json()})
    //this data above is every data from api 
    .then(data => {setContainers(data.d)})
    .catch(err => console.log(err))
}

   
    const onChagneHandler = (e) =>{
        setEndPoints(e.target.value)

    }

    const submitHandler = e =>{
        e.preventDefault()
    }
    
    return(
        <div className="movies">
            <form>
                <input value={endPoint} onChange={onChagneHandler} />
                <button type="submit" onClick={submitHandler}>submit</button>
            </form>

            {container.map((item)=>{
                return(
                    <p>{item.l}</p>
                )
            })}
        </div>
    )
}

export default Movies