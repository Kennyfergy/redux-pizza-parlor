import React, {useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';
import PizzaList from '../PizzaList/PizzaList';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {getPizzas()},
  []);
  // GET axios w/ function
const getPizzas = () => {
  axios.get("/api/pizza")
  .then((response) => {
    dispatch({ type: "SET_PIZZAS", payload: response.data})
  })
  .catch((error) => {
    console.log("Error in getting pizza list", error)
  });
};
  // POST axios w/ function
const postPizzas = () => {
  axios.post("/api/pizza") //need to post to pizzaList??
  .then((response) => {
    dispatch({ type: "POST_PIZZAS", payload: something.something })  /* need from handlesubmit??*/ 
  })
  .catch((err) => {
    console.log("Error in Posting pizzas", err)
  })
};
  
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <br />
      <PizzaList  />
  
    </div>
  );
}

export default App;
