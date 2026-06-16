const perguntas = [
  {
    categoria: 'Protagonista',
    texto: 'O que faz Yuuji Itadori entrar de vez no mundo do Jujutsu?',
    opcoes: [
      'Ele come um dedo amaldiçoado de Sukuna',
      'Ele nasce no clã Zenin',
      'Ele é escolhido diretamente pelo diretor Yaga'
    ],
    correta: 0,
    explicacao: 'Yuuji engole um dos dedos de Sukuna para salvar seus amigos, virando o receptáculo do Rei das Maldições.'
  },
  {
    categoria: 'Gojo',
    texto: 'Qual combinação torna Satoru Gojo tão absurdo em combate?',
    opcoes: [
      'Dez Sombras e Fala Amaldiçoada',
      'Seis Olhos e Ilimitado',
      'Manipulação de Sangue e Restrição Celestial'
    ],
    correta: 1,
    explicacao: 'Gojo possui os Seis Olhos e a técnica herdada do Ilimitado, o que permite controlar espaço de forma extremamente precisa.'
  },
  {
    categoria: 'Sukuna',
    texto: 'Qual é o título mais conhecido de Ryomen Sukuna?',
    opcoes: [
      'O Feiticeiro Imortal',
      'O Rei das Maldições',
      'O Guardião do Véu'
    ],
    correta: 1,
    explicacao: 'Sukuna é chamado de Rei das Maldições por seu poder absurdo e sua ameaça histórica.'
  },
  {
    categoria: 'Técnica',
    texto: 'Qual técnica de Megumi Fushiguro permite invocar shikigamis?',
    opcoes: [
      'Manipulação de Bonecos',
      'Técnica das Dez Sombras',
      'Ressonância'
    ],
    correta: 1,
    explicacao: 'Megumi usa a Técnica das Dez Sombras, invocando shikigamis como cães divinos, Nue e outros.'
  },
  {
    categoria: 'Nobara',
    texto: 'Qual arma combina melhor com o estilo de combate da Nobara Kugisaki?',
    opcoes: [
      'Martelo e pregos',
      'Katana e corrente',
      'Lança e escudo'
    ],
    correta: 0,
    explicacao: 'Nobara usa martelo, pregos e sua Técnica do Boneco de Palha para atacar usando energia amaldiçoada.'
  },
  {
    categoria: 'Maki',
    texto: 'Por que Maki Zenin se destaca mesmo tendo pouca energia amaldiçoada?',
    opcoes: [
      'Porque ela usa pactos com maldições',
      'Porque ela copia técnicas de outros feiticeiros',
      'Porque ela compensa com força física e ferramentas amaldiçoadas'
    ],
    correta: 2,
    explicacao: 'Maki não depende de uma técnica inata forte; ela luta usando preparo físico absurdo e ferramentas amaldiçoadas.'
  },
  {
    categoria: 'Fala Amaldiçoada',
    texto: 'Por que Toge Inumaki fala usando nomes de ingredientes, tipo “atum” e “salmão”?',
    opcoes: [
      'Para não ativar sua Fala Amaldiçoada sem querer',
      'Porque é uma regra da escola',
      'Porque ele perdeu a memória'
    ],
    correta: 0,
    explicacao: 'A fala de Toge carrega energia amaldiçoada, então ele limita suas palavras para não ferir alguém acidentalmente.'
  },
  {
    categoria: 'Panda',
    texto: 'O que Panda realmente é em Jujutsu Kaisen?',
    opcoes: [
      'Um humano transformado por Mahito',
      'Um cadáver amaldiçoado criado pelo diretor Yaga',
      'Uma maldição de grau especial disfarçada'
    ],
    correta: 1,
    explicacao: 'Panda é um cadáver amaldiçoado com consciência própria, criado por Masamichi Yaga.'
  },
  {
    categoria: 'Nanami',
    texto: 'Qual é a técnica amaldiçoada de Kento Nanami?',
    opcoes: [
      'Boogie Woogie',
      'Técnica da Proporção 7:3',
      'Vazio Infinito'
    ],
    correta: 1,
    explicacao: 'Nanami usa a Técnica da Proporção, criando um ponto fraco no alvo ao dividir ele numa razão de 7:3.'
  },
  {
    categoria: 'Todo',
    texto: 'Como funciona a técnica Boogie Woogie de Aoi Todo?',
    opcoes: [
      'Ele troca de posição com algo ao bater palmas',
      'Ele aumenta sua força sempre que grita',
      'Ele paralisa o inimigo com energia amaldiçoada'
    ],
    correta: 0,
    explicacao: 'Boogie Woogie permite trocar a posição de alvos com energia amaldiçoada quando Todo bate palmas.'
  },
  {
    categoria: 'Domínio',
    texto: 'Qual é a Expansão de Domínio de Satoru Gojo?',
    opcoes: [
      'Santuário Malevolente',
      'Vazio Infinito',
      'Horizonte do Cemitério'
    ],
    correta: 1,
    explicacao: 'O Vazio Infinito sobrecarrega o alvo com informação infinita, deixando ele praticamente incapaz de reagir.'
  },
  {
    categoria: 'Domínio',
    texto: 'Qual é a Expansão de Domínio de Sukuna?',
    opcoes: [
      'Santuário Malevolente',
      'Autocorporificação da Perfeição',
      'Jardim das Sombras Quimérico'
    ],
    correta: 0,
    explicacao: 'Santuário Malevolente é o domínio de Sukuna, conhecido por seus cortes devastadores.'
  },
  {
    categoria: 'Mahito',
    texto: 'O que a técnica de Mahito manipula diretamente?',
    opcoes: [
      'O tempo',
      'A alma',
      'A gravidade'
    ],
    correta: 1,
    explicacao: 'Mahito usa a Transfiguração Inerte para alterar a forma da alma, afetando também o corpo da vítima.'
  },
  {
    categoria: 'Energia Amaldiçoada',
    texto: 'De onde surge a energia amaldiçoada na maioria das pessoas?',
    opcoes: [
      'De emoções negativas',
      'Da luz solar',
      'De armas amaldiçoadas'
    ],
    correta: 0,
    explicacao: 'Energia amaldiçoada nasce principalmente de emoções negativas, como medo, raiva e tristeza.'
  },
  {
    categoria: 'Escola',
    texto: 'Qual escola treina feiticeiros como Yuuji, Megumi e Nobara?',
    opcoes: [
      'Kyoto Curse Academy',
      'Tokyo Jujutsu High',
      'Zenin Combat School'
    ],
    correta: 1,
    explicacao: 'A Tokyo Jujutsu High é uma das principais escolas de feiticeiros da série.'
  },
  {
    categoria: 'Geto',
    texto: 'Qual era a principal habilidade de Suguru Geto?',
    opcoes: [
      'Manipular maldições',
      'Controlar sombras',
      'Copiar domínios'
    ],
    correta: 0,
    explicacao: 'Geto conseguia absorver e controlar espíritos amaldiçoados.'
  },
  {
    categoria: 'Toji',
    texto: 'Por que Toji Fushiguro era tão perigoso mesmo sem energia amaldiçoada?',
    opcoes: [
      'Porque tinha Restrição Celestial e físico monstruoso',
      'Porque era imune a todas as técnicas',
      'Porque podia usar o Ilimitado'
    ],
    correta: 0,
    explicacao: 'Toji possuía uma Restrição Celestial extrema, trocando energia amaldiçoada por capacidades físicas absurdas.'
  },
  {
    categoria: 'Clãs',
    texto: 'Qual destes é um dos três grandes clãs do mundo Jujutsu?',
    opcoes: [
      'Clã Uzumaki',
      'Clã Zenin',
      'Clã Kamado'
    ],
    correta: 1,
    explicacao: 'O clã Zenin é um dos três grandes clãs de feiticeiros em Jujutsu Kaisen.'
  },
  {
    categoria: 'Maldições',
    texto: 'Qual destes personagens é uma maldição de grau especial?',
    opcoes: [
      'Jogo',
      'Miwa',
      'Ijichi'
    ],
    correta: 0,
    explicacao: 'Jogo é uma maldição de grau especial, com poderes ligados ao fogo e vulcões.'
  },
  {
    categoria: 'Pegadinha',
    texto: 'Qual personagem NÃO é aluno do primeiro ano da Tokyo Jujutsu High?',
    opcoes: [
      'Yuuji Itadori',
      'Megumi Fushiguro',
      'Toge Inumaki'
    ],
    correta: 2,
    explicacao: 'Toge Inumaki é aluno do segundo ano, enquanto Yuuji e Megumi são do primeiro ano.'
  }
];

