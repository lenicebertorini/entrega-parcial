/*
let menu = []
let random = [0, "hola", true, {nombre: "Lennys Burger", tamaño: "S", precio: "$100"}, 10]
/*
for(let i = 0; i < random.length;i++) {
    console.log(random[i])
}
let var1 = "Lennys Burger"
console.log(var1.length)
for(elemento in random) {
    console.log(elemento)
    console.log(random[elemento])
}
//console.log(random.toString())
//console.log(random.join("---"))
menu.push({nombre: "Lennys Burger", tamaño: "S", precio: "100"})
menu.push({nombre: "Lennys Burger", tamaño: "M", precio: "200"})
//console.log(menu)
let nombreEliminado = menu.pop()
//console.log(menu)
//console.log(nombreEliminado)
let arrayConcat = menu.concat(random)
console.log(arrayConcat)
//arrayConcat = arrayConcat.slice(1,3)
//console.log(arrayConcat)
arrayConcat.splice(3,2)
console.log(arrayConcat)
*/

let carrito= {
    1: {nombre: "item 1" },
    2: {nombre: "item 2"},
}
for (const key in carrito) {
    if (carrito.hasOwnProperty (key)) {
        const element = carrito[key];
        console.log (element);
    }
}
Object.values (carrito).forEach((item)=> console.log(item));

console.log(carrito [1]);
console.log (Object.keys(carrito));
console.log (Object.keys (carrito).length);
