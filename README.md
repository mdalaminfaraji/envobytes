# Envobyte - Digital Services Company Website

![Envobyte Logo](/public/Envobyte/logo-white.png)

A modern, responsive website for Envobyte, an IT company that helps businesses bring their ideas to life easily and affordably.

## Project Overview

Envobyte is a full-featured company website built with Next.js and Tailwind CSS. It showcases the company's services, portfolio, team members, and provides contact functionality. The website features a clean, professional design with smooth transitions, interactive components, and responsive layouts that work across all device sizes.

## Features

- **Responsive Layout**: Fully responsive design that adapts to desktop, tablet, and mobile devices
- **Modern UI**: Contemporary design with gradients, animations, and clean typography
- **Component-Based Architecture**: Modular components for maintainability and reusability
- **Interactive Elements**: 
  - Tabbed interfaces for service categories
  - Project portfolio with category filters
  - Expandable FAQ accordions
  - Team member and testimonial sliders
  - Contact form with validation
- **Performance Optimized**: Lazy loading images and optimized asset loading
- **SEO Friendly**: Semantic HTML and structured metadata

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation
- **React**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Icons**: Icon library for social media and UI elements
- **CSS Animations**: Custom animations for interactive elements
- **JavaScript**: ES6+ features for enhanced functionality

## Project Structure

```
envobyte/
├── public/
│   └── Envobyte/           # Project assets (images, icons)
├── src/
│   ├── app/                # Next.js app router pages
│   ├── components/         # React components
│   │   ├── home/           # Homepage-specific components
│   │   │   ├── Details.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── FrequentlyAskedQuestions.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── HowWeWork.jsx
│   │   │   ├── index.js    # Component exports
│   │   │   ├── OurTeamMembers.jsx
│   │   │   ├── Portfolio.jsx
│   │   │   ├── Reviews.jsx
│   │   │   └── Services.jsx
│   │   └── shared/         # Shared components (Header, etc.)
│   └── lib/                # Data and utility functions
│       ├── portfoliosData.js
│       ├── reviewsData.js
│       └── servicesData.js
├── .gitignore
├── jsconfig.json
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
```

## Component Details

- **HeroSection**: Main landing section with call-to-action buttons and key statistics
- **Services**: Tabbed interface showcasing different service categories with detailed cards
- **Details**: Three-column layout highlighting key benefits and features
- **Portfolio**: Filterable grid of project showcases with pagination
- **HowWeWork**: Step-by-step process visualization with circular design elements
- **FrequentlyAskedQuestions**: Expandable accordion for common questions
- **OurTeamMembers**: Team showcase with slider functionality
- **Reviews**: Client testimonials with rating stars and profile information
- **Footer**: Contact form, company information, and navigation links

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the website.

## Customization

- **Content**: Update the content in the component files and data files in the `src/lib` directory
- **Styling**: Modify the Tailwind CSS classes or add custom CSS in the component files
- **Images**: Replace images in the `public/Envobyte` directory with your own assets

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js.

```bash
npm run build
# or
yarn build
```

This will create an optimized production build of your website.

## Best Practices Implemented

- **Code Organization**: Modular components with clear separation of concerns
- **Accessibility**: Semantic HTML and ARIA attributes for better screen reader support
- **Performance**: Optimized images and efficient rendering with React
- **Maintainability**: Consistent code style and component structure
- **Responsive Design**: Mobile-first approach with fluid layouts
- **Clean Code**: Well-commented code with descriptive variable names

## License

[MIT](https://choosealicense.com/licenses/mit/)
