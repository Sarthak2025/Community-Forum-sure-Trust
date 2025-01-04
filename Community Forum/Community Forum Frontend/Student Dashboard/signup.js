const signupForm = document.getElementById('signupForm');
const message = document.getElementById('message');

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('https://api.example.com/student-signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      alert('Account created successfully!');
      window.location.href = 'index.html';
    } else {
      throw new Error('Failed to create account');
    }
  } catch (error) {
    message.textContent = error.message;
  }
});
