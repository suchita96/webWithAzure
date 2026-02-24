import './BookCard.css'

export default function BookCard({ book, onAddToCart }) {
  return (
    <div className="book-card">
      <div className="book-cover">{book.cover}</div>
      <h3 className="book-title">{book.title}</h3>
      <p className="book-author">{book.author}</p>
      <p className="book-price">${book.price.toFixed(2)}</p>
      <button
        className="add-to-cart-btn"
        onClick={() => onAddToCart(book)}
      >
        Add to Cart
      </button>
    </div>
  )
}
