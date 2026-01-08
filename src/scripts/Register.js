document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault(); 

});

const dadosString = localStorage.getItem("Dados");
const dados = JSON.parse(dadosString);

const urlPost = "http://localhost:8080/user/create"
const urlUsers = "http://localhost:8080/user/users"

async function apiRegister() {

    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var nome = document.getElementById('nome').value
    var sobrenome = document.getElementById('sobrenome').value
    var endereco = document.getElementById('address').value
    const userError = document.getElementById('erroUser')

    const post = await fetch(urlPost, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            senha: password,
            nome: nome,
            sobrenome: sobrenome,
            endereco: endereco
        })

    })

    if(post.ok){
        window.location.href = "../pages/login.html" 
    }else {
        userError.style.display = 'block'
    }



          
    
    
    







}