let indice = 0;
let acertos = 0;
let pontos = 0;
let erros = 0;
let respostas = [];

const telaInicio = document.getElementById('tela-inicio');
const telaQuiz = document.getElementById('tela-quiz');
const telaResultado = document.getElementById('tela-resultado');
const btnComecar = document.getElementById('btn-comecar');
const btnProxima = document.getElementById('btn-proxima');
const btnReiniciar = document.getElementById('btn-reiniciar');
const numeroPergunta = document.getElementById('numero-pergunta');
const placarAtual = document.getElementById('placar-atual');
const barraFill = document.getElementById('barra-fill');
const categoriaBadge = document.getElementById('categoria-badge');
const textoPergunta = document.getElementById('texto-pergunta');
const opcoesContainer = document.getElementById('opcoes-container');
const feedback = document.getElementById('feedback');
const feedbackIcone = document.getElementById('feedback-icone');
const feedbackTexto = document.getElementById('feedback-texto');
const resultadoEmoji = document.getElementById('resultado-emoji');
const resultadoTitulo = document.getElementById('resultado-titulo');
const resultadoDescricao = document.getElementById('resultado-descricao');
const acertosNumero = document.getElementById('acertos-numero');
const pontosNumero = document.getElementById('pontos-numero');
const errosNumero = document.getElementById('erros-numero');
const revisaoLista = document.getElementById('revisao-lista');

