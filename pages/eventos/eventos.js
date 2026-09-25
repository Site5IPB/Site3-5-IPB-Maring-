/* =========================================================
   EVENTOS — SIPB MARINGÁ
   ========================================================= */


/* =========================================================
   CONFIGURAÇÕES
   ========================================================= */

/*
   Quantos dias de eventos serão gerados para frente
   e para trás.

   Isso permite mostrar:
   - próximos eventos;
   - eventos anteriores.

   No futuro, quando os eventos vierem do backend,
   essa limitação poderá ser substituída pelos dados
   armazenados no banco.
*/

const DIAS_FUTUROS = 120;
const DIAS_HISTORICO = 120;


/* =========================================================
   DADOS DOS EVENTOS
   ========================================================= */

/*
   TIPOS DE EVENTO:

   1. unico
      Acontece apenas uma vez.

   2. semanal
      Acontece toda semana.

   3. quinzenal
      Acontece a cada duas semanas.

   4. mensal
      Acontece em determinada semana do mês.

   5. connect
      Ciclo alternado do Connect:

      SEMANA A
      - Sexta: adolescentes
      - Sábado: jovens

      SEMANA B
      - Sábado: culto misto


   ---------------------------------------------------------

   DIA DA SEMANA:

   0 = Domingo
   1 = Segunda-feira
   2 = Terça-feira
   3 = Quarta-feira
   4 = Quinta-feira
   5 = Sexta-feira
   6 = Sábado
*/


const eventos = [


    /* =====================================================
       ESCOLA BÍBLICA — SEMANAL
       ===================================================== */

    {
        tipo: "Escola Bíblica",

        titulo: "Escola Bíblica",

        horario: "9h30",

        local: "5ª Igreja Presbiteriana de Maringá",

        descricao:
            "Momento de estudo e aprofundamento da Palavra de Deus.",

        destaque: false,

        recorrencia: {
            tipo: "semanal",

            dataInicio: "2026-09-27",

            diaSemana: 0
        }
    },


    /* =====================================================
       CULTO — SEMANAL
       ===================================================== */

    {
        tipo: "Culto",

        titulo: "Culto de Celebração",

        horario: "19h",

        local: "5ª Igreja Presbiteriana de Maringá",

        descricao:
            "Culto de celebração, comunhão e adoração.",

        destaque: true,

        recorrencia: {
            tipo: "semanal",

            dataInicio: "2026-09-27",

            diaSemana: 0
        }
    },


    /* =====================================================
       PROJETO ANA — SEMANAL
       ===================================================== */

    {
        tipo: "Projeto ANA",

        titulo: "Projeto ANA",

        horario: "14h",

        local: "5ª Igreja Presbiteriana de Maringá",

        descricao:
            "Encontro do Projeto ANA.",

        destaque: false,

        recorrencia: {
            tipo: "semanal",

            dataInicio: "2026-09-29",

            diaSemana: 2
        }
    },


    /* =====================================================
       CONNECT — CICLO ALTERNADO
       ===================================================== */

    /*
       IMPORTANTE:

       26/09/2026 é a semana do Culto Connect.

       Portanto:

       25/09/2026
       → não existe Célula Connect de adolescentes.

       26/09/2026
       → Culto Connect misto.

       02/10/2026
       → Célula Connect — Adolescentes.

       03/10/2026
       → Célula Connect — Jovens.

       09/10/2026
       → Culto Connect.

       E assim sucessivamente.
    */

    {
        tipo: "Connect",

        titulo: "Programação Connect",

        horario: "19h30",

        local: "5ª Igreja Presbiteriana de Maringá",

        descricao:
            "Programação alternada entre células de jovens e adolescentes e o Culto Connect.",

        destaque: true,

        recorrencia: {
            tipo: "connect",

            /*
               Esta é a primeira semana do ciclo
               que representa o Culto Connect.

               A partir dela o sistema alterna
               automaticamente as semanas.
            */

            dataSemanaCulto: "2026-09-26"
        }
    },


    /* =====================================================
       ENCONTRO DE HOMENS
       2º SÁBADO DO MÊS
       ===================================================== */

    {
        tipo: "Encontro",

        titulo: "Encontro de Homens",

        horario: "A definir",

        local: "5ª Igreja Presbiteriana de Maringá",

        descricao:
            "Encontro de homens realizado no segundo sábado do mês.",

        destaque: false,

        recorrencia: {
            tipo: "mensal",

            semana: 2,

            diaSemana: 6
        }
    },


    /* =====================================================
       GRUPOS DE MULHERES
       QUINZENAL
       ===================================================== */

    {
        tipo: "Grupo",

        titulo: "Grupos de Mulheres",

        horario: "A definir",

        local: "5ª Igreja Presbiteriana de Maringá",

        descricao:
            "Encontro quinzenal dos grupos de mulheres.",

        destaque: false,

        recorrencia: {
            tipo: "quinzenal",

            /*
               Mantido conforme o cadastro atual.

               O dia e horário ainda poderão ser
               ajustados posteriormente.
            */

            dataInicio: "2026-09-24",

            diaSemana: 4
        }
    }

];


