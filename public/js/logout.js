const logoutFormHandler = async () => {
  console.log(logoutFormHandler)
    const response = await fetch('/api/users/login-signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/login-signup');
    } else {
      alert('Failed to log out.');
    }
  };
  
  document
  .querySelector('#logout-button')
  .addEventListener('click', logoutFormHandler);
