document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault(); 

});

const dadosString = localStorage.getItem("Dados");
const dados = JSON.parse(dadosString);

const url = "http://localhost:8080/user/create"

async function apiRegister() {

    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var nome = document.getElementById('nome').value
    var sobrenome = document.getElementById('sobrenome').value
    var endereco = document.getElementById('address').value
    const userError = document.getElementById('erroUser')

    if(email != dados.email || password != dados.senha){
        const post = await fetch(url, {
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

        const result = await post.json()
        console.log(result)

        userError.style.display = 'none'

        window.location.href = "../pages/login.html"       
    }else{
        userError.style.display = 'block'
    } 
    







}