/*Criar duas funções: sum() e avarege()
As funções podem receber 1 ou + parâmetros
Use e abuse das facilidades do ES6*/

function sum(){
    const numbers = Array.from(arguments)
    console.log(numbers)
    return numbers.reduce(function(sum, atual){
        return sum + atual
    }, 0)
    
}

function avarage(){
    return sum(...arguments) / arguments.length
}

console.log(sum(1, 5, 3))
console.log(avarage(1, 5, 3))




