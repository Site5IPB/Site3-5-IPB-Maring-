/* =========================================================
   DADOS DOS LIVROS
   ========================================================= */

const livrosBiblia = [

    { nome: "Gênesis", abreviacao: "Gn", testamento: "antigo", capitulos: 50 },
    { nome: "Êxodo", abreviacao: "Êx", testamento: "antigo", capitulos: 40 },
    { nome: "Levítico", abreviacao: "Lv", testamento: "antigo", capitulos: 27 },
    { nome: "Números", abreviacao: "Nm", testamento: "antigo", capitulos: 36 },
    { nome: "Deuteronômio", abreviacao: "Dt", testamento: "antigo", capitulos: 34 },
    { nome: "Josué", abreviacao: "Js", testamento: "antigo", capitulos: 24 },
    { nome: "Juízes", abreviacao: "Jz", testamento: "antigo", capitulos: 21 },
    { nome: "Rute", abreviacao: "Rt", testamento: "antigo", capitulos: 4 },
    { nome: "1 Samuel", abreviacao: "1Sm", testamento: "antigo", capitulos: 31 },
    { nome: "2 Samuel", abreviacao: "2Sm", testamento: "antigo", capitulos: 24 },
    { nome: "1 Reis", abreviacao: "1Rs", testamento: "antigo", capitulos: 22 },
    { nome: "2 Reis", abreviacao: "2Rs", testamento: "antigo", capitulos: 25 },
    { nome: "1 Crônicas", abreviacao: "1Cr", testamento: "antigo", capitulos: 29 },
    { nome: "2 Crônicas", abreviacao: "2Cr", testamento: "antigo", capitulos: 36 },
    { nome: "Esdras", abreviacao: "Ed", testamento: "antigo", capitulos: 10 },
    { nome: "Neemias", abreviacao: "Ne", testamento: "antigo", capitulos: 13 },
    { nome: "Ester", abreviacao: "Et", testamento: "antigo", capitulos: 10 },
    { nome: "Jó", abreviacao: "Jó", testamento: "antigo", capitulos: 42 },
    { nome: "Salmos", abreviacao: "Sl", testamento: "antigo", capitulos: 150 },
    { nome: "Provérbios", abreviacao: "Pv", testamento: "antigo", capitulos: 31 },
    { nome: "Eclesiastes", abreviacao: "Ec", testamento: "antigo", capitulos: 12 },
    { nome: "Cantares", abreviacao: "Ct", testamento: "antigo", capitulos: 8 },
    { nome: "Isaías", abreviacao: "Is", testamento: "antigo", capitulos: 66 },
    { nome: "Jeremias", abreviacao: "Jr", testamento: "antigo", capitulos: 52 },
    { nome: "Lamentações", abreviacao: "Lm", testamento: "antigo", capitulos: 5 },
    { nome: "Ezequiel", abreviacao: "Ez", testamento: "antigo", capitulos: 48 },
    { nome: "Daniel", abreviacao: "Dn", testamento: "antigo", capitulos: 12 },
    { nome: "Oséias", abreviacao: "Os", testamento: "antigo", capitulos: 14 },
    { nome: "Joel", abreviacao: "Jl", testamento: "antigo", capitulos: 3 },
    { nome: "Amós", abreviacao: "Am", testamento: "antigo", capitulos: 9 },
    { nome: "Obadias", abreviacao: "Ob", testamento: "antigo", capitulos: 1 },
    { nome: "Jonas", abreviacao: "Jn", testamento: "antigo", capitulos: 4 },
    { nome: "Miquéias", abreviacao: "Mq", testamento: "antigo", capitulos: 7 },
    { nome: "Naum", abreviacao: "Na", testamento: "antigo", capitulos: 3 },
    { nome: "Habacuque", abreviacao: "Hc", testamento: "antigo", capitulos: 3 },
    { nome: "Sofonias", abreviacao: "Sf", testamento: "antigo", capitulos: 3 },
    { nome: "Ageu", abreviacao: "Ag", testamento: "antigo", capitulos: 2 },
    { nome: "Zacarias", abreviacao: "Zc", testamento: "antigo", capitulos: 14 },
    { nome: "Malaquias", abreviacao: "Ml", testamento: "antigo", capitulos: 4 },

    { nome: "Mateus", abreviacao: "Mt", testamento: "novo", capitulos: 28 },
    { nome: "Marcos", abreviacao: "Mc", testamento: "novo", capitulos: 16 },
    { nome: "Lucas", abreviacao: "Lc", testamento: "novo", capitulos: 24 },

    {
        nome: "João",
        abreviacao: "Jo",
        testamento: "novo",
        capitulos: 21,
        apiNome: "John"
    },

    { nome: "Atos", abreviacao: "At", testamento: "novo", capitulos: 28 },
    { nome: "Romanos", abreviacao: "Rm", testamento: "novo", capitulos: 16 },
    { nome: "1 Coríntios", abreviacao: "1Co", testamento: "novo", capitulos: 16 },
    { nome: "2 Coríntios", abreviacao: "2Co", testamento: "novo", capitulos: 13 },
    { nome: "Gálatas", abreviacao: "Gl", testamento: "novo", capitulos: 6 },
    { nome: "Efésios", abreviacao: "Ef", testamento: "novo", capitulos: 6 },
    { nome: "Filipenses", abreviacao: "Fp", testamento: "novo", capitulos: 4 },
    { nome: "Colossenses", abreviacao: "Cl", testamento: "novo", capitulos: 4 },
    { nome: "1 Tessalonicenses", abreviacao: "1Ts", testamento: "novo", capitulos: 5 },
    { nome: "2 Tessalonicenses", abreviacao: "2Ts", testamento: "novo", capitulos: 3 },
    { nome: "1 Timóteo", abreviacao: "1Tm", testamento: "novo", capitulos: 6 },
    { nome: "2 Timóteo", abreviacao: "2Tm", testamento: "novo", capitulos: 4 },
    { nome: "Tito", abreviacao: "Tt", testamento: "novo", capitulos: 3 },
    { nome: "Filemom", abreviacao: "Fm", testamento: "novo", capitulos: 1 },
    { nome: "Hebreus", abreviacao: "Hb", testamento: "novo", capitulos: 13 },
    { nome: "Tiago", abreviacao: "Tg", testamento: "novo", capitulos: 5 },
    { nome: "1 Pedro", abreviacao: "1Pe", testamento: "novo", capitulos: 5 },
    { nome: "2 Pedro", abreviacao: "2Pe", testamento: "novo", capitulos: 3 },
    { nome: "1 João", abreviacao: "1Jo", testamento: "novo", capitulos: 5 },
    { nome: "2 João", abreviacao: "2Jo", testamento: "novo", capitulos: 1 },
    { nome: "3 João", abreviacao: "3Jo", testamento: "novo", capitulos: 1 },
    { nome: "Judas", abreviacao: "Jd", testamento: "novo", capitulos: 1 },
    { nome: "Apocalipse", abreviacao: "Ap", testamento: "novo", capitulos: 22 }
];


