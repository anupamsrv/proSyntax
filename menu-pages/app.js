// Function to dynamically load components (header & footer)
function loadComponent(elementId, file) {
  fetch(file)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error loading ${file}: ${response.statusText}`);
      }
      return response.text();
    })
    .then((data) => {
      const element = document.getElementById(elementId);
      if (element) {
        element.innerHTML = data;
      } else {
        console.error(`Element with ID "${elementId}" not found.`);
      }
    })
    .catch((error) => console.error(error));
}

// Ensure DOM is fully loaded before executing
document.addEventListener("DOMContentLoaded", function () {
  loadComponent("header-container", "header.html");
  loadComponent("footer-container", "footer.html");
});
loadComponent("header-container", "../header.html");
loadComponent("footer-container", "../footer.html");

// Mouse tracking animation
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

// Scroll animations
const scrollElements = document.querySelectorAll('.about-section');

const checkScroll = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    scrollElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    });
};

window.addEventListener('scroll', checkScroll);
checkScroll();

