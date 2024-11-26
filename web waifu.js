function playaudio(id) {
    var audio = document.getElementById(id);
    if (audio) {
        audio.play();
    }
}
document.addEventListener('keyup', (e) => {
    if (e.key === 'PrintScreen') {
        alert('Screenshot tidak diperbolehkan!');
        document.body.style.display = 'none'; // Menyembunyikan konten
    }
});

var devtools = function() {};
devtools.toString = function() {
    alert('Jangan gunakan Developer Tools!');
    document.body.style.display = 'none';  // Menyembunyikan konten
};
console.log('%c', devtools);

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

<script>
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');

    function stopOtherVideos(currentVideo) {
        if (currentVideo === video1) {
            video2.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        } else {
            video1.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
    }

    window.addEventListener('message', function (event) {
        const data = JSON.parse(event.data);
        if (data.event === 'onStateChange') {
            if (data.info === 1) {
                stopOtherVideos(event.source === video1.contentWindow ? video1 : video2);
            }
        }
    });
</script>
function handleLogin() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  // Mendapatkan data yang disimpan saat registrasi
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (username === storedUsername && password === storedPassword) {
    alert("Login successful!");
    window.location.href = "web waifu.html"; // Arahkan ke halaman utama setelah login
  } else {
    alert("Invalid username or password!");
  }
  return false; // Prevent form from submitting
}

function handleRegister() {
  const username = document.getElementById("register-username").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  if (username && email && password) {
    // Simpan data registrasi di localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("Registration successful! Please login.");
    window.location.href = "login.html"; // Arahkan kembali ke halaman login
  } else {
    alert("Please fill in all fields!");
  }
  return false; // Prevent form from submitting
}
function handleRegister(event) {
  // Mencegah form dikirim secara default
  event.preventDefault();

  // Ambil nilai dari input
  const username = document.getElementById('register-username').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  // Validasi sederhana
  if (!username || !email || !password) {
    alert("Please fill in all fields.");
    return false;
  }

  // Debugging (menampilkan data di console)
  console.log("Username:", username);
  console.log("Email:", email);
  console.log("Password:", password);

  // Lakukan sesuatu dengan data (misalnya kirim ke server)
  // fetch('/api/register', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ username, email, password }),
  // }).then(response => {
  //   if (response.ok) {
  //     alert("Registration successful!");
  //     window.location.href = "login.html";
  //   } else {
  //     alert("Registration failed.");
  //   }
  // });

  // Sementara: tampilkan alert
  alert("Registration successful!");
  return false; // Mencegah reload halaman
}

function handleLogin(event) {
  // Mencegah form dikirim secara default
  event.preventDefault();

  // Ambil nilai dari input
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // Validasi sederhana (hanya contoh)
  if (!email || !password) {
    alert("Please fill in all fields.");
    return false;
  }

  // Debugging (menampilkan data di console)
  console.log("Email:", email);
  console.log("Password:", password);

  // Simulasi login sukses
  if (email === "test@example.com" && password === "1234") {
    alert("Login successful!");

    // Arahkan ke halaman "Web Waifu"
    window.location.href = "web-waifu.html";
  } else {
    alert("Invalid email or password. Please try again.");
  }

  return false; // Mencegah reload halaman
}