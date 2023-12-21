function adicionarNaTabela() {

    const nome = document.getElementById('nome')
    const email = document.getElementById('email')
    const fone = document.getElementById('fone')
    const profissao = document.getElementById('profissao')
    const tabela = document.getElementById('tabela')

    if (nome.value == '' || email.value == '' || fone.value == '' || profissao.value == '')
        return false



    //quantidade de linhas existentes na tabela (mínimo = 1 = cabeçalho)
    const quantLinhas = tabela.rows.length
    // insere nova linha na posição: 1, 2, 3...
    const linha = tabela.insertRow(quantLinhas)
    // agora insere células dentro das linhas  
    const celula1 = linha.insertCell(0)
    const celula2 = linha.insertCell(1)
    const celula3 = linha.insertCell(2)
    const celula4 = linha.insertCell(3)
    const celula5 = linha.insertCell(4)
    const celula6 = linha.insertCell(5)
    linha.id = quantLinhas

    //agora preenche as celulas da linha 
    celula1.innerHTML = quantLinhas
    celula2.innerHTML = nome.value
    celula3.innerHTML = email.value
    celula4.innerHTML = fone.value
    celula5.innerHTML = profissao.value
    celula6.innerHTML = '<button class="botao-remover" onclick="removerDaTabela(this)">Remover</button>'

    //limpa todos os campos
    nome.value = ''
    email.value = ''
    fone.value = ''
    profissao.value = ''

    return false
}

function removerDaTabela(botao) {
    // pega o id do "avô" do botão (pai do botão é a celula e o pai da célula é a linha )
    const idlinha = botao.parentNode.parentNode.id
    const linha = document.getElementById(idlinha)
    linha.parentNode.removeChild(linha)
    // impede reload da página
    return false



}