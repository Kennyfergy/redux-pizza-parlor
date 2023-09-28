import { useSelector } from "react-redux";

export default function TotalPrice(){
    const price = useSelector((store) => store.orderListReducer);
    return <div>
        Total Price: {price.price}
    </div>
}