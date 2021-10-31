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
let userName = document.getElementById('containerUser');
let inputUser = document.getElementById('inputUser');
let worldOptions = document.getElementById('worldOptions');
let worldItem = document.getElementsByClassName('world_item');    
let telas = [worldOptions, termosTela, menuTela, rankTela, worldTela, configTela, termosTela, addUserModal, userName];

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
            userName.style.display='block';
            worldOptions.style.display='flex';
        break;
        case 'continue':
            TemAcesso(acesso);
            worldTela.style.display = 'flex';
            userName.style.display='block';
            worldOptions.style.display='flex';
        break;
        case 'config':
            configTela.style.display = "flex";
        break;    
    }
}
function CadastrarNome(acesso){
     TemAcesso(acesso);
    userName.innerHTML = inputUser.value;
}

function TemAcesso(acesso){
    if(acesso == true){
        addUserModal.style.display = 'flex';
    }else{
        addUserModal.style.display = 'none';
    }
}

let move=0;
function MoverModal(direcao){
    if(direcao == 'esquerda'){
        move+=26;
        worldTela.style.transform = `translateX(${move}vw)`;
        move <= 0?
        (document.getElementById('direita').style.display='block'):
        (document.getElementById('esquerda').style.display='none');
    }
    if(direcao == 'direita'){
        move-=26;
        worldTela.style.transform = `translateX(${move}vw)`;
        document.getElementById('esquerda').style.display='block';
        move >= 0?
        (document.getElementById('esquerda').style.display='block'):
        (document.getElementById('direita').style.display='none')
    }   
    AumentarItemModal(move);
    console.log(move);
}

function ResetarItems(){
    let worldmap = [...worldItem];
    worldmap.map(item => {
        item.classList.add("word--nscale");
        item.classList.remove("word--scale");
    });
}

function AumentarItemModal(move){
    ResetarItems();
    switch(move){
        case -26:
            worldItem[2].classList.add("word--scale");
            worldItem[2].classList.remove("word--nscale");
        break;
        case 0:
            worldItem[1].classList.add("word--scale");
            worldItem[1].classList.remove("word--nscale");
        break;
        case 26:
            worldItem[0].classList.add("word--scale");
            worldItem[0].classList.remove("word--nscale");
        break;    
    }
}

function Sair(){
    telas.map( item => item.style.display = 'none');
    menuTela.style.display ='block';
}