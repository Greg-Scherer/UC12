const div = document.querySelector("div")
const btn = document.getElementById("btn")
const rmvbtn = document.getElementById("btnRemover")

btn.addEventListener("click", () => {
    // criamos um elemento de tag p
    const paragrago = document.createElement("p")

    // precisamos dar um conteudo a ele
    paragrago.textContent = "Novo texto criado"

    // depois, precisamos dizer aonde ele ficara no html
    div.appendChild(paragrago)
})

    rmvbtn.addEventListener("click", () => {
        const paragrafos = div.querySelectorAll("p")
        if (paragrafos.length > 0){
            paragrafos[0].remove()  
        }
})