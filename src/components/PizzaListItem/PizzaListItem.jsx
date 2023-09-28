export default function PizzaListItem({ pizza }) {
  return (
    <div>
      <ul>
        <img src={pizza.image_path} />
        <br />
        <br />
        <hr />

        <ul>Pizza: {pizza.name}</ul>
        <br />
        <ul>Price: {pizza.price}</ul>
        <br />
        <ul>Description: {pizza.description}</ul>
      </ul>
      <br />
      <button>Add to Cart</button>
      <button>Delete</button>
      <br />
      <br />
    </div>
  );
}
