# BookShop React App - Copilot Instructions

This is a React bookshop e-commerce application built with Vite. The app provides a catalog of books with shopping cart functionality.

## Project Overview

- **Type**: React Web Application
- **Build Tool**: Vite
- **Package Manager**: npm
- **Node Requirements**: 20.19+ or 22.12+

## Project Setup Status

✅ Project scaffolded with Vite React template
✅ Components created (BookList, BookCard, Cart)
✅ Styling implemented with CSS
✅ State management set up with React hooks
✅ Sample book data included
✅ Shopping cart functionality implemented
✅ README documentation created

## Key Features

1. **Book Catalog** - Displays 6 sample books with covers, titles, authors, and prices
2. **Shopping Cart** - Add/remove books, adjust quantities
3. **Price Calculation** - Automatic subtotal, 10% tax, and total
4. **Responsive Design** - Mobile-friendly layout
5. **Modern UI** - Gradient background, smooth transitions, hover effects

## Important Notes

### Node.js Version Issue
The current environment has Node.js 16.20.2, but Vite requires 20.19+ or 22.12+. You will need to upgrade Node.js to run the development server. The project structure is ready; only the dev server won't start with the current Node version.

### Running the Application
Once Node.js is upgraded:
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## Development Guidelines

- Use functional components with React hooks
- Keep component files in `src/components/`
- Maintain CSS files alongside components
- Update README.md when adding major features
- Test shopping cart functionality thoroughly

## Future Development Ideas

- Add backend API for dynamic book data
- Implement search and filtering
- Add user authentication
- Integrate payment processing
- Add book reviews and ratings
- Create wishlist feature
- Implement order history
