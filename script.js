document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !email.includes('@')) {
    alert('Por favor, ingrese un correo electrónico válido.');
    return;
  }

  if (password.length < 8) {
    alert('La contraseña debe tener al menos 8 caracteres.');
    return;
  }

  alert('¡Acceso concedido! Validación exitosa.');
});