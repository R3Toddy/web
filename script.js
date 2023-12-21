/*captura o botao do hambuguer pelo nome da classe*/
const hamburguer = document.querySelector(".hamburguer")
const nav = document.querySelector(".nav")


/*adiciona o evento onclik no botão hamurguer*/

hamburguer.addEventListener('click', () => {
    
    /*adiciona ou remove a classe 'active' em nav*/ 
    nav.classList.toggle('active')
    console.log(nav.classList.value)
    })
