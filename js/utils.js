// js/utils.js

//
// Get my local time
//
function startUruguayClock() {
  const datetimeElement = document.getElementById("datetime");
  if (!datetimeElement) return;

  function updateTime() {
    const now = new Date();
    const uruguayTime = now.toLocaleString("en-GB", { timeZone: "America/Montevideo" });
    datetimeElement.textContent = uruguayTime;
  }

  updateTime();
  setInterval(updateTime, 1000);
}


//
// Scroll back to top
//
function enableBackToTop() {
  const backToTopLink = document.querySelector('a[href="#"]');
  if (!backToTopLink) return;

  backToTopLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


//
// Get active state in navbar links
//
function highlightActiveNavLink() {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    let linkHref = link.getAttribute("href");

    // Normalize both current path and link href
    if (!linkHref.startsWith("/")) {
      linkHref = "/" + linkHref;
    }

    if (currentPath === linkHref) {
      link.classList.add("active");
    }
  });
}

  
  //
  // Fix navbar links
  //
  function fixNavbarLinks() {
    const links = document.querySelectorAll(".navbar-brand", ".nav-link");
    
    links.forEach(link => {
      const href = link.getAttribute("href");
      const currentPath = window.location.pathname; 

      if (currentPath.includes("/case-studies/")) {
        href = `../${href}`;
        links.setAttribute("href", href);
      }

    });
  }
  
  //
  // Fix image footer
  //
  function fixFooterImage() {
    const img = document.querySelector("#footer-avatar");
    if (!img) return;
    
    const currentPath = window.location.pathname;
    let src = img.getAttribute("src");
  
    // If we're inside "case-studies", adjust the path
    if (currentPath.includes("/case-studies/")) {
      src = `../${src}`;
    }
  
    img.setAttribute("src", src);
  }

//
// Set carousel height NO FUNCIONA AUN
//
function setCarouselHeight() {
  const carousel = document.querySelector('.carousel');
  const carouselItems = document.querySelectorAll('.carousel-item');
  let maxHeight = 0;

  carouselItems.forEach(item => {
    const itemHeight = item.offsetHeight;
    maxHeight = Math.max(maxHeight, itemHeight);
  });
  carousel.style.height = maxHeight + 'px';
}
window.addEventListener('load', setCarouselHeight);
window.addEventListener('resize', setCarouselHeight);


//
// Loading projects
//
function renderProjects(containerId, projectsToShow = 3) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let html = '<div class="row mb-4">';

  projects.slice(0, projectsToShow).forEach(project => {
    html += `
      <div class="col-sm-12 col-md-4 col-lg-4">
        <div class="border rounded p-3 hover-bg-light mb-4">
          <h3>${project.title}</h3>
          <p class="mb-0">${project.description}</p> <a href="${project.link}" class="d-inline">Read more →</a>
        </div>
      </div>
    `;
  });

  html += '</div>';

  container.innerHTML = html;
}