/* =========================================================
   CONFIGURAÇÃO DE VERSÕES
   ========================================================= */

const VERSOES_BIBLIA = {

    almeida: {
        nome: "Almeida",
        fonte: "bible-api",
        ativa: true
    },

    ara: {
        nome: "ARA",
        fonte: "futura",
        ativa: false
    },

    naa: {
        nome: "NAA",
        fonte: "futura",
        ativa: false
    }

};

let versaoAtual = "almeida";


/* =========================================================
   ELEMENTOS
   ========================================================= */

const antigoTestamento =
    document.getElementById("biblia-antigo-testamento");

const novoTestamento =
    document.getElementById("biblia-novo-testamento");

const capitulosArea =
    document.getElementById("biblia-capitulos-area");

const capitulosGrid =
    document.getElementById("biblia-capitulos-grid");

const livroTitulo =
    document.getElementById("biblia-livro-titulo");

const livroInformacao =
    document.getElementById("biblia-livro-informacao");

const voltarLivros =
    document.getElementById("biblia-voltar-livros");


/* Leitor */

const leitor =
    document.getElementById("biblia-leitor");

const leitorTitulo =
    document.getElementById("biblia-leitor-titulo");

const leitorSubtitulo =
    document.getElementById("biblia-leitor-subtitulo");

const leitorStatus =
    document.getElementById("biblia-leitor-status");

const leitorTexto =
    document.getElementById("biblia-leitor-texto");

const leitorVersao =
    document.getElementById("biblia-versao-nome");

const leitorNavegacao =
    document.getElementById("biblia-leitor-navegacao");

