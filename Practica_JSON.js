// implemente una funcion que reciba una lista de estudiantes y retorne la cantidad
// de estudiantes en matricula condicional (promedio por debajo de 3.3). //Check

// Implemente una funcion que reciba una lista de estudiantes y retorne una lista con
// el nombre completo de cada estudiante. //Check

// Implemente una funcion que reciba una lista de estudiantes y retorne una lista con
// los _id de cada estudiante ordenados ascendentemente por altura. //Check

const Data = require('./other archives/students.json')

function state (Data){
    let cont = 0
    for (let i = 0; i < Data.students.length; i++) {
        let sum = 0
        for (let n = 0; n < Data.students[i].courses.length; n++) {
            sum += Data.students[i].courses[n].grade
        }
       if (sum / Data.students[i].courses.length <= 3.3){
        cont ++
       } 
    }
    return cont
}

console.log(state(Data));
console.log();

function students (Data){
    let lista = []
    for (let i = 0; i < Data.students.length; i++) {
        lista[i] = Data.students[i].firstName + " " + Data.students[i].lastName
    }
    return lista
}

console.log(students(Data));
console.log();

function IDs (Data){
    let sortlist = []
    let result = []
    for (let i = 0; i < Data.students.length; i++) {
        sortlist.push([Data.students[i]._id,Data.students[i].height])
    }
    sortlist.sort(function(a, b) {return a[1] - b[1]})

    for (let i = 0; i < sortlist.length; i++) {
        result.push(sortlist[i].slice(0,1))
    }

    return result
}

console.log(IDs(Data));
console.log();