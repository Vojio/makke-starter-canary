Before diving into the best practices, please note that you may need to adapt the globs depending on your project's specific structure and file types.

---
name: nextjs-best-practices.mdc
description: Best practices for Next.js applications and routing
globs: **/*.{ts,tsx,js,jsx}
---

- Use the App Router for improved performance and simpler data fetching
- Implement proper error boundaries to handle runtime errors gracefully
- Utilize Next.js built-in optimizations like image optimization and code splitting
- Leverage Next.js middleware for authentication and redirects

---
name: react-best-practices.mdc
description: Best practices for React component development and state management
globs: **/*.{ts,tsx,js,jsx}
---

- Use functional components with hooks instead of class components
- Implement proper prop type validation using PropTypes or TypeScript
- Utilize React.memo for performance optimization of pure components
- Manage global state with Context API or a state management library

---
name: tailwindcss-best-practices.mdc
description: Best practices for using Tailwind CSS in your project
globs: **/*.{ts,tsx,js,jsx,css}
---

- Use utility-first approach for consistent and maintainable styles
- Create custom components with `@apply` directive for reusability
- Utilize Tailwind's responsive utilities for mobile-first design
- Optimize build size by purging unused styles

---
name: motion-best-practices (formerly framer-motion)
description: Best practices for creating animations with Framer Motion
globs: **/*.{ts,tsx,js,jsx}
---

- Use declarative animations for better performance and maintainability
- Implement gesture-based animations for interactive elements
- Utilize variants for reusable animation states
- Optimize animations for performance using `initial={false}` and `animate` prop

---
name: vercel-analytics-best-practices.mdc
description: Best practices for using Vercel Analytics in your Next.js project
globs: **/*.{ts,tsx,js,jsx}
---

- Integrate Vercel Analytics using the official package for accurate tracking
- Use custom events to track specific user interactions
- Implement proper privacy measures and comply with data protection regulations
- Analyze and optimize your website based on the insights provided by Vercel Analytics

---
name: vercel-speed-insights-best-practices.mdc
description: Best practices for optimizing website performance with Vercel Speed Insights
globs: **/*.{ts,tsx,js,jsx}
---

- Use Vercel Speed Insights to identify and prioritize performance improvements
- Optimize images and assets using Next.js built-in features
- Implement proper caching strategies for faster page loads
- Utilize Vercel's edge runtime for improved performance and reduced latency

---
name: typescript-best-practices.mdc
description: TypeScript coding standards and type safety guidelines
globs: **/*.{ts,tsx}
---

- Use strict null checks to prevent null pointer exceptions
- Prefer interfaces over types for better extensibility
- Implement proper type guards and assertions for runtime type checking
- Utilize type inference to reduce unnecessary type annotations

---
name: biome-best-practices.mdc
description: Best practices for using Biome for code formatting and linting
globs: **/*.{ts,tsx,js,jsx}
---

- Configure Biome to enforce consistent code style across your project
- Use Biome's lint rules to catch common errors and enforce best practices
- Integrate Biome into your CI/CD pipeline for automated code quality checks
- Utilize Biome's auto-fix capabilities to quickly resolve formatting issues
