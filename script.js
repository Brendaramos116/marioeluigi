
const form = document.querySelector(".formulario")
const mascara = document.querySelector(".mascara-formulario")

function clicarBotao() {
    form.style.left = '45%'
    form.style.transform = 'trasnlatex(-50%)'
    mascara.style.visibility = 'visible'
}

function esconderForm() {
    form.style.left = '-300px'
    form.style.transform = 'trasnlatex(0)'
    mascara.style.visibility = 'hidden'
}