// js/injectComponents.js

async function loadComponent(selector, filePath) {
  const target = document.querySelector(selector);
  if (!target) return;

  try {
    const res = await fetch(filePath);
    const html = await res.text();
    target.innerHTML = html;

    autoInitComponent(filePath);
  } catch (error) {
    console.error(`Error loading ${filePath}`, error);
  }
}

function autoInitComponent(filePath) {
  const name = filePath
    .split("/")
    .pop()
    .replace(".html", ""); // Extract "navbar", "footer", etc.

  const functionName = `after${capitalizeFirstLetter(name)}Loaded`;
  if (typeof window[functionName] === "function") {
    window[functionName](); // Call afterNavbarLoaded(), afterFooterLoaded(), etc.
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
