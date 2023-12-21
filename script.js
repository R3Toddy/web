var ind_imagem = 1
var opacidade = 1
var reduzir = true  // boleano= true  ou falso
var id_trocar, id_mudar, id_mover



function trocar_imagem() {
    ind_imagem++
    if (ind_imagem > 7)
        ind_imagem = 1



    const imagem = document.getElementById("imagem")
    imagem.src = "https://softgraf.com/img/img" + ind_imagem + ".jpg"
}


function mudar_opacidade() {

    const imagem = document.getElementById("imagem")

    if (reduzir) {
        opacidade -= 0.1

    } else {
        opacidade += 0.1

    }

    if (opacidade <= 0) {
        reduzir = false

    } else if (opacidade >= 1) {
        reduzir = true

    }

    imagem.style.opacity = opacidade

}


// arrow function
const mover_imagem = () => {
    const imagem = document.getElementById("imagem")

    let margem_esq = parseInt(imagem.style.marginLeft)
    let largura_tela = window.innerWidth;
    let largura_img = imagem.clientWidth



    if (Number.isNaN(margem_esq)) {
        margem_esq = 20;
    } else {
        margem_esq += 20;
    }

    if (margem_esq > largura_tela) {
        margem_esq = largura_img * -1

    }

    imagem.style.marginLeft = margem_esq + "px"


}

function auto_trocar(botao) {
    id_trocar = setInterval("trocar_imagem()", 1000)
    // console.log(id_trocar)
    botao.disabled = true
}

function auto_opacidade(botao) {
    id_mudar = setInterval("mudar_opacidade()", 1000)
    // console.log(id_mudar)
    botao.disabled = true
}

function auto_mover(botao) {
    id_mover = setInterval("mover_imagem()", 30)
    // console.log(id_mover)
    botao.disabled = true
    if (auto_mover != undefined)
        botao.disabled = true
}

function limpar_intervalos() {
    clearInterval(id_mover)
    clearInterval(id_mudar)
    clearInterval(id_trocar)
    // console.log

    const botoes = document.getElementsByTagName('button')
    for (let i = 0; i < botoes.length; i++) {
        const botao = botoes[i]
        botao.disabled = false
    }
}




