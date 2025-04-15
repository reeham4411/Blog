if (window.location.pathname.endsWith("index.html")) {
  alert("Welcome to Pakistani Dramas Blogging Website!");
}

const form = document.getElementById("loginForm");
if (form) {
  form.addEventListener("submit", (e) => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const emailCheck = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const passwordCheck = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    let msg = "";

    if (!name) msg += "Name is required.\n";
    if (!emailCheck.test(email)) msg += "Enter a valid email address.\n";
    if (!passwordCheck.test(password)) msg += "Password must be at least 6 characters and include letters and numbers.\n";

    if (msg) {
      alert(msg);
      e.preventDefault();
    }
  });
}

window.onscroll = () => {
  const btn = document.getElementById("backToTopBtn");
  btn.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? "block" : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleContent(id, btn) {
  const content = document.getElementById(id);
  const isHidden = content.style.display === "none" || content.style.display === "";
  content.style.display = isHidden ? "block" : "none";
  btn.textContent = isHidden ? "Show Less" : "Show More";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  function updateDateTime() {
    try {
      const now = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const timeText = now.toLocaleString("en-US", options);
      const timeEl = document.getElementById("currentDateTime");
      if (timeEl) {
        timeEl.textContent = timeText;
      } else {
        console.error("Element with ID 'currentDateTime' not found.");
      }
    } catch (err) {
      console.error("Error in updateDateTime:", err);
    }
  }

  updateDateTime();
  setInterval(updateDateTime, 1000);
});
