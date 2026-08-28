const botao = document.querySelector("button");
botao.addEventListener("click", botaoClicado);

    function botaoClicado() {
    let texto = botao.querySelector("span");
    texto.textContent++;
    botoes.forEach(function(botao) {
    botao.addEventListener("click", botaoClicado);

    function botaoClicado() {
    console.log("fui clicado");
    let texto = botao.querySelector("span");
    texto.textContent++;
}
})}