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
    {nombre:'Credito personal',importe:'Entre $50.000 y $1.000.000'},
    {nombre:'Credito hipotecario',importe:'Entre $1.000.000 y $10.000.000'},
    {nombre:'Credito prendario',importe:'Entre $500.000 y $5.000.000'}
]

const filtrado = tipo_prestamos.filter((el)=>el.importe>=3000000)
const busqueda = tipo_prestamos.find((el)=>el.nombre=='Credito prendario')

console.log(filtrado)
console.log(busqueda)

alert("ingrese el tipo de credito que desea:\n1-Credito entre $50.000 a $500.000\n2-Credito entre $500.000 a $1.000.000\n3-Credito entre $1.000.000 a $2.000.000")
let tipo = Number(prompt ("Ingrese el tipo de credito que desea:\n1-Credito personal\n2 -Credito hipotecario\n3-Credito prendario"))
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
// registro de usuario y contraseña

alert("para un prestamo primero registrese")

let id_usu = prompt("ingrese su nombre de usuario")
let age = prompt("ingrese su edad")
let documento = prompt("ingrese su dni")
let contraseña = prompt("ingrese su contraseña")


class usuario{
    constructor(id_usuario,edad,dni,clave){
        this.id_usuario = id_usuario,
        this.edad = edad,
        this.dni = dni,
        this.clave = clave    
    }
}


const usuario1 = new usuario ('Max power','36','25555487','laplata547')
const usuario2 = new usuario (id_usu,age,documento,contraseña)
console.log(usuario1,usuario2)

// fin de registro de usuario y contraseña


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

