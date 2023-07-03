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
// modificar el simulador a fetch con archivo local .Json
// simulador de prestamos finaliza


// formulario de registro inicia

const btnregistro = document.getElementById("btnregistro")

class Usuario {
    constructor(usuario) {
        this.usuario = usuario
    }
}

const saveLocalStorage = (usuario) => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
    console.log(localStorage.getItem("usuario"));
}

btnregistro.addEventListener("click", (loguin) => {

    loguin.preventDefault();

    let usuario = {}
    usuario.nombre = document.getElementById("nombre").value
    usuario.apellido = document.getElementById("apellido").value
    usuario.codArea = document.getElementById("codArea").value
    usuario.genero = document.getElementById("genero").value
    usuario.email = document.getElementById("email").value
    usuario.cuilCuit = document.getElementById("cuilCuit").value
    usuario.fechaNacinamiento = document.getElementById("fechaNacimiento").value
    usuario.edad = document.getElementById("edad").value
    usuario.provincia = document.getElementById("provincia").value

    usuario = new Usuario(usuario);
    saveLocalStorage(usuario);

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se ha registrado con exito',
        showConfirmButton: false,
        timer: 2000,
        customClass:{ container: 'my-alert-container',
        title: 'my-alert-title',
        content: 'my-alert-content',
        confirmButton: 'my-alert-button'
        },
        background: '#004aad'
        })
})

const usuarioLogeado = [Usuario]
console.log(usuarioLogeado)

// formulario de registro finaliza








