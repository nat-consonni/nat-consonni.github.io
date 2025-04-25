// reusable functions


//
// Get .active navbar item
//
function highlightActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');  // Select .nav-link elements

  navLinks.forEach(link => {
    if (link.pathname === currentPath) {
      link.classList.add('active');  // Add 'active' class to the .nav-link
    } else {
      link.classList.remove('active');  // Remove 'active' class from the .nav-link
    }
  });
}

// Call the function to highlight the active link when the page loads
window.onload = highlightActiveNavLink;



//
// Get my local date and time
//
function updateUruguayTime() {
    const uruguayTime = new Date().toLocaleString("en-GB", {
      timeZone: "America/Montevideo",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  
    const datetimeEl = document.getElementById("datetime");
    if (datetimeEl) {
      datetimeEl.textContent = uruguayTime;
    }
  }
  
  function startUruguayClock() {
    updateUruguayTime();
    setInterval(updateUruguayTime, 1000);
  }

  
  //
  // Scroll back to top
  //
  function enableBackToTop() {
    const backToTopBtn = document.getElementById("backToTop");
    if (!backToTopBtn) return;
  
    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
  
  
  