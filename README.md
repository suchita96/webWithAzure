# 📚 BookShop React App

A modern React e-commerce application for a bookshop with shopping cart functionality, built with Vite and React.

## Features

- 📖 **Book Catalog** - Browse a collection of books with titles, authors, prices, and visual covers
- 🛒 **Shopping Cart** - Add/remove books and manage quantities
- 💰 **Price Calculation** - Automatic subtotal, tax (10%), and total calculation
- 🎨 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with Vite for optimal development and build speeds
- 🔄 **Real-time Updates** - Instant cart updates and price recalculation

## Project Structure

```
src/
├── App.jsx                 # Main app component with state management
├── App.css                 # Global styles
├── components/
│   ├── BookList.jsx       # Display all available books
│   ├── BookCard.jsx       # Individual book card
│   ├── Cart.jsx           # Shopping cart view
│   ├── BookList.css       # Book list styles
│   ├── BookCard.css       # Book card styles
│   └── Cart.css           # Cart styles
├── index.jsx              # React entry point
└── index.css              # Global base styles
```

## Getting Started

### Prerequisites

- Node.js 20.19+ or Node.js 22.12+ (Required for Vite)
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
   ```bash
   cd webapp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

Create an optimized production build:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Usage

1. **Browse Books** - View all available books in the catalog with their details
2. **Add to Cart** - Click "Add to Cart" on any book to add it to your shopping cart
3. **View Cart** - Click the cart button in the navbar to see your cart contents
4. **Manage Quantities** - Use +/- buttons to adjust item quantities or delete items
5. **Checkout** - Review your cart and proceed to checkout (checkout integration ready)

## Technologies Used

- **React 18** - UI library
- **Vite 5** - Build tool and dev server
- **CSS3** - Styling with gradients and animations
- **JavaScript ES6+** - Modern JavaScript

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Sample Books

The app comes with 6 sample books:
1. The Great Gatsby - F. Scott Fitzgerald - $12.99
2. To Kill a Mockingbird - Harper Lee - $14.99
3. 1984 - George Orwell - $13.99
4. Pride and Prejudice - Jane Austen - $11.99
5. The Catcher in the Rye - J.D. Salinger - $13.49
6. Brave New World - Aldous Huxley - $14.49

## Future Enhancements

- [ ] Backend API integration for dynamic book data
- [ ] User authentication and account management
- [ ] Payment gateway integration
- [ ] Book search and filtering
- [ ] User reviews and ratings
- [ ] Wishlist functionality
- [ ] Order history and tracking

## License

This project is open source and available under the MIT License.
