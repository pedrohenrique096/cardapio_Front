import {  } from 'react'
import './App.css'
import { FoodData } from './interface/foodData';
import { Card } from "./components/card/card";

function App() {
  const data: FoodData[] = [];
return(
  <div className='container'>
    <h1>Cardápio</h1>
    <div className='card-grid'>
      {data.map(foodData => 
      <Card 
      price={foodData.price} title={foodData.title} image={foodData.image}
      />
      )}
    </div>
  </div>
 )
}

export default App
