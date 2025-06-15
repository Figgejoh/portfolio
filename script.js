const hamburger = document.querySelector(".hamburger");
const meny = document.querySelector(".nav-links");

const title = document.querySelector(".title");

const typedText = document.querySelector(".typed-text");

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
