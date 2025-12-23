
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault(); // 👈 trava o reload

});

async function apiLogin(){
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    const urlLogin = 'http://localhost:8080/user/findEmail?email=' + email

    if(email != "" && password != ""){
        const response = await fetch(urlLogin)

        if(response.ok){
            const result = await response.json()
            console.log(result)
        }else alert("Usuário não encontrado")
    }

}