
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

});

var urlLogin = ""


async function apiLogin(){
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    const erroSenha = document.getElementById('erroSenha')
    const erroEmail = document.getElementById('erroEmail')

    urlLogin = 'http://localhost:8080/user/findEmail?email=' + email

    if(email != "" && password != ""){
        const response = await fetch(urlLogin)

        if(response.ok){
            const result = await response.json()
            erroEmail.style.display = 'none'

            if(result.email == email && result.senha == password){
                localStorage.setItem("Dados", JSON.stringify(result))
                window.location.href = "../pages/menu.html"
            }else{
                erroSenha.style.display = 'block'
            }

        }else{
            erroSenha.style.display = 'none'
            erroEmail.style.display = 'block'
        } 
    }



}



