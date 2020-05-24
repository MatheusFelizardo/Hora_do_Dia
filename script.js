//pexels - banco de imagens gratuitos / tamanho da imagem 250/250 (salvar para web)

function alterarLayout () {
    let alteraTexto = document.getElementById ("alteraTexto")
    let date = new Date ()
    horaAtual = date.getHours()

    alteraTexto.innerHTML = `Agora são ${horaAtual} horas`

// pra alterar o elemento imagem é usado o "src" (que mostra onde está a imagem) da tag img.
// para alterar o background programaticamente, é acionado o elemento body pelo DOM e dps o style.background
// document.body.style.background = ""
    let alteraImg = document.getElementById ("alteraImg")
   
    if (horaAtual >= 0 && horaAtual < 12) {
        alteraImg.src = "manha.png"
        document.body.style.background = "#c1a743"
    } else if (horaAtual >= 12 && horaAtual <= 18 ) {
        alteraImg.src = "tarde.png"
        document.body.style.background = "#d26a1a"
    } else {
        alteraImg.src = "noite.png"
        document.body.style.background = "#42494f"
    }

}


