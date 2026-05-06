input=document.querySelector("input");
p=document.querySelector("p");
numeroGenerato=0;
modalità="DaFarIndovinare"
function generateNumber(){
    numeroGenerato=Math.round(Math.random()*100);
}
generateNumber();
function check(){
    if(modalità=="DaFarIndovinare"){
        if(input.value==numeroGenerato){
            p.innerHTML="Hai indovinato,complimenti";
            document.querySelectorAll("button")[0].disabled=true
            input.readOnly=true
        }  
        else if(input.value<numeroGenerato){
            p.innerHTML="Inserisci un numero maggiore";
        }
        else if(input.value>numeroGenerato){
            p.innerHTML="Inserisci un numero minore";
        }
    }
}
function restart(){
    document.querySelectorAll("button")[0].disabled=false
    input.readOnly=false
    generateNumber()
    p.innerHTML=""
    input.value=""
    if(modalità=="DaIndovinare"){
        document.querySelectorAll("button")[4].disabled=false
        document.querySelectorAll("button")[5].disabled=false
        document.querySelectorAll("button")[6].disabled=false
        numeroProva=50
        p.innerHTML=`Il numero è ${numeroProva}?`
        nMinore=0 
        nMaggiore=100
    }
}
function changeMode(){
    restart()
    if(modalità=="DaFarIndovinare"){
        modalità="DaIndovinare"
        input.hidden=true
        document.querySelector("div").hidden=false
        document.querySelector("label").hidden=true
        document.getElementById("invio").hidden=true
        indovinaNumero()
    }
    else if(modalità=="DaIndovinare"){
        modalità="DaFarIndovinare"
        input.hidden=false 
        document.querySelector("div").hidden=true 
        document.querySelector("label").hidden=false 
        document.getElementById("invio").hidden=false
        p.innerHTML=``
    }
}
function indovinaNumero(){
    numeroProva=50
    p.innerHTML=`Il numero é ${numeroProva}?`
}
function correct(){
    p.innerHTML="Grande,vuoi continuare?"
    document.querySelectorAll("button")[5].disabled=true
    document.querySelectorAll("button")[4].disabled=true
    document.querySelectorAll("button")[6].disabled=true
}
nMinore=0 
nMaggiore=100
function indovinateN(scelta){
    if(scelta==="maggiore"){
        nMinore=numeroProva
    }
    else if(scelta==="minore"){
        nMaggiore=numeroProva
    }
    numeroProva=Math.round((nMaggiore-nMinore)/2)+nMinore
    p.innerHTML=`Il numero è ${numeroProva}?`
}
