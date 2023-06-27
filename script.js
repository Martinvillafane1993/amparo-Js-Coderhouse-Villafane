// simulador de prestamos
document.addEventListener("DOMContentLoaded", function () {
    let btnCalcular = document.getElementById("calcular")
    btnCalcular.addEventListener("click", simulacion)

    function simulacion() {
        let monto = parseFloat(document.getElementById("monto").value);
        let intereses = parseFloat(document.getElementById("intereses").value);
        let cuotas = parseFloat(document.getElementById("cuotas").value);

        if (isNaN(monto) || isNaN(intereses) || isNaN(cuotas)) {
            console.log("Ingresa valores numéricos en todos los campos.");
            return;
        }
        let resultado = monto * (intereses / 100) / cuotas * 1.21
        let resultadoHTML = `
        <p>Monto: ${monto}</p>
        <p>Intereses: ${intereses}%</p>
        <p>Cuotas: ${cuotas}</p>
        <p>El resultado es: $${resultado}</p>
        `;
        document.getElementById("resultado").innerHTML = resultadoHTML;
    }

});
// simulador de prestamos finaliza


// formulario de registro inicia

let btnregistro = document.getElementById("btnregistro")
btnregistro.addEventListener("click", function (loguin) {
    loguin.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let codArea = document.getElementById("codArea").value;
    let celular = document.getElementById("celular").value;
    let generoX = document.getElementById("genero").value;
    let email = document.getElementById("email").value;
    let cuilCuit = document.getElementById("cuilCuit").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let edad = document.getElementById("edad").value;
    let provinciaX = document.getElementById("provincia").value


    class Usuario {

        constructor(nombre, apellido, codArea, celular, generoX, email, cuilCuit, fechaNacimiento, edad, provinciaX) {
            this.nombre = nombre
            this.apellido = apellido
            this.codArea = codArea
            this.celular = celular
            this.generoX = generoX
            this.email = email
            this.cuilCuit = cuilCuit
            this.fechaNacimiento = fechaNacimiento
            this.edad = edad
            this.provinciaX = provinciaX
        }

    }
    let usuarioX = new Usuario(nombre, apellido, codArea, celular, generoX, email, cuilCuit, fechaNacimiento, edad, provinciaX);
    localStorage.setItem("usuarioX", JSON.stringify(usuarioX));
});

// formulario de registro finaliza

console.log(localStorage.getItem("usuarioX"));

let usuarioRegistrado = [];

function Registrar_usuario (nombre,
    apellido,
    codArea,
    celular,
    generoX,
    email,
    cuilCuit,
    fechaNacimiento,
    edad,
    provinciaX) {

    const nuevoUsuario = new usuario (nombre,
        apellido,
        codArea,
        celular,
        generoX,
        email,
        cuilCuit,
        fechaNacimiento,
        edad,
        provinciaX)

        usuarioRegistrado.push (nuevoUsuario)
}
Registrar_usuario (nombre,
    apellido,
    codArea,
    celular,
    generoX,
    email,
    cuilCuit,
    fechaNacimiento,
    edad,
    provinciaX)
console.log (usuarioRegistrado)