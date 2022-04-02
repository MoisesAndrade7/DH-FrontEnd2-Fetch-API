// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona

let card = document.querySelector('.card');
let botaoNovaSolicitacao = document.getElementById('random');

fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(json => {
        //manipulamos a resposta
        return json.results[0];
    })
    .then(results => {
        renderizarDadosUsuario(results);
    })
    .catch(
        function (erro) {
            console.log(erro);
        }
    )



function renderizarDadosUsuario(dados) {
    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.
    let img = document.createElement('img');
    img.src = dados.picture.large;
    card.appendChild(img);

    let primeiroNomeUsuario = document.createElement('h3');
    primeiroNomeUsuario.innerText = dados.name.first;
    card.appendChild(primeiroNomeUsuario);

    let ultimoNomeUsuario = document.createElement('h3');
    ultimoNomeUsuario.innerText = dados.name.last;
    card.appendChild(ultimoNomeUsuario);

    let email = document.createElement('h4');
    email.innerText = dados.email;
    card.appendChild(email);

}




/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma
// nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro
// de uma função para que ele possa ser executado toda vez que um clique de botão for
// realizado.

botaoNovaSolicitacao.onclick = function atualizaPagina() {
    window.location.reload();
}