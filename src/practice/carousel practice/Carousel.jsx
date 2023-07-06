import React, { useState } from 'react';
import './/Carousel.css'


const Carousel = () => {
    const images = [
        "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    ];
    
    const[next, setNext] = useState(0)
    const handlePrevious = () =>{
        const newImage = next 
        setNext(next === 0  ? images.length - 1 : newImage)
    }
    const handleNext = () =>{
        setNext(next === images.length -1  ? 0 : next + 1 )
    }

  return <div className="mainDiv">
    <div className='prevBtn'>
        <button onClick={handlePrevious}>Prev</button>
    </div>
        <div className='images'>
            <img src={images[next]} alt=''/>
        </div>
    <div className='nextBtn'>
        <button onClick={handleNext}>Next</button>
    </div>
  </div>;
};

export default Carousel;