function mostrarTela(nome) {
  telaInicio.classList.remove('ativa');
  telaQuiz.classList.remove('ativa');
  telaResultado.classList.remove('ativa');

  if (nome === 'inicio') telaInicio.classList.add('ativa');
  if (nome === 'quiz') telaQuiz.classList.add('ativa');
  if (nome === 'resultado') telaResultado.classList.add('ativa');
}

function mostrarPergunta() {
  const pergunta = perguntas[indice];

  numeroPergunta.textContent = `Pergunta ${indice + 1} de ${perguntas.length}`;
  categoriaBadge.textContent = pergunta.categoria;
  textoPergunta.textContent = pergunta.texto;
  placarAtual.innerHTML = `<i class="fas fa-star"></i> ${pontos} pts`;
  barraFill.style.width = `${((indice + 1) / perguntas.length) * 100}%`;

  feedback.classList.add('escondido');
  feedbackIcone.textContent = '';
  feedbackTexto.textContent = '';
  btnProxima.classList.add('escondido');
  opcoesContainer.innerHTML = '';

  pergunta.opcoes.forEach((texto, i) => {
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'opcao-btn';
    botao.innerHTML = `<span class="opcao-letra">${String.fromCharCode(65 + i)}</span><span>${texto}</span>`;
    botao.addEventListener('click', () => responder(i));
    opcoesContainer.appendChild(botao);
  });
}

function responder(index) {
  const pergunta = perguntas[indice];
  const botoes = opcoesContainer.querySelectorAll('.opcao-btn');
  const acertou = index === pergunta.correta;

  botoes.forEach((botao, i) => {
    botao.disabled = true;

    if (i === pergunta.correta) {
      botao.classList.add('correta');
    }

    if (i === index && !acertou) {
      botao.classList.add('errada');
    }
  });

  if (acertou) {
    acertos += 1;
    pontos += 10;
    feedback.className = 'feedback feedback-certo';
    feedbackIcone.textContent = '✅';
    feedbackTexto.textContent = `Resposta correta! ${pergunta.explicacao}`;
  } else {
    erros += 1;
    feedback.className = 'feedback feedback-errado';
    feedbackIcone.textContent = '❌';
    feedbackTexto.textContent = `Incorreto. A resposta certa é "${pergunta.opcoes[pergunta.correta]}". ${pergunta.explicacao}`;
  }

  respostas[indice] = {
    categoria: pergunta.categoria,
    texto: pergunta.texto,
    acertou,
    respostaUsuario: pergunta.opcoes[index],
    respostaCorreta: pergunta.opcoes[pergunta.correta]
  };

  feedback.classList.remove('escondido');
  placarAtual.innerHTML = `<i class="fas fa-star"></i> ${pontos} pts`;
  btnProxima.classList.remove('escondido');
}

function mostrarResultado() {
  const percentual = Math.round((acertos / perguntas.length) * 100);

  resultadoEmoji.textContent = percentual >= 70 ? '🏆' : percentual >= 40 ? '👍' : '😅';
  resultadoTitulo.textContent = percentual >= 70 ? 'Excelente!' : percentual >= 40 ? 'Bom trabalho!' : 'Continue praticando!';
  resultadoDescricao.textContent = `Você acertou ${acertos} de ${perguntas.length} perguntas e marcou ${pontos} pontos.`;
  acertosNumero.textContent = acertos;
  pontosNumero.textContent = pontos;
  errosNumero.textContent = erros;

  revisaoLista.innerHTML = respostas
    .map((item) => {
      const icone = item.acertou ? '✅' : '❌';
      const classe = item.acertou ? 'revisao-certa' : 'revisao-errada';

      return `
        <div class="revisao-item ${classe}">
          <span class="revisao-icone">${icone}</span>
          <div>
            <strong>${item.categoria}</strong><br>
            ${item.texto}<br>
            <span> Sua resposta: ${item.respostaUsuario}</span><br>
            <span> Correta: ${item.respostaCorreta}</span>
          </div>
        </div>
      `;
    })
    .join('');

  mostrarTela('resultado');
}

function proximaPergunta() {
  if (indice < perguntas.length - 1) {
    indice += 1;
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

btnComecar.addEventListener('click', () => {
  indice = 0;
  acertos = 0;
  pontos = 0;
  erros = 0;
  respostas = [];
  mostrarTela('quiz');
  mostrarPergunta();
});

btnProxima.addEventListener('click', proximaPergunta);

btnReiniciar.addEventListener('click', () => {
  indice = 0;
  acertos = 0;
  pontos = 0;
  erros = 0;
  respostas = [];
  mostrarTela('inicio');
});
