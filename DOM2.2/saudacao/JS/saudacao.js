(function(){
    const nomeUsuario = null
    const elemento = document.querySelector(".top-bar p")
    if(nomeUsuario){
        // document.querySelector(".top-bar p").textContent = `Bem vindo(a), ${nomeUsuario}!`
        elemento.innerHTML += `<br> ${nomeUsuario}</br>`
    }
    else{
        // elemento.parentElement.style.display = "none"
        const elementToRemove = elemento.parentElement // Armazena o pai na variável
        elementToRemove.parentElement.removeChild(elementToRemove) //Acessa o pai para remover o filho
    }
})()