/* =========================================================
   ELEMENTOS DA PÁGINA
   ========================================================= */

const listaEventos =
    document.getElementById("eventos-lista");

const listaEventosAnteriores =
    document.getElementById("eventos-anteriores");


/* =========================================================
   FUNÇÕES DE DATA
   ========================================================= */


/*
   Cria uma data usando o horário local.
*/

function criarDataLocal(
    ano,
    mes,
    dia
) {

    return new Date(
        ano,
        mes - 1,
        dia
    );

}


/*
   Converte:

   YYYY-MM-DD

   em uma data local.
*/

function converterData(data) {

    const partes =
        data.split("-");

    return criarDataLocal(
        Number(partes[0]),
        Number(partes[1]),
        Number(partes[2])
    );

}


/*
   Converte Date para:

   YYYY-MM-DD
*/

function dataParaString(data) {

    const ano =
        data.getFullYear();

    const mes =
        String(
            data.getMonth() + 1
        ).padStart(2, "0");

    const dia =
        String(
            data.getDate()
        ).padStart(2, "0");

    return `${ano}-${mes}-${dia}`;

}


/*
   Retorna o início do dia atual.
*/

function obterHoje() {

    const agora =
        new Date();

    return criarDataLocal(
        agora.getFullYear(),
        agora.getMonth() + 1,
        agora.getDate()
    );

}


/* =========================================================
   FORMATAR DATA
   ========================================================= */

function formatarData(data) {

    const dataEvento =
        converterData(data);

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

        dia:
            dataEvento.getDate(),

        mes:
            meses[
                dataEvento.getMonth()
            ]

    };

}


/* =========================================================
   ADICIONAR DIAS
   ========================================================= */

function adicionarDias(
    data,
    quantidade
) {

    const novaData =
        new Date(data);

    novaData.setDate(
        novaData.getDate() +
        quantidade
    );

    return novaData;

}


/* =========================================================
   DIFERENÇA EM DIAS
   ========================================================= */

function diferencaEmDias(
    dataA,
    dataB
) {

    const umDia =
        1000 * 60 * 60 * 24;

    return Math.round(
        (
            dataA.getTime() -
            dataB.getTime()
        ) / umDia
    );

}


/* =========================================================
   OCORRÊNCIAS SEMANAIS / QUINZENAIS
   ========================================================= */

function gerarOcorrenciasSemanais(
    evento,
    dataInicial,
    dataFinal,
    intervaloSemanas
) {

    const ocorrencias = [];

    let dataAtual =
        converterData(
            evento.recorrencia.dataInicio
        );


    /*
       Ajusta para o dia da semana
       configurado.
    */

    while (
        dataAtual.getDay() !==
        evento.recorrencia.diaSemana
    ) {

        dataAtual =
            adicionarDias(
                dataAtual,
                1
            );

    }


    /*
       Gera as ocorrências.
    */

    while (
        dataAtual <= dataFinal
    ) {

        if (
            dataAtual >= dataInicial
        ) {

            ocorrencias.push(
                criarOcorrencia(
                    evento,
                    dataParaString(
                        dataAtual
                    )
                )
            );

        }

        dataAtual =
            adicionarDias(
                dataAtual,
                intervaloSemanas * 7
            );

    }


    return ocorrencias;

}


