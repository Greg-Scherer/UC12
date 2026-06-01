// getElementById('id') captura um elemento via id
const btn = document.getElementById('btn')
// querySelector("seletor") captura um elemento por tag, classe ou id
const div = document.querySelector('div')
const texto = document.querySelector('h1')
// querySelectorAll captura TODOS os elementos daquela tag ou classe
// ele armazena dentro de um array
const titulos = document.querySelectorAll('h2')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')

const link = document.querySelector('a')

// para dar funçao ao botão, adicionamos um evento a ele
// eventos podem ser de varios tipos, mas vamos usar o clique
// addEventListener adiciona um evento ao elemento, e precisamos passar DOIS PARÂMETROS:
// o primeiro é qual açao vai disparar esse evento, sempre entre aspas
// o segundo é qual a função evento vai disparar 
btn.addEventListener("click", () => {
    if (div.style.backgroundColor == "red") {
        div.style.backgroundColor = "white"
        texto.style.color = "black"

    }else {
        div.style.backgroundColor = "red"
        texto.style.color = "white"
    }

})


btn2.addEventListener("click", () => {
    
    //for 'comum'
    for(let i = 0; i < titulos.length; i++) {
        titulos[i].style.color = "blue"
    }
    // forEach
    // titulos.forEach((titulo) => {
    //     titulo.style.color = "blue"
    // })

    // for of
    // for (let titulo of titulos) {
    //     titulo.style.color = "blue"
    // }
})

btn3.addEventListener("click", () => {
    // elemento.textContent serve para capturar OU alterar o texto PURO de um elemento
    
   /*  if (texto.textContent == "Este texto vai ser trocado!") {
        texto.textContent = "Clicado"
    } else {
        texto.textContent = "Este texto vai ser trocado!"
    } */
    if (texto.innerHTML == "Este texto vai ser <span>trocado</span>") {
        texto.innerHTML = "O texto <span>mudou</span>"
    }else{
        texto.innerHTML = "Este texto vai ser <span>trocado</span>"
    }
})

btn4.addEventListener("click", () => {
    // getAttribute("atributo") pega o valor de algum atributo
    // setAttribute("atributo", "novoValor") troca o valor
    link.textContent = "Vá para o Youtube"
    link.setAttribute("href", "http://youtube.com")
})

/*
    Crie um card com uma imagem e um botão
    Quando clicar neste botão, faça a imagem ser trocada por outra
*/

const btn5 = document.getElementById('btn5')
const imagem = document.getElementById('imagem')

let contador = 1

btn5.addEventListener("click", () => {

    contador++

    if(contador > 3){
        contador = 1
    }

    if(contador == 1){
        imagem.src = "https://static.wikia.nocookie.net/rezero/images/a/ac/BeatriceP.jpg/revision/latest/scale-to-width-down/1200?cb=20161224171202&path-prefix=pt-br"
    }

    if(contador == 2){
        imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFOQrR4Dp2A0WM9AELMxtIoSUlxRxVKs9mew&s"
    }

    if(contador == 3){
        imagem.src = "https://preview.redd.it/noooo-beakooo-v0-ev12l5drtq8g1.jpg?width=640&crop=smart&auto=webp&s=a8d0c6ef4aa678c35f1faf2ea645e6bf58ec71a2"
    }

})