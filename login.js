document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Realiza una petición AJAX al servidor para verificar las credenciales
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/login', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // El inicio de sesión fue exitoso, redirige al usuario a otra página
        window.location.href = '/index.html';
      } else {
        // El inicio de sesión falló, muestra un mensaje de error
        alert('Inicio de sesión incorrecto. Por favor, verifica tus credenciales.');
      }
    };
    xhr.send('username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password));
  });
  