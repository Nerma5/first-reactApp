import axios from "axios";
import React,{useState, useEffect} from "react";
import './practice.css'

const Practice = () =>{
const[data, setData] = useState([])



//using axios
useEffect(() => {
    const fetchApi = async () =>{
        try{
            const respone = await axios.get('https://fakestoreapi.com/products')
            setData(respone.data)
            console.log(respone.data)
        }catch(err){
            console.log("Error :", err)
        }
    }
fetchApi()
}, [])

    return(
        <div className="mainDiv">
        {data.map((product =>(
        <div className="card">
            <div key={product.id} className="images">
                    <img src={product.image}></img>
                </div>
            <div className="title">
                <h1>{product.title}</h1>
                </div>
            <div className="text">
                <p>{product.description}</p>
                <p>{product.type}</p>
            </div>
            <div className="price">
                <p>Price:</p>
                <h2 style={{color: 'green', lineHeight:2}}>{product.price}$</h2>

            </div>
        </div>
        )))}
        </div>
    )
}

export default Practice