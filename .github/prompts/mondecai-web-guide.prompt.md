# Mondecai Website Development Guidelines

## Project Vision
Mondecai is an AI-driven conversation simulator that leverages Monte Carlo simulations to predict and optimize future conversational states. The website should reflect this innovative and futuristic approach while maintaining accessibility and performance.

## Technical Foundation
- Framework: Next.js 15 with React 19
- Language: TypeScript (strict mode)
- UI Components: Shadcn UI with Radix primitives
- Styling: Tailwind CSS
- Code Quality: Biome.js for formatting and linting
- Theme Management: next-themes
- Icons: Radix React Icons exclusively

## Core Development Principles

### Architecture
- Utilize Next.js App Router for routing
- Implement React Server Components (RSC) by default
- Keep 'use client' directives minimal
- Follow the folder structure:
  ```
  app/          - Pages and routes
  components/   - Reusable components
  lib/          - Utilities and constants
  public/       - Static assets
  ```

### Component Guidelines
1. Structure:
   - Export components by name
   - Place sub-components in the same file
   - Group helpers and types at the top
   - Implement responsive design with Tailwind
   - Use proper TypeScript interfaces

2. Naming:
   - Components: PascalCase
   - Files: kebab-case
   - Folders: kebab-case
   - Variables: camelCase with descriptive prefixes (is-, has-, should-)

3. State Management:
   - Use 'nuqs' for URL search params
   - Prefer Server Components where possible
   - Implement Suspense boundaries for loading states

### Performance Optimizations
1. Images:
   - Use next/image component
   - Optimize with WebP format
   - Include width/height attributes
   - Implement lazy loading

2. JavaScript:
   - Dynamic imports for heavy components
   - Minimize client-side JavaScript
   - Efficient event handlers
   - Proper error boundaries

3. SEO & Metadata:
   - Implement proper meta tags
   - Use static generation where possible
   - Follow semantic HTML structure
   - Implement proper OpenGraph tags

### Accessibility
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Screen reader compatibility
- Focus management

### Component Library Usage
- Shadcn UI components must not be modified directly
- Custom components should extend Shadcn UI patterns
- Maintain consistent styling with Tailwind classes
- Use Radix primitives for complex interactions

### Animation Guidelines
- Prefer CSS animations for simple transitions
- Use Framer Motion for complex animations
- Respect reduced-motion preferences
- Keep animations subtle and purposeful
- gemoetric organized

### Error Handling
- Implement proper error boundaries
- Provide meaningful error messages
- Handle edge cases gracefully
- Log errors appropriately

### Testing
- Unit tests for utilities
- Component testing with proper mocking
- E2E tests for critical paths
- Accessibility testing

## Development Workflow
1. Follow Git commit conventions
2. Use proper TypeScript types
3. Implement proper error handling
4. Test across different devices
5. Optimize for Core Web Vitals
6. Document complex implementations

## Key Features
- Interactive UI elements
- Responsive design
- Dark/light theme support
- Optimized performance
- SEO-friendly structure
- Accessibility compliance

Remember: The website should embody Mondecai's innovative nature while maintaining professional standards and technical excellence.