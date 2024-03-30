
var clave, usuario;

//valores predeterminados
usuario = "victoria@gmail.com";
clave = "Usuario123";

//Validación de credenciales
const form = document.getElementById('loginForm');

form.addEventListener('submit', (event) => {
//Evita el envío del formulario por defecto
    event.preventDefault();
    
//Obtener los valores de los campos de entrada
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

//Validar las credenciales ingresadas
    if (email === usuario && password === clave){
        alert('Inicio de sesión exitoso');
        window.location.href = '../HTML/menu.html';
    }else{
        alert('Credenciales incorrectas. Por favor, intente nuevamente.');
    }
});