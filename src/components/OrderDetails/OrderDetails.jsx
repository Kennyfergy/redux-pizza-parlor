import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';


function OrderDetails(props) {
    const dispatch = useDispatch();
    const orderDetails = useSelector(state => state.orderDetailsReducer);
    const orderId = props.match.params.id;  // Get the order ID from route parameters

    useEffect(() => {
        // Fetch order details from the server
        axios.get(`/api/order/${orderId}`)
            .then(response => {
                dispatch(setOrderDetails(response.data));
            })
            .catch(error => {
                console.error(`Error fetching details for order ${orderId}:`, error);
            });

        // Clear order details when component unmounts
        return () => {
            dispatch(clearOrderDetails());
        }
    }, [dispatch, orderId]);

    if (!orderDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Order Details for Order #{orderId}</h2>
            <p><strong>Name:</strong> {orderDetails.customer_name}</p>
            <p><strong>Time:</strong> {orderDetails.time}</p>
            <p><strong>Type:</strong> {orderDetails.type}</p>
            <p><strong>Total:</strong> {orderDetails.total}</p>
            {/* Add more details as needed */}
        </div>
    );
}

export default OrderDetails;
