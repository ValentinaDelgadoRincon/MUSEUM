const form = document.getElementById('loginForm');
  const loginContainer = document.getElementById('loginContainer');
  const successContainer = document.getElementById('successContainer');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    loginContainer.classList.add('hidden');
    successContainer.classList.remove('hidden');
  }); 