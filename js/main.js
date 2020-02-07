
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

let pesoValido = true;
let alturaValida = true;

//VALIDAR DADOS
if (peso <= 0  || peso > 1000){
    console.log("peso invalido"); 
    pesoValido = false  
}
if (Altura <= 0 ){
    console.log("altura invalido"); 
    alturaValida = true  
}
if (pesoValido == true && alturaValida == true)
{
//calcular o IMC
let imc = peso / Altura ** 2;
// calcular IMC

//escrever O iMC na tabela
let tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;
}
