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
        formStatus.textContent = "Message sent successfully! We'll get back to you soon.";
        formStatus.style.color = "var(--golden)";
        contactForm.reset(); // Clear the form
    }, 2000);
});

document.addEventListener('DOMContentLoaded', function () {
    const blogList = document.getElementById('blog-list');

    // Fetch the latest blog posts from your API or RSS feed
    fetch('https://blog.prosyntax.in/api/latest-blogs') // Replace with your API endpoint
        .then(response => response.json())
        .then(data => {
            // Loop through the fetched data and create blog items
            data.posts.forEach(post => {
                const blogItem = document.createElement('div');
                blogItem.classList.add('blog-item');

                // Blog title
                const blogTitle = document.createElement('h3');
                blogTitle.textContent = post.title;
                blogItem.appendChild(blogTitle);

                // Blog description
                const blogDesc = document.createElement('p');
                blogDesc.textContent = post.description;
                blogItem.appendChild(blogDesc);

                // Read more link
                const readMoreLink = document.createElement('a');
                readMoreLink.href = post.url; // Link to the full blog post
                readMoreLink.target = '_blank';
                readMoreLink.textContent = 'Read More';
                blogItem.appendChild(readMoreLink);

                // Append the blog item to the blog list
                blogList.appendChild(blogItem);
            });
        })
        .catch(error => {
            console.error('Error fetching blog data:', error);
            blogList.innerHTML = '<p>Sorry, there was an issue loading the latest blogs.</p>';
        });
});

