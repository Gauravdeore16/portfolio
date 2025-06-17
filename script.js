function toggleSkills() {
  const skills = document.getElementById("skills-list");
  skills.style.display = (skills.style.display === "none") ? "block" : "none";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function showAlert() {
  alert("Thanks for contacting me! I’ll get back to you soon.");
  return false; // Prevent form from submitting
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent actual form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    alert("⚠️ All fields are required!");
    return;
  }

  // Basic email format check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("❌ Please enter a valid email address!");
    return;
  }

  // All good ✅
  alert("🎉 Message sent successfully (frontend only for now)!");
  document.getElementById("contactForm").reset();
});
