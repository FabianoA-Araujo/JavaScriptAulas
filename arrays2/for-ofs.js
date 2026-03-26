const obj = {
    nome: "Luana",
    idade: "30",
    email: "luana@linda.com"
}

console.log(obj.nome)
// loop for in acessa as propriedades de um objeto:
for(let prop in obj){
    console.log(prop)
    console.log(obj[prop])
}

//loop for of acessa os valores de um array:
const arr = [1, 2, 3]

for (numeros of arr){
    console.log(numeros)
}