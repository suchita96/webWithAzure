import BookCard from './BookCard'
import './BookList.css'

export default function BookList({ books, onAddToCart }) {
  return (
    <div className="book-list">
      <h2>Available Books</h2>
      <div className="books-grid">
        {books.map(book => (
          <BookCard
            key={book.id}
            book={book}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  )
}
