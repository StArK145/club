


document.addEventListener("DOMContentLoaded", () => {
    const interface = document.getElementById("relodelogo");
  
    // Fade out the interface after 2 seconds
    setTimeout(() => {
      interface.classList.add("hidden");
    }, 1000); // Adjust the delay as needed
  });
document.addEventListener("DOMContentLoaded", () => {
    const interface = document.getElementById("relode");

     // Disable scrolling
  document.body.style.overflow = "hidden";

  
    // Fade out the interface after 2 seconds
    setTimeout(() => {
      interface.classList.add("hidden");

      // Enable scrolling
    document.body.style.overflow = "auto";
    }, 2000); // Adjust the delay as needed
  });










const starContainer = document.querySelector('.star-container');
const starCount = 400; // Number of stars

for (let i = 0; i < starCount; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  // Random size for each star
  const size = Math.random() * 3 + 1; // Star size between 1px and 4px
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  // Random initial position
  star.style.top = `${Math.random() * 200}%`;
  star.style.left = `${Math.random() * 99}%`;

  // Random animation duration (no delay)
  star.style.animationDuration = `${Math.random() * 10 + 5}s`; // Duration between 5s and 15s

  starContainer.appendChild(star);
  const colors = ['#fff', '#F4F5FF', '#f99', '#ff0000'];
  star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}


// ham . . . . 
function toggleMenu() {
    const navLinks = document.getElementById('navul');
    const hamburger = document.getElementById('hamburger');

    // Toggle active class for both menu and hamburger icon
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}








// scrolltry......................



 
// Register the plugin
gsap.registerPlugin(ScrollTrigger);

// Create the scroll-based animation
gsap.timeline({
    scrollTrigger: {
        trigger: ".logo-container", // Element to track
        start: "top center", // When the top of the element hits the center of the viewport
        end: "bottom top", // When the bottom of the element leaves the viewport
        scrub: true, // Smooth animation tied to scroll
        markers: false, // Set to true for debug markers
    },
})
.fromTo(".logo-container", 
    { scale: 0.5, opacity: 1 }, // Initial state
    { scale: 1.5, opacity: 1, duration: 1 } // Scale up and fade in
)
.to(".logo-container", 
    { scale: 2, opacity: 0, duration: 1 } // Scale up further and fade out
);

// Create the scroll-based animation
gsap.timeline({
    scrollTrigger: {
        trigger: "#welcome", // Element to track
        start: "top bottom", // When the top of the element hits the bottom of the viewport
        end: "bottom top", // When the bottom of the element leaves the viewport
        scrub: true, // Smooth animation tied to scroll
        markers: false, // Set to true for debug markers
    },
})
.fromTo("#welcome", 
    { scale: 0.5, opacity: 0,duration: 0  }, // Initial state
    { scale: 1, opacity: 1, duration: 1 } // Scale up and fade in
)
.to("#welcome", 
    { scale: 1.5, opacity: 0, duration: 1 } // Scale up further and fade out
);

