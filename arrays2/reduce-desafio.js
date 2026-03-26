// Retorne uma array limpando os números repetidos, utilizando o reduce.

const numeros = [9, 8, 6, 8, 7, 7, 2, 3, 1, 4, 6, 5, 7, 0, 0]
let arrayLimpa = numeros.reduce(function(numerosUnicos, numeroAtual){
    if(numerosUnicos.indexOf(numeroAtual) < 0){
        numerosUnicos.push(numeroAtual)
    }
    return numerosUnicos
}, [])

console.log(arrayLimpa)