/* =========================================================
   ENCONTRAR DIA DA SEMANA NO MÊS
   ========================================================= */

function encontrarDiaDaSemanaDoMes(
    ano,
    mes,
    semana,
    diaSemana
) {

    const primeiroDia =
        new Date(
            ano,
            mes,
            1
        );


    const diferenca =
        (
            diaSemana -
            primeiroDia.getDay() +
            7
        ) % 7;


    const dia =
        1 +
        diferenca +
        (
            (semana - 1) * 7
        );


    const resultado =
        new Date(
            ano,
            mes,
            dia
        );


    /*
       Confirma que a data pertence
       ao mês solicitado.
    */

    if (
        resultado.getMonth() !==
        mes
    ) {

        return null;

    }


    return resultado;

}


/* =========================================================
   OCORRÊNCIAS MENSAIS
   ========================================================= */

function gerarOcorrenciasMensais(
    evento,
    dataInicial,
    dataFinal
) {

    const ocorrencias = [];

    let ano =
        dataInicial.getFullYear();

    let mes =
        dataInicial.getMonth();


    const ultimoAno =
        dataFinal.getFullYear();

    const ultimoMes =
        dataFinal.getMonth();


    while (
        ano < ultimoAno ||
        (
            ano === ultimoAno &&
            mes <= ultimoMes
        )
    ) {

        const dataOcorrencia =
            encontrarDiaDaSemanaDoMes(
                ano,
                mes,
                evento.recorrencia.semana,
                evento.recorrencia.diaSemana
            );


        if (
            dataOcorrencia &&
            dataOcorrencia >= dataInicial &&
            dataOcorrencia <= dataFinal
        ) {

            ocorrencias.push(
                criarOcorrencia(
                    evento,
                    dataParaString(
                        dataOcorrencia
                    )
                )
            );

        }


        mes++;


        if (mes > 11) {

            mes = 0;

            ano++;

        }

    }


    return ocorrencias;

}


/* =========================================================
   CONNECT — CICLO ALTERNADO
   ========================================================= */

/*
   O ciclo funciona assim:

   SEMANA DO CULTO
   └── Sábado
       └── Culto Connect misto

   SEMANA DAS CÉLULAS
   ├── Sexta
   │   └── Célula Connect — Adolescentes
   │
   └── Sábado
       └── Célula Connect — Jovens

   Depois volta para a semana do Culto.
*/


function gerarOcorrenciasConnect(
    evento,
    dataInicial,
    dataFinal
) {

    const ocorrencias = [];

    const dataSemanaCulto =
        converterData(
            evento.recorrencia.dataSemanaCulto
        );


    /*
       Procuramos o primeiro sábado
       dentro do período histórico.
    */

    let primeiroSabado =
        new Date(dataInicial);


    while (
        primeiroSabado.getDay() !== 6
    ) {

        primeiroSabado =
            adicionarDias(
                primeiroSabado,
                1
            );

    }


    /*
       Percorremos todos os sábados
       do período.
    */

    let sabadoAtual =
        primeiroSabado;


    while (
        sabadoAtual <= dataFinal
    ) {

        const diferenca =
            diferencaEmDias(
                sabadoAtual,
                dataSemanaCulto
            );


        const numeroSemana =
            Math.floor(
                diferenca / 7
            );


        /*
           Normaliza o resultado do módulo
           para funcionar também com datas
           anteriores à semana de referência.

           0 = semana do Culto
           1 = semana das Células
        */

        const ciclo =
            (
                numeroSemana % 2 + 2
            ) % 2;


        /* =================================================
           SEMANA DO CULTO
           ================================================= */

        if (
            ciclo === 0
        ) {

            if (
                sabadoAtual >= dataInicial &&
                sabadoAtual <= dataFinal
            ) {

                ocorrencias.push({

                    data:
                        dataParaString(
                            sabadoAtual
                        ),

                    tipo:
                        "Culto Connect",

                    titulo:
                        "Culto Connect",

                    horario:
                        "19h30",

                    local:
                        evento.local,

                    descricao:
                        "Culto Connect misto de jovens e adolescentes.",

                    destaque:
                        true

                });

            }

        }


        /* =================================================
           SEMANA DAS CÉLULAS
           ================================================= */

        else {

            /*
               Sexta-feira anterior ao sábado.
            */

            const sexta =
                adicionarDias(
                    sabadoAtual,
                    -1
                );


            /*
               Célula de adolescentes.
            */

            if (
                sexta >= dataInicial &&
                sexta <= dataFinal
            ) {

                ocorrencias.push({

                    data:
                        dataParaString(
                            sexta
                        ),

                    tipo:
                        "Célula Connect",

                    titulo:
                        "Célula Connect — Adolescentes",

                    horario:
                        "19h30",

                    local:
                        evento.local,

                    descricao:
                        "Encontro da Célula Connect de adolescentes.",

                    destaque:
                        false

                });

            }


            /*
               Célula de jovens.
            */

            if (
                sabadoAtual >= dataInicial &&
                sabadoAtual <= dataFinal
            ) {

                ocorrencias.push({

                    data:
                        dataParaString(
                            sabadoAtual
                        ),

                    tipo:
                        "Célula Connect",

                    titulo:
                        "Célula Connect — Jovens",

                    horario:
                        "19h30",

                    local:
                        evento.local,

                    descricao:
                        "Encontro da Célula Connect de jovens.",

                    destaque:
                        false

                });

            }

        }


        /*
           Próximo sábado.
        */

        sabadoAtual =
            adicionarDias(
                sabadoAtual,
                7
            );

    }


    return ocorrencias;

}


