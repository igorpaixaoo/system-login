const dadosString = localStorage.getItem("Dados");

if (!dadosString) {
  alert("Usuário não autenticado");
  window.location.href = "../pages/login.html";
}

const dados = JSON.parse(dadosString);

console.log(dados);

document.getElementById("name-account").innerText = dados.nome;
document.getElementById("email-account").innerText = dados.email;