import { useState } from 'react'
import BookList from './components/BookList'
import Cart from './components/Cart'
import './App.css'

function App() {
  const [books] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 12.99, cover: '📗' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 14.99, cover: '📕' },
    { id: 3, title: '1984', author: 'George Orwell', price: 13.99, cover: '📘' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', price: 11.99, cover: '📙' },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', price: 13.49, cover: '📗' },
    { id: 6, title: 'Brave New World', author: 'Aldous Huxley', price: 14.49, cover: '📕' },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (book) => {
    const existingItem = cart.find(item => item.id === book.id)
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === book.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCart([...cart, { ...book, quantity: 1 }])
    }
  }

  const removeFromCart = (bookId) => {
    setCart(cart.filter(item => item.id !== bookId))
  }

  const updateQuantity = (bookId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(bookId)
    } else {
      setCart(cart.map(item =>
        item.id === bookId ? { ...item, quantity } : item
      ))
    }
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="app">
      <header className="navbar">
        <h1>📚 BookShop</h1>
        <button className="cart-btn" onClick={() => setShowCart(!showCart)}>
          🛒 Cart ({totalItems})
        </button>
      </header>

      <main>
        {showCart ? (
          <Cart
            cartItems={cart}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
            onClose={() => setShowCart(false)}
          />
        ) : (
          <BookList books={books} onAddToCart={addToCart} />
        )}
      </main>
    </div>
  )
}

export default App
