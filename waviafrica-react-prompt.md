# Prompt for Creating React Project Similar to Messaging App

Create a complete React application that replicates the functionalities, design, and structure of the Waviindia website (https://waviindia.com/). The website is a landing page for a communication infrastructure service providing SMS, Email, and WhatsApp messaging for Indian businesses.

## Project Requirements

- **Framework**: Use React 18+ with modern hooks and functional components.
- **Routing**: Implement React Router for multi-page navigation.
- **Styling**: Use Tailwind CSS for responsive, modern styling to match the clean, professional design of the original site.
- **State Management**: Use React's built-in state or Context API for simple state needs (no complex global state required).
- **Forms**: Use React Hook Form for form handling and validation.
- **Icons**: Use React Icons or similar for social media and UI icons.
- **Responsiveness**: Ensure the app is fully responsive across desktop, tablet, and mobile devices.
- **Accessibility**: Include basic ARIA attributes and semantic HTML.
- **Build Tool**: Use Vite for fast development and building.
- **Deployment**: Include instructions for deployment to a static host like Vercel or Netlify.

## Application Structure

### Pages/Components

1. **Home Page (`/`)**:
   - **Hero Section**: Large banner with tagline "Reach every carrier. Everywhere on the continent." Include call-to-action buttons like "Contact sales" and "See products".
   - **Products Overview Section**: Highlight three channels - SMS, Email & SMTP, WhatsApp (with "Coming Soon" badge for WhatsApp).
   - **Why Messaging App Section**: Explain benefits like "Built for India", "One API, one dashboard", "Compliance-ready".
   - **Ready Section**: Call-to-action to "Ship your first message this week" with contact links.
   - **Footer**: Include company info, links to Products, Company (About, Blog, Docs, Contact), Legal (Privacy, Terms), and social media links (X/Twitter, Instagram, YouTube).

2. **Products Page (`/products`)**:
   - Detailed sections for each product:
     - **SMS**: Direct carrier routes, transparent pricing, delivery receipts, use cases (OTPs, alerts, marketing).
     - **Email & SMTP**: Transactional/marketing, Postfix + OpenDKIM stack, DKIM/SPF/DMARC, tracking, suppression lists, webhooks.
     - **WhatsApp**: Official Business API, templates, two-way conversations, automations (coming soon, with early access signup).
   - Include anchor links for each section (e.g., #sms, #email, #whatsapp).

3. **About Page (`/about`)**:
   - Company information, mission, team (if available), and background on being built for India.

4. **Blog Page (`/blog`)**:
   - List of blog posts with titles, excerpts, dates, and links to full posts. Include pagination or load more functionality.

5. **Docs Page (`/docs`)**:
   - Documentation hub with links to API docs, guides, and integration tutorials.

6. **Contact Page (`/contact`)**:
   - Contact form with fields for name, email, company, message, and use case (volumes, compliance needs).
   - Form validation and submission handling (mock API or email service integration).
   - Additional contact info like email or phone.

7. **Privacy Page (`/privacy`)**:
   - Privacy policy content.

8. **Terms Page (`/terms`)**:
   - Terms of service content.

### Shared Components

- **Header/Navigation**: Sticky header with logo, navigation links (Products, Company dropdown with About/Blog/Docs/Contact, Legal dropdown), and "Sign in" button linking to external app (https://app.waviindia.com/login).
- **Footer**: As described in Home Page.
- **Button**: Reusable button component for CTAs.
- **Card**: For product highlights.
- **Form Components**: Input, Textarea, Select for forms.

### Functionalities to Implement

- **Navigation**: Smooth scrolling to sections on Home, routing to other pages.
- **Contact Form**: Validate inputs, show success/error messages, simulate submission.
- **Social Links**: Open in new tabs.
- **Responsive Design**: Use Tailwind's responsive classes for mobile-first design.
- **SEO**: Include meta tags, titles, and descriptions for each page.
- **Performance**: Optimize images, lazy load components if needed.
- **Testing**: Include basic unit tests for components using Jest and React Testing Library.

## Development Steps

1. Set up the React project with Vite.
2. Install dependencies: react-router-dom, tailwindcss, react-hook-form, react-icons.
3. Create the component structure and pages.
4. Implement styling to closely match the original site's design (clean, blue/white color scheme, sans-serif fonts).
5. Add routing and navigation.
6. Implement forms and interactions.
7. Test responsiveness and functionality.
8. Build and deploy.

## Additional Notes

- The original site emphasizes local Indian support and compliance, so include relevant messaging.
- For WhatsApp section, include a "Join early access" form or link.
- Use placeholder content where specific details aren't available.
- Ensure the app feels like a professional business website.

This prompt should enable generating a fully functional React app that mirrors the original website's core features and user experience.