let resposta1 = 'Bebê Alexander';
let resposta2 = 'Porco';
let resposta3 = '27';
let posicao = 0;
let boneco = document.getElementById( 'boneco');
let movimento = setInterval(andar,30);


function comecar(){
    inicio.style.display = 'none';
    pergunta1.style.display = 'flex';
}

function responder(alternativa){
    if (alternativa === resposta1){
        pergunta1.style.display = 'none';
        pergunta2.style.display = 'flex';
        
    } else{
        document.getElementById('alerta').innerText = "Errou!";
    }
};


function responder2(alternativa){
    if(alternativa === resposta2){
        pergunta2.style.display = 'none';
        pergunta3.style.display = 'flex';
    } else{
        document.getElementById('alerta2').innerText = 'Errou de novo!! Tô triste 🥺'
    }
};

function responder3(alternativa){
   if (alternativa === resposta3){
    pergunta3.style.display = 'none';
    jogo.style.display = 'flex';
   } else{
    document.getElementById('alerta3').innerText = 'Nunca me amou!!😭'
   }
};

function andar(){
    posicao += 4;
    boneco.style.left = posicao + 'px';
    if(posicao>1200){
        posicao = 0;
    }
};

function pegar(){
     setTimeout(mostrarcarta, 1500);
     clearInterval(movimento);
     document.getElementById('aviso').innerText = "Tenho uma coisa para você..";
     function mostrarcarta(){
      carta.style.display = 'flex';
      jogo.style.display = 'none';

     }
     
    };
