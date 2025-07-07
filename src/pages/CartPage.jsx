import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart
} from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import './CartPage.css';

function CartPage() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <p>Total Items: {totalItems}</p>
          <p>Total Cost: ${totalCost.toFixed(2)}</p>

          <div className="cart-items">
            {cart.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="info">
                  <h4>{item.name}</h4>
                  <p>${item.price}</p>
                  <div className="quantity">
                    <button onClick={() => dispatch(decrementQuantity(item.id))}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                  </div>
                </div>
                <button className="delete-btn" onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-buttons">
            <button onClick={() => alert("Coming Soon!")}>Checkout</button>
            <Link to="/products" className="continue-link">Continue Shopping</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
