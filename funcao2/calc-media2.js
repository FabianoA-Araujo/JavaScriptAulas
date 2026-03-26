function calcMedia(){

    let soma = 0;

        if (arguments.length < 0){
            return 0
        } else {
            for (let i = 0; i < arguments.length; i++){
                if(typeof arguments[i] !== "number"){
                    throw new Error("digite apenas números")
                }
                soma += arguments[i]
            }    

        }

    return soma / arguments.length
    }


media = calcMedia(0)
console.log("Média: " + media)


/*Ou retornando 0 com o conceito de Curto Circuito*/
(function(){
    
    function calcMedia(){
    
        let soma = 0;
    
        for (let i = 0; i < arguments.length; i++){
            if(typeof arguments[i] !== "number"){
                throw new Error("digite apenas números")
            }
            soma += arguments[i]
        }
    
        return (soma / arguments.length) || 0 // Curco Circuito
    }
    
    
    media = calcMedia(3, 3, 3)
    console.log("Média: " + media)

})()
