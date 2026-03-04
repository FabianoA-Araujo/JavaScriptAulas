function calcularAreaRetangulo(larg, alt){
    if (typeof larg !== "number" || typeof alt !== "number"){
        throw  new Error ("calcularAreaRetangulo aceita apenas números")
    }
    return larg * alt
}

function calcularAreaTriangulo(base, alt){
    if (typeof base !== "number" || typeof alt !== "number"){
        throw  new Error ("calcularAreaTriangulo aceita apenas números")
    }
    return (base * alt) / 2
}

function calcularAreaCirculo (raio){
    if(typeof raio !== "number"){
        throw new Error ("calcularAreaCirculo aceita apenas números");
    }    
    return Math.PI * (raio * raio)

}