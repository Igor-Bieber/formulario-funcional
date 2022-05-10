const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const senhaConfirm = document.getElementById('senha-confirm')

form.addEventListener ("submit",(e) =>{
    /*Serve para não recarregar a página ao clicar no botão de enviar*/ 
    e.preventDefault();

    checkInputs();

});

/*Função que irá checar se os inputs são validos ou inválidos e
transforma-los de acordo com o status.*/ 
function checkInputs(){
    const usernameValor = username.value;
    const emailValor = email.value;
    const senhaValor = senha.value;
    const senhaConfirmValor = senhaConfirm.value;

    if (usernameValor == ""){
        setErrorFor(username,"O nome de usuário é obrigatório.");
    }
}

function setErrorFor (input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    /*Adicionando mensagem de erro*/ 
    small.innerText = message;

    /*Mudando o nome do CLASS da div adicionando a palavra "error"
    no final para mostrar a mensagem de erro e a borda vermelha*/ 
    formControl.className = "form-control error";

}