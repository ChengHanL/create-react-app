import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import food1 from './images/food1.jpg';
import food2 from './images/food2.jpg';
import food3 from './images/food3.jpg';
import food4 from './images/food4.jpg';
import food5 from './images/food5.jpg';
import food6 from './images/food6.jpg';
import food7 from './images/food7.jpg';
import food8 from './images/food8.jpg';

import mountain1 from './images/mountain1.jpg';
import mountain2 from './images/mountain2.jpg';
import mountain3 from './images/mountain3.jpg';
import mountain4 from './images/mountain4.jpg';
import mountain5 from './images/mountain5.jpg';
import mountain6 from './images/mountain6.jpg';
import mountain7 from './images/mountain7.jpg';
import mountain8 from './images/mountain8.jpg';

function App() {
  const [food, setFood] = useState(false);
  const [mountain, setMountain] = useState(false);
  const handleFood = () => {
    setFood(!food);
    if(mountain == true){
      setMountain(false);
    }
  }
  const handleMountain = () => {
    setMountain(!mountain);
    if(food == true){
      setFood(false);
    }
  }

  return (
    <div style={{}}>
      <button onClick={handleFood}>
        Food
      </button>
      <button onClick={handleMountain}>
        Mountain
      </button>
      {mountain && !food &&
        <div>
          <img src ={mountain1} height={200} width={200}/>
          <img src ={mountain2} height={200} width={200}/>
          <img src ={mountain3} height={200} width={200}/>
          <img src ={mountain4} height={200} width={200}/>
          <img src ={mountain5} height={200} width={200}/>
          <img src ={mountain6} height={200} width={200}/>
          <img src ={mountain7} height={200} width={200}/>
          <img src ={mountain8} height={200} width={200}/>
        </div>
      }
      {food && !mountain &&
        <div>
          <img src ={food1} height={200} width={200}/>
          <img src ={food2} height={200} width={200}/>
          <img src ={food3} height={200} width={200}/>
          <img src ={food4} height={200} width={200}/>
          <img src ={food5} height={200} width={200}/>
          <img src ={food6} height={200} width={200}/>
          <img src ={food7} height={200} width={200}/>
          <img src ={food8} height={200} width={200}/>
        </div>
      }
    </div>

  );
}

export default App;
