/*
let nombreCliente1 = "Juan"
let apellidoCliente1 =  "Pérez"
let edadCliente1 =  25
let gastoCliente1 = 1000
let nombreCliente2 = "José"
let apellidoCliente2 =  "López"
let edadCliente2 =  30
let gastoCliente2 = 2000
const cliente1 = {nombre: "Juan Pérez", edad: 25, gasto:1000, vecesxsemana:1}
const cliente2 = {nombre:"José López", edad:30, gasto:2000, vecesxsemana: 2}
console.log(cliente1["nombre"])
console.log(cliente1.nombre)
console.log(cliente2)
console.log(cliente1)
cliente1.edad = 25
console.log(cliente1)
cliente1 = cliente2
console.log(cliente1)
function Cliente(nombre, edad, gasto, vecesxsemana) {
    this.nombre = nombre;
    this.edad = edad;
    this.gasto = gasto;
    this.vecesxsemana = vecesxsemana;
    this.cobrar = function(gastoAgregar) {
        this.gasto -= gastoAgregar|
        console.log(`Pagaste $${gastoAgregar}. Sumaste $${this.gasto} puntos.`)
    }
    this.sumarPuntos = function() {
        this.sumarPuntos++
    }
}
const cliente1 = new Cliente("Pedro Camoes", 35, 3000,4)
const cliente2 = new Cliente("Rodolfo Juarez", 32, 2500,2)
console.log(cliente1)
console.log(cliente2)
cliente1.cobrar(3000)
cliente1.sumarPuntos()
console.log(cliente1)
*/

class Cliente {
    constructor(nombre, edad , gasto, vecesxsemana) {
        this.nombre = nombre;
        this.edad = edad;
        this.gasto = gasto;
        this.sumarPuntos = sumarPuntos;
    }

    cobrar(gastoRetirar) {
        this.gasto -= gastoRetirar
        console.log(`Retiraste $${gastoRetirar}, te quedan en tu cuenta $${this.gasto} puntos.`)
    }

    cargarPuntos() {
        this.puntos++
    }
}

const cliente1 = new Cliente("José Vélez", 33, 1000, 2)
console.log(cliente1)
 
for(let atributo in cliente1) {
    console.log(`${atributo} ${cliente1[atributo]}`)
}

class Menu {
    constructor(nombre, característica, tamaño, puntos) {
        this.nombre = nombre;
        this.característica = característica;
        this.tamaño = tamaño;
        this.puntos= puntos;
        }

    pedir() {
        console.log(`El pedido ${this.nombre} fue realizado con éxito. No olvides ir al próximo paso: Formas de pago.`)
    }

    pagar(formasDePago) {
        console.log(`El pedido ${this.nombre} se está preparando. Sumaste ${this.puntos} puntos.`)
    }

    cargarPuntos() {
        return `${this.nombre},${this.especie},${this.característica},${this.tamaño},${this.puntos}}`
    }
} 

const cliente1 = new Cliente("Juana","Hamburguesa Baba", "Mediana", 5)
const cliente2 = new Cliente(prompt("Ingrese un nombre"), prompt("Ingrese nombre de la hamburguesa deseada"), parseFloat(prompt("Ingrese tamaño: XS, S, M, L, XL, XXL")), prompt("Puntos por pedido"))
console.log(cliente2.retornarDatos())
console.log(cliente1.retornarDatos())
cliente1.pedir(15)
cliente1.pagar()
cliente1.cargarPuntos() 