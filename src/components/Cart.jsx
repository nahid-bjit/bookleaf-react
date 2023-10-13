import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { cartCheckout } from '../store/cartActions';
import { emptyCart } from '../store/slices/cartSlice';
import Navbar from './Navbar';


function Cart() {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.items);
    const cartId = useSelector((state) => state.cart.cartId);
    const navigate = useNavigate()
    const checkout = async () => {
        if (cartItems.length > 0) {
            const response = await cartCheckout(cartId)
            if (response?.data?.success) {
                dispatch(emptyCart())
                navigate("/checkout")
            } else {
                alert("Checkout Failed")
            }
        } else {
            alert("Cart is empty")
        }

    }

    return (
        <div>
            <Navbar />
            <h2>Cart</h2>


            <button
                onClick={checkout}

            >Checkout</button>
            {/* <p>{JSON.stringify(cartItems)}</p> */}
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.book.title} - ${item.book.price} - Quantity: {item.quantity}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;
