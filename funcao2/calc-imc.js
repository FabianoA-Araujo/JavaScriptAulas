/* 
Construir uma função para calcular IMC, com os seguintes requisitos:
* IMC = pesp/altura²;
* Deve retornar um único número;
* Deve retornar um erro se receber um parâmetro não número;
* Deve retornar um erro caso não receba nenhum parâmetro

parte 2:

Crie uma função para receber o IMC e classificar, de acordo com a tabela abaixo:

Muito abaixo do peso 16 a 16,9 kg/m2
Abaixo do peso 17 a 18,4 kg/m2
Peso normal 18,5 a 24,9 kg/m2
Acima do peso 25 a 29,9 kg/m2
Obesidade Grau I 30 a 34,9 kg/m2
Obesidade Grau II 35 a 40 kg/m2
Obesidade Grau III maior que 40 kg/m2

*/

function imcCalc (peso, altura){
    if (typeof peso !== "number" || typeof altura !== "number"){
        throw new Error("Digite apenas números")
    } else if ( peso === undefined || altura === undefined){
        throw new Error("Parâmetro não preenchido")
    } else {
        return peso / (altura * altura)
    }

}

function classificarImc(imc) {
    if (imc < 17) { return "Muito abaixo do peso" }
    else if (imc >= 17 && imc <= 18.4) { return "Abaixo do peso" }
    else if (imc >= 18.5 && imc <= 24.9) { return "Peso normal" }
    else if (imc >= 25 && imc <= 29.9) { return "Acima do peso" }
    else if (imc >= 30 && imc <= 34.9) { return "Obesidade Grau I" }
    else if (imc >= 35 && imc <= 40) { return "Obesidade Grau II" }
    else { return "Obesidade Grau III" }
};

let imc = imcCalc(70, 1.70).toFixed(4);
let imcClassificado = classificarImc(imc);
console.log(`IMC ${imc}: ${imcClassificado}`);