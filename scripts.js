const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("senha");
const passwordConfirmation = document.getElementById("senhaConfirm");
var NOMES = [];
var EMAILS = [];

form.addEventListener("input", (e) => {
    e.preventDefault();
    checkInputs();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    salvarNome();
    salvarEmail();
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

    /*se o username for menor que 4 caracteres da erro*/ 
    if(usernameValue.length < 4){
        setErrorFor(username,"Usuário deve ter no mínimo 4 caracteres")
    }

    /*se o username for maior que 24 caracteres da erro*/
    if(usernameValue.length > 24){
        setErrorFor(username,"Usuário deve ter no máximo 24 caracteres")
    }
    
    /*Faz dar erro se as senhas não forem iguais e da erro se os campos de senha
    estiverem vazios*/ 
    if (senhaValue === ""){
        setErrorFor (senha,"A senha é obrigatória");
    }else if (senhaConfirmValue !== senhaValue){
        setErrorFor (senhaConfirm,"As senhas não conferem");
    }else{
        setSuccessFor (senha);
        setSuccessFor (senhaConfirm);
    }

    /*se a confirmação de senha estiver vazio ele da erro*/ 
    if(senhaConfirmValue === ""){
        setErrorFor (senhaConfirm,"A senha é obrigatória");
    }

    /*se a senha for menor q 8 da erro*/ 
    if(senhaValue.length < 8){
        setErrorFor (senha,"Senha deve ter no mínimo 8 caracteres");
    }

    /*confirma se o email é valido e da erro se estiver vazio*/ 
    if (emailValue === ""){
        setErrorFor(email,"O email é obrigatório.");
    }else if(!checkEmail(emailValue)){
        setErrorFor(email,"O email não é válido.");
    }else{
        setSuccessFor(email);
    }

    /*fórmula pra verificar  */ 
    const allFormControls = form.querySelectorAll(".form-control");
    const formValid = [ ... allFormControls].every((formControl) => {
        return (formControl.className === "form-control success");
    });

    //se o usuário estiver 100% válido:
    if (formValid){
        habilitaButao();
    }else{
        desabilitaButao();
    }
    
}

//------------------FUNÇÕES-----------------------

//função que deixa todos os nomes vazios
function clearInputs(){
    username.value = "";
    senha.value = "";
    senhaConfirm.value = "";
    email.value = "";
}

function salvarEmail(){
    if (!!EMAILS.find((imail)=> imail === email.value)){
        setErrorFor(email,"Já existe uma conta atribuida a esse email!");
    }else{
        //da um push do que está no input de username para o array NOMES
        EMAILS.push(email.value);
        //console.log(EMAILS);
        //função que faz todos os inputs ficarem vazios.
        clearInputs();
    }
}

function salvarNome(){
    
    /*NOMES.find está comparando se "nome" é igual ao valor que está no input username,
    se for igual ele retora "true" pq ele encontrou algo igual, se não encontrar ele retorna "false"*/
    if (!!NOMES.find((nome)=> nome === username.value)){
        setErrorFor(username,"Usuário ja existente!");
    }else{
        //da um push do que está no input de username para o array NOMES
        NOMES.push(username.value);
        //console.log(NOMES);
        //função que faz todos os inputs ficarem vazios.
        clearInputs();
    }
    
}

function habilitaButao(butao){
    let button = document.querySelector(".butao");
    let habilitaButao = (button.disabled = false);
}

function desabilitaButao(butao){
    let button = document.querySelector(".butao");
    let desabilitaButao = (button.disabled = true);
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

/*função que checka se o email é valido*/ 
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }