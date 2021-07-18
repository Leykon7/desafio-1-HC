const email = document.querySelector("#input-texto-email");
const nome = document.querySelector("#input-texto-nome")

function salvarNaStorage() {
    localStorage.setItem("email_do_usuario", email.value);
    localStorage.setItem("nome_do_usuario", nome.value);
}