"use strict"
document.addEventListener('DOMContentLoaded', () =>{

const baralho = [
    {
        nome: 'iguro',
        img: "imagens/iguro.png"
    },

    {
        nome: "giyu",
        img: "imagens/giyu.png"
    },

    {
        nome: "himejima",
        img: "imagens/himejima.png"
    },

    {
        nome: "mitsuri",
        img: "imagens/mitsuri.png"
    },

    {
        nome: "rengoku",
        img: "imagens/rengoku.png"
    },

    {
        nome: "shinazugawa",
        img: "imagens/shinazugawa.png"
    },

    {
        nome: "shinobu",
        img: "imagens/shinobu.png"
    },

    {
        nome: "tokitou",
        img: "imagens/tokitou.png"
    },

    {
        nome: "uzui",
        img: "imagens/uzui.png"
    },

    {
        nome: "iguro",
        img: "imagens/iguro.png"
    },

    {
        nome: "giyu",
        img: "imagens/giyu.png"
    },

    {
        nome: "himejima",
        img: "imagens/himejima.png"
    },

    {
        nome: "mitsuri",
        img: "imagens/mitsuri.png"
    },

    {
        nome: "rengoku",
        img: "imagens/rengoku.png"
    },

    {
        nome: "shinazugawa",
        img: "imagens/shinazugawa.png"
    },

    {
        nome: "shinobu",
        img: "imagens/shinobu.png"
    },

    {
        nome: "tokitou",
        img: "imagens/tokitou.png"
    },

    {
        nome: "uzui",
        img: "imagens/uzui.png"
    },

]
baralho.sort(() => 0.5 - Math.random());

const tabuleiro = document.querySelector('.tabuleiro');
const final = document.querySelector('#recomecar');
var cartaAtiva = [];
var cartaAtivaNum = [];
var acertos = [];

function criaTabuleiro(){
    for(let i = 0; i < baralho.length; i++){
        var card = document.createElement('img');
        card.setAttribute('src', 'imagens/logo.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', virarCarta);
        tabuleiro.appendChild(card)
    }
}

function virarCarta(){
    var cardNum = this.getAttribute('data-id');
    cartaAtiva.push(baralho[cardNum].nome);
    cartaAtivaNum.push(cardNum);
    this.setAttribute('src', baralho[cardNum].img);
    if (cartaAtiva.length === 2){
        setTimeout(verificaPar, 700)
    }
}

function verificaPar(){
    var cartas = document.querySelectorAll('img');
    const carta1Num = cartaAtivaNum[0];
    const carta2Num = cartaAtivaNum[1];
    console.log(carta1Num)
    console.log(carta2Num)
    console.log(cartaAtiva[0])
    console.log(cartaAtiva[1])

    if(cartaAtiva[0] === cartaAtiva[1]){
        cartas[carta1Num].removeEventListener('click', virarCarta);
        cartas[carta2Num].removeEventListener('click', virarCarta);
        acertos.push(cartaAtiva);
    }else{
        cartas[carta1Num].setAttribute('src', 'imagens/logo.png');
        cartas[carta2Num].setAttribute('src', 'imagens/logo.png');
    }
    cartaAtiva = []
    cartaAtivaNum = []

if(acertos.length === baralho.length/2){
    final.style.display = 'flex';
}

}


criaTabuleiro();

})