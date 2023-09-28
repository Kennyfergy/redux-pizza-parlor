import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import "./PizzaForm.css";

export default function PizzaForm() {
    const [newName, setNewName] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const [newCity, setNewCity] = useState('');
    const [newZip, setNewZip] = useState('');
    
    const dispatch = useDispatch();

const handleSubmit = (event) => {
    console.log('handleSubmit', event);
    event.preventDefault();
    dispatch({ type: "POST_PIZZAS", payload: {name: newName, address: newAddress, city: newCity, zip: newZip }})
}

    return (
        <section>
        <h2>Customer Info</h2>
        <form className="add-pizza-form" onSubmit={() => {handleSubmit}}> 
          <input
            required
            placeholder="Name"
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />
          <input
            required
            placeholder="Address"
            value={newAddress}
            onChange={(event) => setNewAddress(event.target.value)}
          />
          <input
            required
            placeholder="City"
            value={newCity}
            onChange={(event) => setNewCity(event.target.value)}
          />
          <input
            required
            placeholder="Zip Code"
            value={newZip}
            onChange={(event) => setNewZip(event.target.value)}
          />
          <button onClick={handleSubmit} className="checkBtn" type="submit">Move to Order Page</button>
        </form>
      </section>
    );
};