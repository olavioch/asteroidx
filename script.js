let check = document.getElementById('check');
let termosTela = document.getElementById('termos');
let menuTela =  document.getElementById('menu');
let rankTela = document.getElementById('rank');
let worldTela = document.getElementById('world');
let configTela = document.getElementById('config');
let controleSubTela = document.getElementById('controle');
let somSubTela = document.getElementById('som'); 
let videoSubTela = document.getElementById('video');
let addUserModal = document.getElementById('addUser');  
let telas = [termosTela, menuTela, rankTela, worldTela, configTela, termosTela, addUserModal];

function AceitaTermos(){
    if(check.checked){
        termosTela.style.display = "none";
        menuTela.style.display = "block";
    }
}

function Menu(escolha, acesso){
    menuTela.style.display = "none";
    switch(escolha){
        case 'rank':
            rankTela.style.display = "block";
        break;
        case 'newgame':
            TemAcesso(acesso);
            worldTela.style.display = 'flex';
        break;
        case 'continue':
            TemAcesso(acesso);
            worldTela.style.display = 'flex';
        break;
        case 'config':
            configTela.style.display = "flex";
        break;    
    }
}

function TemAcesso(acesso){
    if(acesso == true){
        addUserModal.style.display = 'flex';
    }else{
        addUserModal.style.display = 'none';
    }
}

function Sair(){
    telas.map( item => item.style.display = 'none');
    menuTela.style.display ='block';
}