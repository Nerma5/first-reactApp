import React from "react";
import './input.css'


const Input = () =>{
  return(
    <div className="input">
        <input
          name="email"
          type="email"
          placeholder="email"
          class="box"
        />
    </div>
  )
}

export default Input