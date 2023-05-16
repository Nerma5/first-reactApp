import React,{useState} from "react";


const Input = () =>{

    const[textInput, setTextInput] = useState("")

    const userInputHandler = (e) =>{
        setTextInput(e.target.value)
    }
    return(
        <div>

        <form>
            <input value={textInput} onChange={userInputHandler} cols={50} rows={5} />
            <button >Submit</button>
            <h1 onClick={()=> setTextInput("")}>Text:{textInput}</h1>
        </form>

        

        </div>
    )
}

export default Input