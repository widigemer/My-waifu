function handleRegister(event) {
  event.preventDefault();

  // Ambil data dari form register
  const username = document.getElementById("register-username").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  // Validasi sederhana
  if (!username || !email || !password) {
    alert("All fields are required!");
    return false;
  }

  // Simpan data ke localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push({ username, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Register successful! Please login.");
  window.location.href = "login.html"; // Redirect ke halaman login
}