function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (username === "user123" && password === "pass123") {
    window.location.href = "vanquest.html"; // Immediate redirect
  } else {
    message.style.color = "red";
    message.textContent = "Invalid credentials.";
  }
}