/* =========================================================
   CRIAR OCORRÊNCIA
   ========================================================= */

function criarOcorrencia(
    evento,
    data
) {

    return {

        data:

            data,

        tipo:

            evento.tipo,

        titulo:

            evento.titulo,

        horario:

            evento.horario,

        local:

            evento.local,

        descricao:

            evento.descricao,

        destaque:

            evento.destaque

    };

}


/* =========================================================
   DATA INICIAL DA RECORRÊNCIA
   ========================================================= */

function obterDataInicialRecorrencia(
    evento,
    hoje
) {

    /*
       Eventos semanais e quinzenais
       possuem data de início.

       Eventos mensais podem começar
       a partir de hoje.

       O Connect possui sua própria
       data de referência e não passa
       por esta função.
    */

    if (
        evento.recorrencia.dataInicio
    ) {

        return converterData(
            evento.recorrencia.dataInicio
        );

    }


    return hoje;

}


/* =========================================================
   GERAR TODOS OS EVENTOS
   ========================================================= */

function gerarTodosEventos() {

    const eventosGerados = [];

    const hoje =
        obterHoje();


    /*
       Período histórico.
    */

    const dataInicial =
        adicionarDias(
            hoje,
            -DIAS_HISTORICO
        );


    /*
       Período futuro.
    */

    const dataFinal =
        adicionarDias(
            hoje,
            DIAS_FUTUROS
        );


    eventos.forEach(
        evento => {

            const recorrencia =
                evento.recorrencia;


            /* =============================================
               EVENTO ÚNICO
               ============================================= */

            if (
                recorrencia.tipo ===
                "unico"
            ) {

                const dataEvento =
                    converterData(
                        recorrencia.data
                    );


                if (
                    dataEvento >= dataInicial &&
                    dataEvento <= dataFinal
                ) {

                    eventosGerados.push(
                        criarOcorrencia(
                            evento,
                            recorrencia.data
                        )
                    );

                }


                return;

            }


            /* =============================================
               EVENTO SEMANAL
               ============================================= */

            if (
                recorrencia.tipo ===
                "semanal"
            ) {

                const ocorrencias =
                    gerarOcorrenciasSemanais(
                        evento,

                        obterDataInicialRecorrencia(
                            evento,
                            hoje
                        ),

                        dataFinal,

                        1
                    );


                eventosGerados.push(
                    ...ocorrencias
                );


                return;

            }


            /* =============================================
               EVENTO QUINZENAL
               ============================================= */

            if (
                recorrencia.tipo ===
                "quinzenal"
            ) {

                const ocorrencias =
                    gerarOcorrenciasSemanais(
                        evento,

                        obterDataInicialRecorrencia(
                            evento,
                            hoje
                        ),

                        dataFinal,

                        2
                    );


                eventosGerados.push(
                    ...ocorrencias
                );


                return;

            }


            /* =============================================
               EVENTO MENSAL
               ============================================= */

            if (
                recorrencia.tipo ===
                "mensal"
            ) {

                const ocorrencias =
                    gerarOcorrenciasMensais(
                        evento,

                        obterDataInicialRecorrencia(
                            evento,
                            hoje
                        ),

                        dataFinal
                    );


                eventosGerados.push(
                    ...ocorrencias
                );


                return;

            }


            /* =============================================
               CONNECT
               ============================================= */

            if (
                recorrencia.tipo ===
                "connect"
            ) {

                const ocorrencias =
                    gerarOcorrenciasConnect(
                        evento,

                        dataInicial,

                        dataFinal
                    );


                eventosGerados.push(
                    ...ocorrencias
                );

            }

        }
    );


    /*
       Remove possíveis duplicações.
    */

    return removerEventosDuplicados(
        eventosGerados
    );

}


