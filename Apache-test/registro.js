document.getElementById('register').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
  
    // Realiza una petición AJAX al servidor para registrar al usuario
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/register', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // El registro fue exitoso, redirige al usuario a otra página
        window.location.href = '/dashboard';
      } else {
        // El registro falló, muestra un mensaje de error
        alert('Error al registrar usuario. Por favor, inténtalo nuevamente.');
      }
    };
    xhr.send('username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password) + '&email=' + encodeURIComponent(email));
  });
  