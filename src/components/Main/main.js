import React from "react";
import './main.css'
import Input from "../Input/input";
import Button from "../Button/button";

const Main = () =>{

    return(
            <div class="glavniDiv">
      <form>
        <h2>LOG IN</h2>
        <p>Please enter your email and password</p>
        <Input />
        <Input />
        <Input />
        <Button />
      </form>
    </div>
    )
}


export default Main