const voltarCapitulos =
    document.getElementById("biblia-voltar-capitulos");

const capituloAnterior =
    document.getElementById("biblia-capitulo-anterior");

const capituloProximo =
    document.getElementById("biblia-capitulo-proximo");


/* =========================================================
   ESTADO ATUAL
   ========================================================= */

let livroAtual = null;
let capituloAtual = null;


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    criarLivros();

    configurarVoltarLivros();

    configurarVoltarCapitulos();

    configurarNavegacaoCapitulos();

});


/* =========================================================
   LIVROS
   ========================================================= */

function criarLivros() {

    const livrosAntigo =
        livrosBiblia.filter(
            livro => livro.testamento === "antigo"
        );

    const livrosNovo =
        livrosBiblia.filter(
            livro => livro.testamento === "novo"
        );

    antigoTestamento.innerHTML =
        livrosAntigo
            .map(criarBlocoLivro)
            .join("");

    novoTestamento.innerHTML =
        livrosNovo
            .map(criarBlocoLivro)
            .join("");

    configurarLivros();
}


function criarBlocoLivro(livro) {

    return `
        <button
            type="button"
            class="biblia-livro"
            data-livro="${livro.nome}"
        >
            <span class="biblia-livro-abreviacao">
                ${livro.abreviacao}
            </span>

            <span class="biblia-livro-nome">
                ${livro.nome}
            </span>
        </button>
    `;
}


function configurarLivros() {

    document
        .querySelectorAll(".biblia-livro")
        .forEach(botao => {

            botao.addEventListener("click", () => {

                abrirLivro(
                    botao.dataset.livro
                );

            });

        });

}


/* =========================================================
   ABRIR LIVRO
   ========================================================= */

function abrirLivro(nomeLivro) {

    const livro =
        livrosBiblia.find(
            item => item.nome === nomeLivro
        );

    if (!livro) return;

    livroAtual = livro;

    livroTitulo.textContent =
        livro.nome;

    livroInformacao.textContent =
        `${livro.capitulos} ${
            livro.capitulos === 1
                ? "capítulo"
                : "capítulos"
        }`;

    criarCapitulos(livro);

    capitulosArea.hidden = false;

    leitor.hidden = true;

    capitulosArea.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================================================
   CAPÍTULOS
   ========================================================= */

function criarCapitulos(livro) {

    capitulosGrid.innerHTML = "";

    for (
        let numero = 1;
        numero <= livro.capitulos;
        numero++
    ) {

        const botao =
            document.createElement("button");

        botao.type = "button";

        botao.className =
            "biblia-capitulo";

        botao.textContent =
            String(numero).padStart(2, "0");

        botao.dataset.capitulo =
            numero;

        botao.addEventListener(
            "click",
            () => {

                selecionarCapitulo(
                    livro,
                    numero
                );

            }
        );

        capitulosGrid.appendChild(botao);
    }

}


/* =========================================================
   SELECIONAR CAPÍTULO
   ========================================================= */

function selecionarCapitulo(
    livro,
    capitulo
) {

    livroAtual = livro;

    capituloAtual = capitulo;

    abrirLeitor(
        livro,
        capitulo
    );

}


/* =========================================================
   LEITOR
   ========================================================= */

async function abrirLeitor(
    livro,
    capitulo
) {

    capitulosArea.hidden = true;

    leitor.hidden = false;

    leitorTitulo.textContent =
        `${livro.nome} ${capitulo}`;

    leitorSubtitulo.textContent =
        "Carregando capítulo...";

    leitorVersao.textContent =
        VERSOES_BIBLIA[versaoAtual].nome;

    leitorTexto.innerHTML = "";

    leitorStatus.hidden = false;

    leitorStatus.classList.remove("erro");

    leitorStatus.textContent =
        "Carregando capítulo...";

    leitorNavegacao.hidden = true;

    atualizarBotoesNavegacao();

    leitor.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });


    try {

        const resultado =
            await buscarCapitulo(
                livro,
                capitulo
            );

        mostrarCapitulo(resultado);

    } catch (erro) {

        console.error(
            "Erro ao carregar capítulo:",
            erro
        );

        mostrarErro();

    }

}


/* =========================================================
   CONSULTA À BIBLE-API
   ========================================================= */

