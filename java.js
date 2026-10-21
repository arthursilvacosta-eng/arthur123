const clinicas = [

    {
        nome: "Doctor Vet",
        cidade: "Teresina",
        bairro: "São Cristóvão",
        endereco: "Av. Dom Severino, 3060",
        horario: "24 horas",
        nota: 4.7,
        avaliacoes: 539,
        telefone: "8632338449",
        whatsapp: "558632338449",
        instagram: "doctorvetteresina",
        preco: "Sob consulta",
        servicos: [
            "Emergência",
            "Internação",
            "Cirurgia",
            "Laboratório",
            "Imagem",
            "Especialidades"
        ]
    },

    {
        nome: "HVT - Hospital Veterinário de Teresina",
        cidade: "Teresina",
        bairro: "Parque Piauí",
        endereco: "Av. Mal. Juarez Távora, Quadra 57 Casa 08",
        horario: "24 horas",
        nota: 4.4,
        avaliacoes: 1100,
        telefone: "8632201990",
        whatsapp: "5586999984982",
        instagram: "hvt_teresina",
        preco: "Sob consulta",
        servicos: [
            "Emergência",
            "Internação",
            "Cirurgia",
            "Exames",
            "Consultas"
        ]
    },

    {
        nome: "BioVet São Francisco",
        cidade: "Teresina",
        bairro: "Pirajá",
        endereco: "Rua Rui Barbosa, 2076",
        horario: "Seg-Sex: 08h-12h / 14h-18h | Sáb: 08h-12h",
        nota: 4.9,
        avaliacoes: 143,
        telefone: "86998445406",
        whatsapp: "5586998445406",
        instagram: "",
        preco: "Sob consulta",
        servicos: [
            "Consulta",
            "Exames",
            "Vacinação"
        ]
    },

    {
        nome: "Amor de Bichos",
        cidade: "Teresina",
        bairro: "Aeroporto",
        endereco: "Av. Centenário, 1974",
        horario: "Seg-Sex: 08h-12h / 14h-18h | Sáb: 08h-14h",
        nota: 5.0,
        avaliacoes: 34,
        telefone: "8630852336",
        whatsapp: "558630852336",
        instagram: "",
        preco: "Sob consulta",
        servicos: [
            "Clínica",
            "Pet Shop",
            "Banho",
            "Tosa"
        ]
    },

    {
        nome: "Focinhos Clínica Veterinária e Petshop",
        cidade: "Timon",
        bairro: "Parque Piauí",
        endereco: "Av. Jaime Rios, 409",
        horario: "Seg-Sex: 08h-12h / 14h-18h | Dom: 08h-12h",
        nota: 5.0,
        avaliacoes: 6,
        telefone: "86995229301",
        whatsapp: "5586995229301",
        instagram: "",
        preco: "Sob consulta",
        servicos: [
            "Consulta",
            "Pet Shop",
            "Vacinação"
        ]
    },

    {
        nome: "Consultório Petzuma",
        cidade: "Timon",
        bairro: "Parque Piauí",
        endereco: "Av. Teresina, 937",
        horario: "Seg-Sex: 08h-17h | Sáb: 08h-14h",
        nota: 5.0,
        avaliacoes: 19,
        telefone: "",
        whatsapp: "5599984780527",
        instagram: "",
        preco: "Sob consulta",
        servicos: [
            "Consulta",
            "Vacinação",
            "Exames"
        ]
    },

    {
        nome: "Pró-Animais",
        cidade: "Timon",
        bairro: "Centro",
        endereco: "Av. Paulo Ramos, 188",
        horario: "Seg-Sex: 08h-12h / 14h-18h | Sáb: 08h-12h",
        nota: 4.5,
        avaliacoes: 199,
        telefone: "86988516274",
        whatsapp: "5586988516274",
        instagram: "",
        preco: "Sob consulta",
        servicos: [
            "Consulta",
            "Vacinação",
            "Tratamento"
        ]
    },

    {
        nome: "UVZ - Unidade de Vigilância de Zoonoses",
        cidade: "Timon",
        bairro: "Parque Piauí",
        endereco: "Rua Dezesseis, 181",
        horario: "Seg-Qui: 08h-11h30 / 14h-17h | Sex: 08h-11h / 14h-16h",
        nota: null,
        avaliacoes: 0,
        telefone: "86995507657",
        whatsapp: "",
        instagram: "",
        preco: "Serviço público",
        servicos: [
            "Zoonoses",
            "Atendimento público"
        ]
    }

];


const lista = document.getElementById("listaClinicas");
const pesquisa = document.getElementById("pesquisa");


function criarBotoes(clinica) {

    let botoes = "";

    if (clinica.telefone) {

        botoes += `
            <a
                class="contato telefone"
                href="tel:${clinica.telefone}"
            >
                📞 Ligar
            </a>
        `;

    }


    if (clinica.whatsapp) {

        botoes += `
            <a
                class="contato whatsapp"
                target="_blank"
                href="https://wa.me/${clinica.whatsapp}"
            >
                💬 WhatsApp
            </a>
        `;

    }


    if (clinica.instagram) {

        botoes += `
            <a
                class="contato instagram"
                target="_blank"
                href="https://instagram.com/${clinica.instagram}"
            >
                📸 Instagram
            </a>
        `;

    }

    return botoes;
}


function mostrarClinicas(listaFiltrada) {

    lista.innerHTML = "";


    if (listaFiltrada.length === 0) {

        lista.innerHTML = `
            <div class="aviso">
                ❌ Nenhuma clínica encontrada.
            </div>
        `;

        return;
    }


    listaFiltrada.forEach(clinica => {

        let nota = "";

        if (clinica.nota !== null) {

            nota = `
                <div class="nota">
                    ⭐ ${clinica.nota}
                    (${clinica.avaliacoes} avaliações)
                </div>
            `;

        } else {

            nota = `
                <div class="nota">
                    ⭐ Avaliação não informada
                </div>
            `;

        }


        let servicos = "";

        clinica.servicos.forEach(servico => {

            servicos += `
                <span class="servico">
                    ${servico}
                </span>
            `;

        });


        lista.innerHTML += `

            <article class="clinica">

                <h3>
                    ${clinica.nome}
                </h3>

                <p>
                    📍 ${clinica.cidade} -
                    ${clinica.bairro}
                </p>

                <p class="endereco">
                    ${clinica.endereco}
                </p>

                ${nota}

                <div class="horario">

                    🕐 <strong>Horário:</strong>

                    <br>

                    ${clinica.horario}

                </div>


                <p>
                    💰 <strong>Valor:</strong>
                    ${clinica.preco}
                </p>


                <div class="servicos">

                    ${servicos}

                </div>


                <div class="contatos">

                    ${criarBotoes(clinica)}

                </div>

            </article>

        `;

    });

}


mostrarClinicas(clinicas);


pesquisa.addEventListener("input", function () {

    const texto = pesquisa.value.toLowerCase();


    const resultado = clinicas.filter(clinica => {

        const dados = `

            ${clinica.nome}
            ${clinica.cidade}
            ${clinica.bairro}
            ${clinica.endereco}
            ${clinica.servicos.join(" ")}

        `.toLowerCase();


        return dados.includes(texto);

    });


    mostrarClinicas(resultado);

});



/* MENU MOBILE */

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");


menuBtn.addEventListener("click", function () {

    menu.classList.toggle("ativo");

});


/* FECHAR MENU AO CLICAR */

const links = document.querySelectorAll("#menu a");


links.forEach(link => {

    link.addEventListener("click", function () {

        menu.classList.remove("ativo");

    });

});