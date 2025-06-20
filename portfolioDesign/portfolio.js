
const texts = ["Web Developer", "Web Designer", "UI/UX Enthusiast", "Frontend Developer"];
const textElement = document.querySelector(".typewriter-text");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = texts[textIndex];
    if (isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    } else {
        textElement.textContent = currentText.substring(0, charIndex++);
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(typeWriter, 1000); 
            return;
        }
    }
    setTimeout(typeWriter, isDeleting ? 50 : 100);
}

window.onload = typeWriter;

 document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); 

      const name = form.querySelector('input[type="text"]').value.trim();
      const email = form.querySelector('input[type="email"]').value.trim();
      const message = form.querySelector('textarea').value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      alert("Thank you, " + name + "! Your message has been sent.");
      form.reset(); 
    });
  });
