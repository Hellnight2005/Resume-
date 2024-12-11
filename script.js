// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
  // Select elements for animation
  const header = document.querySelector("header");
  const skillsSection = document.getElementById("skills");
  const projectsSection = document.getElementById("projects");
  const contactSection = document.getElementById("contact");

  // Header animation
  gsap.from(header, {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power3.out",
  });

  // Skills section animation
  gsap.from(skillsSection, {
    duration: 1,
    opacity: 0,
    y: 50,
    delay: 0.3,
    ease: "power3.out",
  });

  // Projects section animation
  gsap.from(projectsSection, {
    duration: 1,
    opacity: 0,
    y: 50,
    delay: 0.6,
    ease: "power3.out",
  });

  // Contact section animation
  gsap.from(contactSection, {
    duration: 1,
    opacity: 0,
    y: 50,
    delay: 0.9,
    ease: "power3.out",
  });

  // Animation for project cards (individual project divs)
  const projectCards = document.querySelectorAll(".project");
  projectCards.forEach((card, index) => {
    gsap.from(card, {
      duration: 0.8,
      opacity: 0,
      y: 50,
      delay: 1 + index * 0.2, // Staggering the cards
      ease: "power3.out",
    });
  });
});
