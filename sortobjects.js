// Implemente una funcion que reciba una lista de objetos cualquiera y un parametro
// y retorne la lista de objetos ordenada ascendemente segun el valor del parametro

const objects = require('./other archives/objects.json')

function sortObjects (objects,parameter){
    let sortlist = []
    for (let i = 0; i < objects.length; i++) {
        sortlist.push(objects[i][parameter])
    }
    if (typeof(sortlist[0]) === "number"){
    sortlist.sort(function(a, b) {return a - b})
    }else
    sortlist.sort()
    return sortlist
}

console.log(sortObjects(objects,"Marca"));
console.log();