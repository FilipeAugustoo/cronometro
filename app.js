"use strict"

var hh = 0;
var mm = 0;
var ss = 0;
var ml = 0;

var tempo = 10;//Quantos milésimos valem 1 segundo?
var cron;

//Inicia o temporizador
function start() {
    cron = setInterval(() => { timer(); }, tempo);
}

//Para o temporizador mas não limpa as variáveis
function pause() {
    clearInterval(cron);
}

//Para o temporizador e limpa as variáveis
function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;
    ml = 0;

    document.getElementById('counter').innerText = '00:00:00:00';
}

//Faz a contagem do tempo e exibição, o timer roda em milesimos
function timer() {
    ml++;

    if (ml == 99) { //Verifica se os milésimos deu 99 e adiciona 1 segundo
        ss++
        ml = 0;

        if (ss == 59) { //Verifica se os segundos deu 59 e adiciona 1 minuto
            mm++
            ss = 0;

            if (mm == 59) { //Verifica se os minutos deu 59 e adiciona 1 hora
                hh++
                mm = 0;
            }
        }
    }


    //Cria uma variável com o valor tratado HH:MM:SS
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss) + ':' + (ml < 10 ? '0' + ml : ml);
    
    //Insere o valor tratado no elemento counter
    document.getElementById('counter').innerText = format;

    //Retorna o valor tratado
    return format;
}
