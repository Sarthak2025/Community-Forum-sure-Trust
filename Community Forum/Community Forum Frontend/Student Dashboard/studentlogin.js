const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('https://api.example.com/student-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      alert('Login successful!');
      window.location.href = '/student-dashboard.html';
    } else {
      throw new Error('Invalid credentials');
    }
  } catch (error) {
    message.textContent = error.message;
  }
});
 