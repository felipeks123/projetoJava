var titulo = document.querySelector("#titulo");
titulo.textContent = "ETECIA Nutrição e Dietética"

let pacientes = document.querySelectorAll(".paciente")

pacientes.forEach(function (paciente) {
    let peso = paciente.querySelector(".info-peso").textContent
    let altura = paciente.querySelector(".info-altura").textContent

    let pesoValido = true;
    let alturaValido = true;

    let tdImc = paciente.querySelector(".info-imc")
    if (peso <= 0 || peso > 1000) {
        pesoValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido")

    }
    if (altura <= 0 || altura > 3.00) {
        alturaValido = false;
        tdImc.textContent = "Altura Inválida"
        paciente.classList.add("paciente-invalido")
    }
    if (pesoValido && alturaValido) {
        let imc = peso / altura ** 2
        tdImc.textContent = imc.toFixed(2);
    }

    
});
let botao = document.querySelector("#botao-cadastrar");

botao.addEventListener("click",function (evento){
evento.preventDefault();
//pegar os valores form
let formulario = document.querySelector("#form-paciente");
let nome = formulario.nome.value;
let peso = formulario.peso.value;
let altura = formulario.altura.value;
let gordura = formulario.gordura.value;
//criar linhas
let tr = document.createElement("tr");
let table = document.querySelector("#tabela-pacientes");
table.appendChild(tr);
tr.classList.add("paciente");
console.log(peso,nome,altura,gordura);

//criar td
let tdNome = document.createElement("td");
tdNome.textContent = nome;
tr.appendChild(tdNome);

let tdPeso = document.createElement("td");
tdPeso.textContent = peso;
tr.appendChild(tdPeso);

let tdAltura = document.createElement("td");
tdAltura.textContent = altura;
tr.appendChild(tdAltura);

let tdGordura = document.createElement("td");
tdGordura.textContent = gordura;
tr.appendChild(tdGordura);

let tdImc = document.createElement("td");
tdImc.textContent = imc;
tr.appendChild(tdImc);


});

titulo.onclick = mostrarMensagem;

titulo.addEventListener("click",mostrarMensagem);
titulo.addEventListener("click",trocarCor);


function mostrarMensagem(){
    console.log("evento aconteceu");
}
function trocarCor(){
    let cor = parseInt(Math.random()*255);
    console.log(cor)
    titulo.style.color = "rgb(" +cor+ "," +cor+ "," +cor+ ")";
}
