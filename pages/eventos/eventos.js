/* =========================================================
   EVENTOS — SIPB MARINGÁ
   ========================================================= */


/* =========================================================
   DADOS DOS EVENTOS
   ========================================================= */

/*
   Estrutura preparada para futura integração
   com o sistema administrativo e o backend.

   Campos:
   - data
   - tipo
   - titulo
   - horario
   - local
   - descricao
   - destaque
*/

const eventos = [

    {
        data: "2026-09-06",
        tipo: "Culto",
        titulo: "Culto de Celebração",
        horario: "19h",
        local: "5ª Igreja Presbiteriana de Maringá",
        descricao: "Culto de celebração e comunhão da igreja.",
        destaque: true
    }

];


/* =========================================================
   ELEMENTO PRINCIPAL
   ========================================================= */

const listaEventos = document.getElementById("eventos-lista");


/* =========================================================
   FORMATAR DATA
   ========================================================= */

function formatarData(data) {

    const partes = data.split("-");

    const ano = Number(partes[0]);
    const mes = Number(partes[1]);
    const dia = Number(partes[2]);

    const dataEvento = new Date(ano, mes - 1, dia);

    const meses = [
        "JAN",
        "FEV",
        "MAR",
        "ABR",
        "MAI",
        "JUN",
        "JUL",
        "AGO",
        "SET",
        "OUT",
        "NOV",
        "DEZ"
    ];

    return {
        dia,
        mes: meses[dataEvento.getMonth()]
    };
}


/* =========================================================
   CRIAR CARD
   ========================================================= */

function criarEvento(evento) {

    const data = formatarData(evento.data);

    const article = document.createElement("article");

    article.className = "evento-card";

    if (evento.destaque) {
        article.classList.add("destaque");
    }

    article.innerHTML = `
        <div class="evento-data">

            <span class="evento-dia">
                ${data.dia}
            </span>

            <span class="evento-mes">
                ${data.mes}
            </span>

        </div>

        <div class="evento-info">

            <p class="evento-tipo">
                ${evento.tipo}
            </p>

            <h3>
                ${evento.titulo}
            </h3>

            <p class="evento-detalhes">
                ${evento.horario}
            </p>

            <p class="evento-local">
                ${evento.local}
            </p>

            <p class="evento-descricao">
                ${evento.descricao}
            </p>

        </div>
    `;

    return article;
}


/* =========================================================
   RENDERIZAR EVENTOS
   ========================================================= */

function renderizarEventos() {

    if (!listaEventos) return;

    listaEventos.innerHTML = "";

    if (eventos.length === 0) {

        listaEventos.innerHTML = `
            <p class="eventos-vazio">
                Nenhum evento disponível no momento.
            </p>
        `;

        return;
    }

    eventos.forEach(evento => {

        const card = criarEvento(evento);

        listaEventos.appendChild(card);

    });
}


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    renderizarEventos();

});