# React Pizza Parlor

## Snapshots
<img width="1497" alt="Screenshot 2023-10-04 at 12 57 24 PM" src="https://github.com/Kennyfergy/redux-pizza-parlor/assets/121765690/e8c55dc0-26de-4242-a090-4aa102dea45c">
<img width="1496" alt="Screenshot 2023-10-04 at 12 58 16 PM" src="https://github.com/Kennyfergy/redux-pizza-parlor/assets/121765690/d866d37a-7c04-41a4-810e-d534650ba5d2">
<img width="1495" alt="Screenshot 2023-10-04 at 12 58 27 PM" src="https://github.com/Kennyfergy/redux-pizza-parlor/assets/121765690/32001c11-7c2e-466f-b150-a8ed648670ff">
<img width="1145" alt="Screenshot 2023-10-04 at 1 00 25 PM" src="https://github.com/Kennyfergy/redux-pizza-parlor/assets/121765690/dfafad83-5837-4fc0-b2b0-3bac686be4f6">


## Startup
create a database called pizza_parlor
use database.sql file to create tables and insert data
npm install
npm run server
npm run client


When visiting [http://localhost:3000/](http://localhost:3000/) display all of the pizzas on the screen. Allow users to add or remove each pizza they would like to order. Show the total cost of items in the cart in the top right of this page. 

This page should have a next button that brings the user to the **enter order details page**.


### ORDER - ENTER CUSTOMER INFORMATION

Collect user information, *name*, *street address*, *city* and *zip*. This page should have an option to select pickup vs. delivery. The total cost of the order should appear in the top right of this page. This page should have a next button that brings the user to the **checkout** page.

### ORDER - CHECKOUT

Users should not be able to modify item totals on this screen. When they click checkout, the user information, order total and array of pizzas should be sent to the server. After the checkout is complete, navigate the user back to the **select pizza** page AND clear out the reducers as appropriate. Each order should begin with "clean" order data (cart, address, etc).

### ADMIN - ORDERS

This page **should not** appear in the navigation bar. Eventually the client would like to add authentication but for now, it will be available to anyone with the url [http://localhost:3000/admin](http://localhost:3000/admin). This page will display the name, time and order total for each of the orders placed.
