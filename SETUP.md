# Setup Guide

This guide will help you set up the Luxury Service Website for local development.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.17 or later)
- **npm** (comes with Node.js)
- **Git** (for version control)

## Installation

1. **Clone the repository** (if using git):
   ```bash
   git clone <repository-url>
   cd luxury-service-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```
   Edit `.env.local` and add your environment-specific values:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id
   ```

## Development

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

3. **Start developing!** The page will automatically reload when you make changes.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure Overview

### Core Directories

- **`src/app/`** - Next.js App Router pages and layouts
- **`src/components/`** - Reusable React components
- **`src/lib/`** - Utility functions and configurations
- **`src/hooks/`** - Custom React hooks
- **`src/store/`** - Zustand state management stores
- **`src/types/`** - TypeScript type definitions

### Key Files

- **`src/app/layout.tsx`** - Root layout component
- **`src/app/page.tsx`** - Homepage component
- **`tailwind.config.js`** - TailwindCSS configuration
- **`next.config.js`** - Next.js configuration

## Customization

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file in that folder
3. Export a default React component

Example:
```typescript
// src/app/new-page/page.tsx
export default function NewPage() {
  return (
    <div>
      <h1>New Page</h1>
    </div>
  )
}
```

### Adding Components

1. Create a new file in `src/components/`
2. Follow the existing naming convention
3. Export your component as default

### Styling

- Use TailwindCSS classes for styling
- Custom CSS can be added to `src/styles/`
- Global styles go in `src/app/globals.css`

### State Management

- Use Zustand stores in `src/store/`
- Create custom hooks for complex state logic
- Follow the existing patterns

## Environment Configuration

### Required Environment Variables

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Analytics (Optional)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=

# API Keys (Add as needed)
# DATABASE_URL=
# STRIPE_SECRET_KEY=
```

## Building for Production

1. **Create a production build**:
   ```bash
   npm run build
   ```

2. **Test the production build locally**:
   ```bash
   npm run start
   ```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on every push to main branch

### Other Platforms

The project is compatible with:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Troubleshooting

### Common Issues

1. **Port 3000 already in use**:
   ```bash
   npm run dev -- -p 3001
   ```

2. **TypeScript errors**:
   ```bash
   npm run type-check
   ```

3. **Dependency issues**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### Getting Help

If you encounter issues:

1. Check the console for error messages
2. Ensure all dependencies are installed
3. Verify environment variables are set correctly
4. Check that you're using the correct Node.js version

## Development Best Practices

1. **Code Organization**: Keep components small and focused
2. **TypeScript**: Use proper types for all props and functions
3. **Styling**: Prefer TailwindCSS classes over custom CSS
4. **Performance**: Use Next.js Image component for images
5. **Accessibility**: Follow WCAG guidelines

## Next Steps

After setup, you might want to:

1. Customize the color scheme in `tailwind.config.js`
2. Add your business information to the data files
3. Configure analytics and tracking
4. Set up a content management system
5. Add payment processing integration

Happy coding! 🚀