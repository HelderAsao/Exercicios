/*document.getElementById("changeTextButton").addEventListener("click", botao)


function botao() {

    document.getElementById("changeTextButton").innerText = "voce mudou o texto do botao";
    document.getElementById("title").innerText = "Você mudou o texto!";
    


}*/

function botao(){

    let botao = window.document.getElementById('changeTextButton')
    let texto = window.document.getElementById('title')

    botao.innerHTML='voce mudou o botao'
    texto.innerHTML='texto mudado'

}