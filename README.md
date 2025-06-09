# Phone Store E-commerce Website

A simple e-commerce website built with Next.js, React, and Tailwind CSS for selling phones.

## Features

- Responsive design
- Product listing
- Product details
- Shopping cart functionality
- Mobile-friendly navigation

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Contains all the pages and components
  - `components/` - Reusable React components
  - `page.tsx` - Home page
  - `products/` - Products listing page
  - `cart/` - Shopping cart page
- `public/` - Static assets like images
- `styles/` - Global styles and Tailwind configuration

## Technologies Used

- Next.js 13+ (App Router)
- React
- TypeScript
- Tailwind CSS

## Development

The project uses:
- TypeScript for type safety
- Tailwind CSS for styling
- Next.js for server-side rendering and routing
- React for building the user interface

## Adding New Features

1. Create new components in the `app/components` directory
2. Add new pages in the `app` directory
3. Add images to the `public/images` directory

## Notes

- This is a simple demo project
- In a real application, you would need to:
  - Add proper state management (e.g., Redux, Context API)
  - Implement user authentication
  - Add a backend API
  - Set up a database
  - Add payment processing
  - Implement proper error handling 