async function buscarCapitulo(
    livro,
    capitulo
) {

    const versao =
        VERSOES_BIBLIA[versaoAtual];

    if (
        !versao ||
        !versao.ativa ||
        versao.fonte !== "bible-api"
    ) {

        throw new Error(
            "Esta versão ainda não possui uma fonte configurada."
        );

    }


    /*
       A API usa o nome em inglês para
       alguns livros.

       João = John
    */

    const nomeApi =
        livro.apiNome || livro.nome;


    const url =
        `https://bible-api.com/${nomeApi}+${capitulo}?translation=almeida`;


    const resposta =
        await fetch(url);


    if (!resposta.ok) {

        throw new Error(
            `Erro HTTP ${resposta.status}`
        );

    }


    const dados =
        await resposta.json();


    if (
        !dados ||
        !Array.isArray(dados.verses)
    ) {

        throw new Error(
            "A API não retornou os versículos esperados."
        );

    }


    return dados;

}


/* =========================================================
   MOSTRAR CAPÍTULO
   ========================================================= */

function mostrarCapitulo(dados) {

    leitorStatus.hidden = true;

    leitorSubtitulo.textContent =
        `${dados.verses.length} ${
            dados.verses.length === 1
                ? "versículo"
                : "versículos"
        }`;

    leitorTexto.innerHTML =
        dados.verses
            .map(criarVersiculo)
            .join("");

    leitorNavegacao.hidden = false;

    atualizarBotoesNavegacao();

}


/* =========================================================
   CRIAR VERSÍCULO
   ========================================================= */

function criarVersiculo(versiculo) {

    const numero =
        versiculo.verse;

    const texto =
        escaparHTML(
            versiculo.text.trim()
        );

    return `
        <p class="biblia-versiculo">

            <span class="biblia-versiculo-numero">
                ${numero}
            </span>

            <span class="biblia-versiculo-texto">
                ${texto}
            </span>

        </p>
    `;

}


/* =========================================================
   SEGURANÇA DO TEXTO
   ========================================================= */

function escaparHTML(texto) {

    const elemento =
        document.createElement("div");

    elemento.textContent =
        texto;

    return elemento.innerHTML;

}


/* =========================================================
   ERRO
   ========================================================= */

function mostrarErro() {

    leitorStatus.hidden = false;

    leitorStatus.classList.add("erro");

    leitorStatus.textContent =
        "Não foi possível carregar este capítulo. Verifique sua conexão com a internet e tente novamente.";

    leitorSubtitulo.textContent =
        "Erro ao carregar capítulo.";

}


/* =========================================================
   VOLTAR PARA LIVROS
   ========================================================= */

function configurarVoltarLivros() {

    if (!voltarLivros) return;

    voltarLivros.addEventListener(
        "click",
        () => {

            capitulosArea.hidden = true;

            leitor.hidden = true;

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   VOLTAR PARA CAPÍTULOS
   ========================================================= */

function configurarVoltarCapitulos() {

    if (!voltarCapitulos) return;

    voltarCapitulos.addEventListener(
        "click",
        () => {

            leitor.hidden = true;

            capitulosArea.hidden = false;

            capitulosArea.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

}


/* =========================================================
   NAVEGAÇÃO ENTRE CAPÍTULOS
   ========================================================= */

function configurarNavegacaoCapitulos() {

    capituloAnterior.addEventListener(
        "click",
        () => {

            if (
                !livroAtual ||
                capituloAtual <= 1
            ) {
                return;
            }

            capituloAtual--;

            abrirLeitor(
                livroAtual,
                capituloAtual
            );

        }
    );


    capituloProximo.addEventListener(
        "click",
        () => {

            if (
                !livroAtual ||
                capituloAtual >= livroAtual.capitulos
            ) {
                return;
            }

            capituloAtual++;

            abrirLeitor(
                livroAtual,
                capituloAtual
            );

        }
    );

}


/* =========================================================
   ATUALIZAR BOTÕES
   ========================================================= */

function atualizarBotoesNavegacao() {

    if (!livroAtual) return;

    capituloAnterior.disabled =
        capituloAtual <= 1;

    capituloProximo.disabled =
        capituloAtual >= livroAtual.capitulos;

}


/* =========================================================
   API PÚBLICA
   ========================================================= */

window.biblia = {

    livros: livrosBiblia,

    versoes: VERSOES_BIBLIA,

    abrirLivro,

    selecionarCapitulo,

    abrirLeitor

};