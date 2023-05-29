// peticion de edad

// function edadUsuario (){
//     var edad = Number (prompt("ingrese su edad"))
//     if(edad>=21){
//         alert("bienvenido a Devoluz")
//     }else{
//         alert("No se permiten menores de 21")
//     }
// }
// edadUsuario()

// fin de peticion de edad

const tipo_prestamos = [
    {nombre:'Credito personal',monto:'Entre $50.000 y $1.000.000'},
    {nombre:'Credito hipotecario',monto:'Entre $1.000.000 y $10.000.000'},
    {nombre:'Credito prendario',monto:'Entre $500.000 y $5.000.000'}
]

const filtrado = prompt("ingrese un termino de busqueda")


function filtrar_prestamos (tipo_prestamos,filtrado){

    return tipo_prestamos.filter((prestamo) => {
        return prestamo.nombre.toLowerCase().includes(filtrado.toLowerCase()) ||
        prestamo.monto.toLowerCase().includes(filtrado.toLowerCase());
    });
}
const filtrar_prestamos_result = filtrar_prestamos(tipo_prestamos,filtrado);

filtrar_prestamos_result.forEach(prestamo => {
    console.log(prestamo),
    alert(prestamo)
});

// registro de usuario y contraseña

alert("para un prestamo primero registrese")
let id_usuario = prompt("ingrese su nombre de usuario")
let edad = prompt("ingrese su edad")
let dni = prompt("ingrese su dni")
let clave = prompt("ingrese su contraseña")

// fin de registro de usuario y contraseña


alert("ingrese el tipo de credito que desea:\n1-Credito entre $50.000 a $500.000\n2-Credito entre $500.000 a $1.000.000\n3-Credito entre $1.000.000 a $2.000.000")
let tipo = (prompt("Ingrese el tipo de credito que desea:\n1-Credito personal\n2-Credito hipotecario\n3-Credito prendario"))
switch(tipo){
    case 1:
    alert("Usted eligio el credito 1:\nIntereses del 9%\n5% del valor del credito\niva del 21% ")
    break;
    case 2: 
    alert("Usted eligio el credito 2:\nIntereses del 15%\n10% del valor del credito\niva del 21% ")
    break;
    case 3:
    alert("Usted eligio el credito 2:\nIntereses del 20%\n15% del valor del credito\niva del 21% ")
    break;
    default:
    alert("Usted no eligio ninguna de las opciones")
}

// ciclo de eleccion de prestamo

function usuario(id_usuario,edad,dni,nacionalidad,clave){
    this.id_usuario = id_usuario,
    this.edad = edad,
    this.dni = dni,
    this.tipoDePrestamo = tipoDePrestamo,
    this.clave = clave
}

const usuario$ = new usuario (id_usuario,edad,dni,clave,tipoDePrestamo)
console.log(usuario$)

// datos de prestamo a pedir

// REQUISITOS MINIMOS DE LAS CUOTAS: 

// // intereses del 9% + 
// // iva del 21% + 
// // el 5% del valor del credito... 
// // sin costo de cuenta 
// // hasta 72 cuotas...
// // a partir de los 50 mil pesos
let monto = parseFloat(prompt("Ingrese el monto que desea recibir: -minimo 50 mil, maximo 2Millones-"))
let cuotas = parseInt (prompt("Cuantas cuotas desea? -Puede pedir hasta 72 cuotas-"))
let credito1 = parseFloat(((monto + monto * (9 / 100) + monto * (5 / 100)) / cuotas * 1.21))
let credito2 = parseFloat(((monto + monto * (15 / 100) + monto * (10 / 100)) / cuotas * 1.21))
let credito3 = parseFloat(((monto + monto * (20 / 100) + monto * (15 / 100)) / cuotas * 1.21))

if (monto >= 50000 && monto <= 500000) {
    alert("9% de intereses - 5% del valor del credito - 21% I.V.A")
    alert("su cuota mensual sera de: " + credito1)
} else if (monto >= 500001 && monto <= 1000000) {
    alert("15% de intereses - 10% del valor del credito - 21% I.V.A")
    alert("su cuota mensual sera de: " + credito2)

} else if (monto >= 1000001 && monto <= 2000000) {
    alert("20% de intereses - 15% del valor del credito - 21% I.V.A")
    alert("su cuota mensual sera de: " + credito3)
}
else {
    alert("El monto ingresado no es correcto")
}
