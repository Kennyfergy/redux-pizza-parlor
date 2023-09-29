import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./PizzaForm.css";

// Material UI imports
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function PizzaForm() {
  const [newName, setNewName] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newZip, setNewZip] = useState("");
  const [newDeliveryMethod, setNewDeliveryMethod] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    console.log("handleSubmit", event);
    event.preventDefault();
    dispatch({
      type: "UPDATE_CUSTOMER", //update customer
      payload: {
        name: newName,
        address: newAddress,
        city: newCity,
        zip: newZip,
        DeliveryMethod: newDeliveryMethod,
      },
    });
    console.log("deliveryMethod", newDeliveryMethod);

    history.push("/checkout");

    //emptying input fields
    setNewName("");
    setNewAddress("");
    setNewCity("");
    setNewDeliveryMethod("");
    setNewZip("");
  };

  return (
    <section>
      <h2>Customer Info</h2>
      <form
        className="add-pizza-form"
        onSubmit={() => {
          handleSubmit;
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        />
        <TextField
          label="Address"
          variant="outlined"
          value={newAddress}
          onChange={(event) => setNewAddress(event.target.value)}
        />
        <TextField
          label="City"
          variant="outlined"
          value={newCity}
          onChange={(event) => setNewCity(event.target.value)}
        />
        <TextField
          label="Zip Code"
          variant="standard"
          value={newZip}
          onChange={(event) => setNewZip(event.target.value)}
        />{" "}
        <div className="radio-container">
          <div className="pickup">
            Pickup
            <input
              type="radio"
              name="DeliveryMethod"
              value="Pickup"
              onChange={(event) => setNewDeliveryMethod(event.target.value)}
            />
          </div>
          <br />
          <div className="delivery">
            Delivery
            <input
              type="radio"
              name="DeliveryMethod"
              value="Delivery"
              onChange={(event) => setNewDeliveryMethod(event.target.value)}
            />
          </div>
        </div>
        <Button
          id="submit-button"
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          type="submit"
        >
          Checkout
        </Button>
      </form>
    </section>
  );
}
