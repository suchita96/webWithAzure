import './Cart.css'

export default function Cart({ cartItems, onRemove, onUpdateQuantity, onClose }) {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
  )

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Shopping Cart Items</h2>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button className="continue-btn" onClick={onClose}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-cover">{item.cover}</div>
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p>{item.author}</p>
                  <p className="item-price">${item.price.toFixed(2)} each</p>
                </div>
                <div className="quantity-control">
                  <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>−</button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value) || 1)}
                  />
                  <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <div className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <button
                  className="remove-btn"
                  onClick={() => onRemove(item.id)}
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Tax (10%):</span>
              <span>${(totalPrice * 0.1).toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>${(totalPrice * 1.1).toFixed(2)}</span>
            </div>
          </div>

          <div className="cart-actions">
            <button className="continue-btn" onClick={onClose}>
              Continue Shopping
            </button>
            <button className="checkout-btn">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}
