
let mudar = false;
document.getElementById('btnMudarTitulo').addEventListener('click', () => {
    const titulo = document.getElementById('titulo');
    titulo.textContent = mudar ? 'Clique no botão' : 'Texto foi mudado!';
    mudar = !mudar;
});

document.getElementById('btnToggleClasse').addEventListener('click', () => {
    document.getElementById('caixa').classList.toggle('ativa');
});

let num = 2;
document.getElementById('btnAdicionarItem').addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Item ' + num;
    document.getElementById('lista').appendChild(li);
    num++;
});

document.getElementById('btnRemoverElemento').addEventListener('click', () => {
    const elem = document.getElementById('elementoRemover');
    if (elem) elem.remove();
});



document.getElementById('inputTexto').addEventListener('change', (e) => {
    document.getElementById('textoEmTempo').textContent = e.target.value;
});