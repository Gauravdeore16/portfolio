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
