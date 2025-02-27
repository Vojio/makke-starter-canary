# Project Configuration and Coding Standards

## Project Setup
- next.js 15 with React 19
- biome.js for code formatting and linting
- full shadcn UI component library
- radix react-cons (not Lucide React icons)
- next-themes for theme management

## Technical Stack Expertise
Built with expertise in TypeScript, Node.js, Next.js App Router, React, Shadcn UI, Radix UI, and Tailwind.

## Code Style and Structure
- Write concise, technical TypeScript code with accurate examples
- Use functional and declarative programming patterns; avoid classes
- Prefer iteration and modularization over code duplication
- Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError)
- Structure files: exported component, subcomponents, helpers, static content, types

## Naming Conventions
- Use lowercase with dashes for directories (e.g., components/auth-wizard)
- Favor named exports for components

## TypeScript Usage
- Use TypeScript for all code; prefer interfaces over types
- Avoid enums; use maps instead
- Use functional components with TypeScript interfaces

## Syntax and Formatting
- Use the "function" keyword for pure functions
- Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements
- Use declarative JSX

## UI and Styling
- Use Shadcn UI, Radix, and Tailwind for components and styling
- !!Do not attempt to change, improve, adapt any files in the components/ui folder!!
- Implement responsive design with Tailwind CSS; use a mobile-first approach
- This project uses 

## Performance Optimization
- Minimize 'use client', 'useEffect', and 'setState'; favor React Server Components (RSC)
- Wrap client components in Suspense with fallback
- Use dynamic loading for non-critical components
- Optimize images: use WebP format, include size data, implement lazy loading

## Updating list
- use for...of loops instead of forEach for better performance and readability
- Use the '**' operator instead of 'Math.pow'.

## Key Conventions
- Use 'nuqs' for URL search parameter state management
- Optimize Web Vitals (LCP, CLS, FID)
- Limit 'use client':
  - Favor server components and Next.js SSR
  - Use only for Web API access in small components
  - Avoid for data fetching or state management

Follow Next.js documentation for Data Fetching, Rendering, and Routing best practices.

---
## Rules for the website
# Instructions
- Optimize for SEO
- Implement proper meta tags
- Use static generation where possible
- Optimize images using next/image
- Implement proper accessibility
- Focus on performance optimization

# Structure:
1. Pages
2. Components
3. Content
4. Utils
5. Types