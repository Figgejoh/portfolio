// Title variables
const title = document.querySelector(".title");
const typedText = document.querySelector(".typed-text");

// Section variables
const projects = document.querySelector(".projects");
const hero = document.querySelector(".hero");

// Button variables
const chevronDown = document.querySelector(".fa-chevron-down");
const contactMe = document.querySelector(".contact-me");
const contactMeBottom = document.querySelector(".contact-me-bottom");
const viewWork = document.querySelector(".view-work");

// Modal variables
const closeModal = document.querySelector(".close-modal");
const popup = document.querySelector(".popup");

// Form variables
const contactForm = document.querySelector(".contact-form");

// Button listeners
viewWork.addEventListener("click", () => {
  projects.scrollIntoView({ behavior: "smooth" });
});

contactMe.addEventListener("click", () => {
  popup.classList.add("active");
  hero.scrollIntoView({ behavior: "smooth" });
});

contactMeBottom.addEventListener("click", () => {
  popup.classList.add("active");
  hero.scrollIntoView({ behavior: "smooth" });
});

closeModal.addEventListener("click", () => {
  popup.classList.remove("active");
});

chevronDown.addEventListener("click", () => {
  projects.scrollIntoView({ behavior: "smooth" });
});

// TypeWriter effect

let i = 0;
let txt = "Fredrik Johansson.";
let speed = 70;

function typeWriter() {
  if (i < txt.length) {
    typedText.textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

// Observer animations for cards

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");

  const observerOptions = {
    root: null,
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
  });
});

// Form confirmation that it has been sent
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;

  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Thank you for your message.");
        form.reset();
        popup.classList.remove("active");
      } else {
        alert("Something went wrong. Please try again.");
      }
    })
    .catch((error) => {
      alert("Could not send. Please check your network status");
    });
});
