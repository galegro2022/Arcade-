const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#password-input').value.trim();
  console.log(email)
  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response)

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to login.');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log("RUNNING ON LINE 25")
  const username = document.querySelector('#username-input').value.trim();
  const email = document.querySelector('#signup-email').value.trim();
  const password = document.querySelector('#signup-password-input').value.trim();

  console.log(username, email, password, "HERE");

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('#login-button')
  .addEventListener('click', loginFormHandler);

document
  .querySelector('#signup-button')
  .addEventListener('click', signupFormHandler);
