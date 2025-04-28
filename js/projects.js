// project loading logic


//The idea behind having a separate projects.js file is to centralize all my project data in one place and potentially handle logic like:
//Loading project previews dynamically
//Rendering my latest projects section in the Home page
//Creating cards or links for the case studies
//Handling filters or sorting (e.g. by tag, type, year)
//Making it easier to scale without manually updating HTML every time


const projects = [
    {
      title: "Creating my UI Developer portfolio (Part 1)",
      description: "I wanted to create a portfolio that feels like me—from the pixel decisions to the codebase. Something that reflects where I come ...",
      link: "/case-studies/cs-1-creating-my-ui-developer-portfolio.html"
    },
    {
      title: "Designing a UX Framework for Internal Tools",
      description: "Helping companies standardize their internal products through a flexible UX and UI framework built from scratch...",
      link: "/case-studies/cs-2-ux-framework-internal-tools.html"
    },
    {
      title: "Building a Component Library for Fast Prototyping",
      description: "Designed and coded a lightweight UI component library to accelerate prototyping for product teams...",
      link: "/case-studies/cs-3-component-library.html"
    }
    // Adding more as I create more case studies!
  ];
  



