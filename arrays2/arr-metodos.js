const array = [1, 5, 10, "ola", false]


// .every() retorna true se todos os elementos forem true
let soEvery = array.every(function(el){
    // console.log(el)
    return typeof el === "number"
})

console.log(soEvery)

// .some() retorna true se ao menos um elemento for true
let soSome = array.some(function(el){
    return typeof el !== "number"
})

console.log(soSome)

// .filter() faz um filtro, salvando dentro de uma nova array todos os elementos que você selecionar com o filtro
const arrayFiltrada = array.filter(function(el, i, _array){
    return typeof el !== "number"
})

console.log(arrayFiltrada)

// .forEach() faz uma iteração para cada elemento
array.forEach(function(el, i, _array){
    console.log(i, ": ", el)
})

// .map() diferente do .forEach(), essa função dá devolve um retorno:
const numeros = [2, 5, 10];

const numerosMap = numeros.map(function(el, i, _numeros){
    return el * i
})

console.log(numerosMap)

//---------------------------------------------------------------------------

let n1 = [5, 10, 20];
let n2 = [5, 10, 20];

console.log(n1.join(" - "))

let n3 = n1.concat(n2)
console.log(n3)

