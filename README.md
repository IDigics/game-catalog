# Game Review Website

A modern web application for discovering and reviewing games. Built with Next.js, TypeScript, Tailwind CSS, React Context, and Axios.

## Features

- Browse a curated list of games with images, categories, and descriptions
- Filter games by category
- User authentication (login/signup) with global state management via React Context
- API requests handled with Axios
- Responsive, modern UI with Tailwind CSS

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router, TypeScript)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [React Context API](https://react.dev/reference/react/createContext)

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

- `app/` - Main app pages and layout
- `components/` - Reusable UI components (GameCard, Navbar, LoginForm, SignUpForm)
- `context/` - React Context for authentication
- `lib/` - Utility functions

## Authentication

- User authentication is managed globally using React Context (`context/AuthContext.tsx`).
- Login and signup forms use Axios to communicate with your backend API.
- Update the API endpoints in `AuthContext.tsx`, `LoginForm.tsx`, and `SignUpForm.tsx` to match your backend.

## Customization

- Add or edit games in `app/page.tsx`.
- Update styles using Tailwind CSS classes.
- Extend context for more user features (profile, tokens, etc.) as needed.

## Deployment

Deploy easily on [Vercel](https://vercel.com/) or your preferred platform. See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.**