/* =========================================================
   REMOVER DUPLICADOS
   ========================================================= */

function removerEventosDuplicados(
    lista
) {

    const mapa =
        new Map();


    lista.forEach(
        evento => {

            const chave =
                `${evento.data}|${evento.titulo}|${evento.horario}`;


            if (
                !mapa.has(chave)
            ) {

                mapa.set(
                    chave,
                    evento
                );

            }

        }
    );


    return Array.from(
        mapa.values()
    );

}


/* =========================================================
   CRIAR CARD
   ========================================================= */

function criarEvento(
    evento
) {

    const data =
        formatarData(
            evento.data
        );


    const article =
        document.createElement(
            "article"
        );


    article.className =
        "evento-card";


    if (
        evento.destaque
    ) {

        article.classList.add(
            "destaque"
        );

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

    if (
        !listaEventos ||
        !listaEventosAnteriores
    ) {

        return;

    }


    /*
       Limpa as listas.
    */

    listaEventos.innerHTML = "";

    listaEventosAnteriores.innerHTML = "";


    /*
       Gera todos os eventos.
    */

    const todosEventos =
        gerarTodosEventos();


    const hoje =
        obterHoje();


    /* =====================================================
       PRÓXIMOS EVENTOS
       ===================================================== */

    const proximosEventos =
        todosEventos.filter(
            evento => {

                const dataEvento =
                    converterData(
                        evento.data
                    );


                return (
                    dataEvento >= hoje
                );

            }
        );


    /* =====================================================
       EVENTOS ANTERIORES
       ===================================================== */

    const eventosAnteriores =
        todosEventos.filter(
            evento => {

                const dataEvento =
                    converterData(
                        evento.data
                    );


                return (
                    dataEvento < hoje
                );

            }
        );


    /* =====================================================
       ORDENAR PRÓXIMOS
       ===================================================== */

    proximosEventos.sort(
        (a, b) => {

            return (
                converterData(a.data) -
                converterData(b.data)
            );

        }
    );


    /* =====================================================
       ORDENAR ANTERIORES
       ===================================================== */

    eventosAnteriores.sort(
        (a, b) => {

            return (
                converterData(b.data) -
                converterData(a.data)
            );

        }
    );


    /* =====================================================
       RENDERIZAR PRÓXIMOS
       ===================================================== */

    if (
        proximosEventos.length === 0
    ) {

        listaEventos.innerHTML = `

            <p class="eventos-vazio">
                Nenhum evento programado no momento.
            </p>

        `;

    }

    else {

        proximosEventos.forEach(
            evento => {

                const card =
                    criarEvento(
                        evento
                    );


                listaEventos.appendChild(
                    card
                );

            }
        );

    }


    /* =====================================================
       RENDERIZAR ANTERIORES
       ===================================================== */

    if (
        eventosAnteriores.length === 0
    ) {

        listaEventosAnteriores.innerHTML = `

            <p class="eventos-vazio">
                Ainda não há eventos anteriores.
            </p>

        `;

    }

    else {

        eventosAnteriores.forEach(
            evento => {

                const card =
                    criarEvento(
                        evento
                    );


                card.classList.add(
                    "evento-anterior"
                );


                listaEventosAnteriores.appendChild(
                    card
                );

            }
        );

    }

}


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderizarEventos();

    }
);