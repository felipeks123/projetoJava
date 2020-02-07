
//alert("error")
//Console.error("bien venido");
//Console.log("bem vindo");
let titulo = document.querySelector("#titulo")
//console.log(document.querySelector("h1"));
titulo.textContent = "ETECIA Desenvolvimento de sistemas";
//pegar o peso
let paciente = document.querySelector(".paciente")
let tdpeso = paciente.querySelector(".info-peso")
let peso = tdpeso.textContent;
//Pegar a altura

let tdAltura = paciente.querySelector(".info-altura");
let Altura = tdAltura.textContent;
console.log(Altura)
//calcular o IMC
let imc = peso / Altura ** 2;


//pegar a altura

// calcular IMC

//escrever O iMC na tabela
let tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;