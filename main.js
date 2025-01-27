//   hamburger open close menu
let menuList = document.getElementById("menuList");
        menuList.style.maxHeight = "0px";
        function toggleMenu() {
            if (menuList.style.maxHeight == "0px") {
                menuList.style.maxHeight = "300px";
            } else {
                menuList.style.maxHeight = "0px";
            }
        }
// slider
const slider = document.querySelector('.resource-slider');

slider.addEventListener('mouseover', () => {
    slider.style.animationPlayState = 'paused'; // Pause animation
});

slider.addEventListener('mouseout', () => {
    slider.style.animationPlayState = 'running'; // Resume animation
});
// snippet pop up 
const popupOverlay = document.getElementById("popup-overlay");
function openPopup() {
  popupOverlay.style.display = "flex";
}
function closePopup() {
  popupOverlay.style.display = "none";
}
// Contact Form Submission Script
const contactForm = document.getElementById("contact-form");
const formStatus = document.querySelector(".form-status");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission
  // Simulate form processing
  formStatus.style.display = "block";
  formStatus.textContent = "Sending message...";
  formStatus.style.color = "var(--blue)";

  setTimeout(() => {
    formStatus.textContent =
      "Message sent successfully! We'll get back to you soon.";
    formStatus.style.color = "var(--golden)";
    contactForm.reset(); // Clear the form
  }, 2000);
});
// Load the header
fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });

// Load the footer
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });
// <!-- JavaScript to load header and footer End -->
const hashtags = [
  "#Coding",
  "#Tech",
  "#Design",
  "#ReactJS",
  "#AI",
  "#OpenSource",
  "#ProSyntax",
];

const track = document.querySelector(".hashtag-track");

hashtags.forEach((hashtag) => {
  const span = document.createElement("span");
  span.textContent = hashtag;
  track.appendChild(span);
});