function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Ambil data pengguna dari localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Cari pengguna berdasarkan email dan password
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    alert(`Welcome, ${user.username}!`);
    window.location.href = "web waifu.html"; // Redirect ke halaman utama
  } else {
    alert("Invalid email or password.");
  }
}