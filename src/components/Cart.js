import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(clearCart());
    }
    return (
        <div className="text-center m-10 p-10">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button
                    className="p-2 m-2 bg-black text-white rounded-lg"
                    onClick={handleClick}
                >
                    Clear Cart
                </button>


                {cartItems.length === 0 && <div className="p-20 text-3xl"><h1>Cart is Empty! Go to page <Link className="text-violet-700" to= "/">Home</Link> </h1> </div>}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;