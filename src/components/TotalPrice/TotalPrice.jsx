import { useSelector } from "react-redux";

export default function TotalPrice(){
    const totalPrice = useSelector((store) => store.cartReducer.totalPrice);
    return <div>
        Total Price: ${totalPrice}
    </div>
}