
var clave, usuario;

//valores predeterminados
usuario = "victoria@gmail.com";
clave = "Usuario123"

//Validación de credenciales
function verificarCredenciales(event) {
    const usuarioIngresado = document.getElementById("email").value;
    const contrasenaIngresada = document.getElementById("password").value;

    if(usuarioIngresado === usuario && contrasenaIngresada === clave) {
        document.getElementById("message").textContent = "Inicio de sesión exitoso";
        window.location.href = '../HTML/menu.html';
    }else{
        document.getElementById("message").textContent = "Credenciales incorrectas";
    }
} //cierre

// asociar la funcion al formulario
document.getElementById("lohin-form").addEventListener("submit", verificarCredenciales);

