import React,{useState} from "react";

const Dropdown = () =>{

const[drop,setDrop]= useState('')

const dropHandler = (e) =>{
    setDrop(e.target.value)
}


    return(
        <div>
        <label value={drop} onChange={dropHandler}>Choose a color:</label> 
    <select> 
        <option>red</option> 
        <option>yellow</option> 
        <option>green</option> 
        <option>orange</option> 
    </select>
    <p>You picked:{setDrop} color</p>
        </div>
    )
}


export default Dropdown