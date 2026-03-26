const textEmail = document.getElementById("txtEmail");
const msgFeedback = document.getElementById("newsletterFeedback")

function getEmail(){
    let email = textEmail.value
    msgFeedback.innerHTML = `O email <b> ${email} </b> foi cadastrado com sucesso"`
};


