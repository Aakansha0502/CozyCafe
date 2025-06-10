document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("form-status");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      if (name && email && message) {
        status.textContent = "Thank you for your message, " + name + "! We'll get back to you soon.";
        form.reset();
      } else {
        status.textContent = "Please fill out all fields.";
        status.style.color = "red";
      }
    });
  });
  