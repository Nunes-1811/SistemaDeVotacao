
const selectPersonagem = document.querySelector("#personagem");
const btnVotar = document.querySelector("#btn-votar");
const divErro = document.querySelector(".erro");
const listaRanking = document.querySelector("#listaRanking");
const form = document.querySelector('#form-votacao');


const votos = {
    "Hollow Knight": 0,
    "Steve": 0,
    "Xicrinho": 0,
    "Donkey Kong": 0
};

form.addEventListener('submit', function(e){
    e.preventDefault();
    votar();
})

function votar() {
    const escolhido = selectPersonagem.value;

    if (escolhido === "") {
        divErro.textContent = "Selecione um personagem para votar!";
        return;
    }

    divErro.textContent = "";

    votos[escolhido]++;

    atualizarRanking();
}

function atualizarRanking() {

    listaRanking.innerHTML = "";

    const rankingOrdenado = Object.entries(votos).sort((a, b) => b[1] - a[1]);
    const lider = rankingOrdenado[0][0];

    rankingOrdenado.forEach(([nome, qtVotos]) => {
        
        const li = document.createElement("li");
        
        li.textContent = `${nome} — ${qtVotos} voto(s)`;

        if (nome === lider && qtVotos > 0) {
            li.classList.add("lider");
        }
        listaRanking.appendChild(li);
    });
}
btnVotar.addEventListener("submit", votar);
