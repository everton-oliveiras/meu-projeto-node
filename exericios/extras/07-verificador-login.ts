/*
    Exercício 07: Verificador de Login
    Enunciado: Receba um objeto { user: string, loggedIn: boolean }.
    Se loggedIn for true, retorne "Bem-vindo, [user]", senão "Acesso Negado".
*/

class Login {
    user: string = "";
    loggedIn: boolean = false;
}

const login = new Login();

login.user = "Alfredo";
login.loggedIn = false;

const listaLogin: Login[] = [login];

for (let loginSelecionado of listaLogin) {
    if (loginSelecionado.loggedIn === true){
       console.log(`Bem-vindo, ${loginSelecionado.user}!`); 
    }
    else {
        console.log(`Acesso Negado.`);
    }
}
