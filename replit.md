# HMR Technologies - Replit Development Guide

## Overview
HMR Technologies' project is a comprehensive platform integrating a corporate website with a custom CRM system. It manages operations, client accounts, job listings, and email marketing. The CRM includes dashboard KPIs, lead and resume management, and smart notifications. The vision is to provide AI-powered services focusing on business solutions and efficient development.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture
The application is built with a React 18 frontend using TypeScript, Wouter for routing, Tailwind CSS for styling, and Radix UI/shadcn/ui for components. State management uses TanStack Query, and forms are handled with React Hook Form and Zod. Vite serves as the build tool.

The backend is a Node.js Express.js REST API with TypeScript. It uses PostgreSQL managed by Drizzle ORM (via Neon Database for serverless PostgreSQL). Zod schemas are shared for validation, and Express sessions handle session management.

Core features include:
- **Database Schema**: `users`, `newsletter_subscriptions`, `job_applications`, `contact_submissions`, `blog_posts`, `job_listings`.
- **API Endpoints**: For newsletter, job applications, contact forms, blog posts, and job listings.
- **Frontend Pages**: Home, Services (with individual service pages for UI/UX Design, Custom Software, Web Development, Mobile App, QA Testing, Talent Solutions), About, Careers, Blog, FAQ, Contact.
- **UI Components**: Responsive navigation, forms, cards, and a newsletter signup.
- **Data Flow**: Forms use client-side Zod validation and React Hook Form, submitting via TanStack Query to Express APIs that re-validate and interact with PostgreSQL via Drizzle ORM.
- **CRM System**: A unified dashboard combining CRM and CMS functionalities, including overview, client management, content management, lead/contact management, career management, and email marketing. Features include unified authentication, KPI cards, activity logs, and smart notifications. Leads are auto-created from contact forms and newsletters.
- **Content Management System (CMS)**: Secure authentication with JWT and session management, supporting user roles. Includes a dashboard and API routes for managing blog posts and job listings.
- **Design Elements**: Uses Bento Grid for services showcase, unique color themes for service pages, and integrates with Google Calendar for booking.
- **Deployment**: Configured for development (Vite/Express) and production (static assets + Express server) with environment variables for database connection.

## External Dependencies
- **@neondatabase/serverless**: Neon database client.
- **drizzle-orm**: TypeScript ORM.
- **@tanstack/react-query**: Server state management.
- **@radix-ui/***: UI primitive components.
- **react-hook-form**: Form handling.
- **zod**: Schema validation.
- **tailwindcss**: Utility-first CSS framework.

## Recent Changes

- January 7, 2025: Revolutionary Solutions Page Redesign with Enhanced User Experience
  - Completely reimagined Solutions page with fresh, modern approach inspired by user feedback
  - **New Hero Section**: "Say Hi to your brand's true potential" with engaging headline and compelling CTA
  - **Interactive Platform Cards**: Large 2-column grid layout with hover animations and scaling effects
  - **Rich Content Cards**: Each solution features icons, descriptions, key benefits, and real statistics
  - **Visual Statistics**: Added performance metrics (users, engagement, growth percentages) for credibility
  - **Process Timeline**: Added development process visualization (Requirement Analysis → Designing → Development → QA → Release)
  - **Enhanced Interactivity**: Hover effects, gradient backgrounds, and smooth transitions throughout
  - **User-Centric Design**: Focused on benefits and outcomes rather than technical features
  - **Professional CTA Section**: Clear call-to-action with multiple engagement options
  - Application running successfully with improved user experience focus

- January 7, 2025: Professional Navigation Redesign with Enhanced Dropdown Menus
  - Completely redesigned navigation bar according to user specifications with modern SaaS/B2B aesthetic
  - **Services Dropdown**: Custom Software Development, UI/UX Design, Web Development, Mobile App Development, QA & Testing, Talent Solutions & IT Staff Augmentation
  - **Solutions Dropdown**: Two-section layout with Platform Solutions (Digital Community Platform, Dating Apps, E-commerce Marketplaces, Travel & Hospitality, Booking Platforms, SaaS Platforms, Marketplace Platforms) and Resources section with divider (Success Stories, Use Cases)
  - **Company Dropdown**: About Us, Careers, FAQs with clean icons and descriptions
  - Enhanced dropdown animations, hover effects, and professional visual hierarchy
  - Implemented responsive design with mobile-optimized navigation and collapsible menus
  - Added proper state management for all dropdown interactions (Services, Solutions, Company)
  - Professional styling with icons, descriptions, and smooth transitions for better user experience

- January 7, 2025: Supabase Authentication Implementation and Configuration Cleanup
  - Removed unused database/deployment configurations from .replit as requested by user
  - Implemented proper Supabase Google OAuth authentication flow for dashboard protection
  - Updated ProtectedRoute component with improved error handling and loading states
  - Fixed CmsLogin component to use Supabase authentication instead of custom API
  - Created reusable LogoutButton component with proper Supabase sign-out functionality
  - Updated Dashboard component to integrate with Supabase auth state management
  - Fixed TypeScript errors in Dashboard component for better type safety
  - Authentication now properly protects /dashboard route - users must sign in with Google to access

- January 7, 2025: Enhanced Navigation with Dropdown Menus and Individual Success Story Pages
  - Updated header navigation with professional dropdown menus for Solutions, Use Cases, and Success Stories sections
  - Added enhanced dropdown headers with titles, descriptions, and large icons with professional dividers
  - Created 5 individual success story pages: E-commerce Marketplace, Food Delivery Application, On-Demand Application, Dating Application, and Taxi Booking Application
  - Implemented comprehensive case study pages with metrics, testimonials, challenges/solutions, and call-to-action sections
  - Enhanced navigation with proper mobile responsiveness and smooth hover animations
  - Added proper routing for all individual success story pages (/success-stories/e-commerce, /success-stories/food-delivery, etc.)
  - Integrated unique color themes and branding for each success story type (emerald for e-commerce, orange for food delivery, purple for on-demand, pink for dating, yellow for taxi booking)

- January 7, 2025: Modern UI Sections - Solutions, Use Cases, and Success Stories
  - Created comprehensive Solutions page with 6 solution categories featuring AI-Powered Development, Enterprise Security, Team Collaboration, Analytics & Insights, Global Infrastructure, and Rapid Deployment
  - Built Use Cases page showcasing 6 industry applications (Enterprise, E-commerce, Healthcare, Education, FinTech, Manufacturing) with performance metrics and technology stacks
  - Designed Success Stories page with customer testimonials, real metrics, case studies, and avatar components
  - Implemented modern SaaS/B2B design aesthetic inspired by Stripe, Intercom, and Notion with clean gradients and interactive components
  - Added responsive card-based layouts with hover effects, smooth animations, and professional typography using Tailwind CSS
  - Integrated Lucide React icons for visual consistency and added proper routing for /solutions, /use-cases, and /success-stories
  - Enhanced user experience with accessibility considerations and mobile-responsive design principles

- January 7, 2025: Networking Configuration and Multi-Port Support
  - Implemented configurable port system supporting port 3000 for RG/Test repositories and port 5000 for main repositories
  - Created automatic repository type detection using environment variables (REPO_TYPE, REPL_SLUG, NODE_ENV)
  - Built centralized configuration management system in server/config.ts for port and environment handling
  - Added helper scripts for different repository modes and enhanced startup logging with repository type and access URL information
  - Fixed TypeScript errors for compression module and created comprehensive NETWORKING.md documentation