// simulador de prestamos
document.addEventListener("DOMContentLoaded", function () {
    let btnCalcular = document.getElementById("calcular");
    btnCalcular.addEventListener("click", simulacion);

    function simulacion() {
        let monto = parseFloat(document.getElementById("monto").value);
        let intereses = parseFloat(document.getElementById("intereses").value);
        let cuotas = parseFloat(document.getElementById("cuotas").value);

        if (isNaN(monto) || isNaN(intereses) || isNaN(cuotas)) {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Ingrese valores numericos",
                showConfirmButton: false,
                timer: 2000,
                customClass: {
                    container: "my-alert-container",
                    title: "my-alert-title",
                    content: "my-alert-content",
                    confirmButton: "my-alert-button",
                },
                background: "#004aad",
            });
            return;
        }
        var interesMensual = intereses / 12;
        var montoTotal = monto * (1 + 0.21);
        var cuota =
            (montoTotal * interesMensual) /
            (1 - Math.pow(1 + interesMensual, -cuotas));

        cuota.toFixed(2);
        let resultadoHTML = `
        <p>Monto: ${montoTotal.toFixed(2)}</p>
        <p>Intereses: ${interesMensual.toFixed(2)}%</p>
        <p>Cuotas: ${cuota.toFixed(2)}</p>        `;
        document.getElementById("resultado").innerHTML = resultadoHTML;
    }
});

// simulador de prestamos finaliza

// formulario de registro inicia

const btnregistro = document.getElementById("btnregistro");

class Usuario {
    constructor(usuario) {
        this.usuario = usuario;
    }
}

const saveLocalStorage = (usuario) => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
    console.log(localStorage.getItem("usuario"));
};

btnregistro.addEventListener("click", (loguin) => {
    loguin.preventDefault();

    let usuario = {};
    usuario.nombre = document.getElementById("nombre").value;
    usuario.apellido = document.getElementById("apellido").value;
    usuario.codArea = document.getElementById("codArea").value;
    usuario.genero = document.getElementById("genero").value;
    usuario.email = document.getElementById("email").value;
    usuario.cuilCuit = document.getElementById("cuilCuit").value;
    usuario.fechaNacinamiento = document.getElementById("fechaNacimiento").value;
    usuario.edad = document.getElementById("edad").value;
    usuario.provincia = document.getElementById("provincia").value;

    usuario = new Usuario(usuario);
    saveLocalStorage(usuario);

    Swal.fire({
        position: "center",
        icon: "success",
        title: "Se ha registrado con exito",
        showConfirmButton: false,
        timer: 2000,
        customClass: {
            container: "my-alert-container",
            title: "my-alert-title",
            content: "my-alert-content",
            confirmButton: "my-alert-button",
        },
        background: "#004aad",
    });
});

const usuarioLogeado = [Usuario];
console.log(usuarioLogeado);

// formulario de registro finaliza

// creditos especiales

fetch('data.json').then((res)=>res.json()).then((data)=>{
    let contenedorCreditos = document.getElementById("ContCredEsp")

data.forEach((creditoespecial) => {

    let container = document.createElement("div")

    container.innerHTML = `
    <div class="col">
        <div class="card card-custom">
            <div class="card-body">
    
            <h2 class="card-title"> ${creditoespecial.titulo}</h2>
                <h3 class="card-title">${creditoespecial.monto}</h3>
                <p class="card-text">${creditoespecial.texto}</p>
                <button type="button" class="btn btn-primary acceder">Acceder</button>
            </div>
        </div>
    `

    contenedorCreditos.append(container)

})

let btnacceder = document.querySelectorAll(".acceder");
btnacceder.forEach((btn) => {
    btn.addEventListener("click", accederCredito);
});


function accederCredito() {

    Swal.fire({
        position: "center",
        icon: "success",
        title: "En breve recibira un email con la confirmacion de su credito",
        showCancelButton: false,
        timer:3000,
        customClass: {
            container: "my-alert-container",
            title: "my-alert-title",
            content: "my-alert-content",
            text: "my-alert-text"
        },
        background: "#004aad",
    });

}

})


