export default function PizzaListItem({ pizza }) {
    return (
        <li>
          {pizza.name}
          {pizza.description}
          {pizza.price}
          {pizza.image}
          <button>Add to Cart</button>
          <button>Delete</button>  
        </li>
      );
}