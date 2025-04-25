// js/injectComponents.js
async function loadComponent(selector, filePath, callback) {
  const target = document.querySelector(selector);
  if (!target) return;

  try {
    const res = await fetch(filePath);
    const html = await res.text();
    target.innerHTML = html;

    // Run callback (e.g., start clock) after component is injected
    if (typeof callback === "function") {
      callback();
    }
  } catch (error) {
    console.error(`Error loading ${filePath}`, error);
  }
}

  