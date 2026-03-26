(function(){
    const nomeUsuario = "Fabiano"
    const elemento = document.querySelector(".top-bar p")
    if(nomeUsuario){
        const topBarElement = document.createElement("div")
        topBarElement.className = "top-bar"
        topBarElement.innerHTML += `<br> Olá, <b> ${nomeUsuario} </b></br>`

        const parentElement = document.querySelector(".hero")
        parentElement.insertBefore(topBarElement, parentElement.firstElementChild)
    }

})()