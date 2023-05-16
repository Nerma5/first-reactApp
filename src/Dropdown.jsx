import React,{useState} from "react";

const Dropdown = () =>{

const[drop,setDrop]= useState('')

const dropHandler = (e) =>{
    setDrop(e.target.value)
}

    return(
        <div>
        <label>Choose a color:</label> 
    <select value={drop}  onChange={dropHandler}> 
        <option>red</option> 
        <option>yellow</option> 
        <option>green</option> 
        <option>orange</option> 
    </select>
    <h1>Color you picked:{drop}</h1>
        </div>
    )
}

export default Dropdown