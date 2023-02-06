const lista = [1, 2, 3, 4, 5]

// Dada una lista de numeros, desarrolle una función que retorne una lista con los
// elementos de la lista original elevados al cuadrado.

function square (list){
    let newlist = []
    for (let i = 0; i < list.length; i++) {
        newlist[i] = list[i]**2
    }
    return newlist
}

console.log(square(lista));
// Check

// Dada una lista de numeros, desarrolle una función (oddSum) que retorne la suma
// de los numeros impares.

function oddsum(lista){
    let suma = 0
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 !== 0){
            suma+=lista[i]
        } 
    }
    return suma
}

console.log(oddsum(lista));
//Check

// Dado un numero, desarrolle una función que retorne el factorial de ese numero.

function factorial (n){
    let result = 1
    for (let i = 1; i <= n; i++) {
        result *= i
    }
    return result
}

console.log(factorial(4));
//Check

// Implemente una funcion que reciba una lista de numeros y retorne el promedio de
// la lista

function average(lista){
    let sum = 0
    for (let i = 0; i < lista.length; i++) {
        sum += lista[i]        
    }
    return sum/lista.length
}

console.log(average(lista));
// Check

// Implemente una funcion que reciba una palabra y retorne si una palabra es
// palindroma o no.

function palindrome(word){
    let reversedword = word.split("").reverse().join("")
    if (reversedword === word){
        return true
    }else
    return false
}

console.log(palindrome("onomatopeia"));
console.log(palindrome("aerea"));
// Check

// Implemente una función que reciba una oración y retorne la oración con las
// palabras invertidas sin invertir el orden de las palabras

function reverphrase(phrase){
    let text_to_invert = phrase.split(" ")
    let new_phrase = ""
    for (let i = 0; i < text_to_invert.length; i++) {
        new_phrase += text_to_invert[i].split("").reverse().join("") + " "
    }
    return new_phrase
}

console.log(reverphrase("anita lava la tina"));
console.log(reverphrase("esto es un ejemplo"));
// Check