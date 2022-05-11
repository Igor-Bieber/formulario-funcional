const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("senha");
const passwordConfirmation = document.getElementById("senhaConfirm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
  });
function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const senhaValue = senha.value;
    const senhaConfirmValue = senhaConfirm.value;

    /*faz dar erro se não tiver nada escrito no campo de usuário*/ 
    if (usernameValue === ""){
        setErrorFor(username,"O nome de usuário é obrigatório.");
    } else{
        setSuccessFor (username);
    }
    
    /*Faz dar erro se as senhas não forem iguais*/ 
    if (senhaConfirmValue !== senhaValue){
        setErrorFor (senha,"As senhas não conferem");
        setErrorFor (senhaConfirm,"As senhas não conferem");
    }else{
        setSuccessFor (senha);
        setSuccessFor (senhaConfirm);
    }

    if (emailValue === ""){
        setErrorFor(email,"O email é obrigatório.");
    }else if(!checkEmail(emailValue)){
        setErrorFor(email,"O email não é válido.");
    }else{
        setSuccessFor(email);
    }
}
function setErrorFor (input, message) {
    /*input.parentElemente = puxa o elemento PAI do INPUT*/ 
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    //exibe a mensagem de erro
    small.innerText = message;
    /*muda o nome da classe adicionando o erro la no html*/
    formControl.className = "form-control error";
}

function setSuccessFor (input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }