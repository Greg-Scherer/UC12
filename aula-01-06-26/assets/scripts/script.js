const h1 = document.querySelector("h1")
const btn = document.querySelector("button")
const div = document.querySelector("div")

btn.addEventListener("click", () => {
    // adiciona a classe escolinha ao elemento
    // h1.classList.add("Texto")

    /*
        elemento.classList.toggle("classe") adiciona uma classe SE o elemento NÃO TEM ELA AINDA , ou remove uma classe SE o elemento JÁ TEM ELA
    */
    // h1.classList.toggle("texto")

    div.classList.toggle("hidden")
})