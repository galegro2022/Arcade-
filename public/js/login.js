const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-input').value.trim();
    const password = document.querySelector('#password-input').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to login.');
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-input').value.trim();
    const email = document.querySelector('#email-input').value.trim();
    const password = document.querySelector('#password-input').value.trim();
  
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
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('#signup-button')
    .addEventListener('submit', signupFormHandler);
  