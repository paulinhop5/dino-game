const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let pulando = false;
let position = 0;
let score = 0;


function spaceup(event) {
    if(event.keyCode === 32){
        if(!pulando){
            jump();
        }    
    }
}

function jump() { //faz o dino pular


    pulando = true;

    let upInterval = setInterval(() => {

        if(position >= 150) {
            //descendo
            let downInterval = setInterval(() => {
                if(position < 0)
                {
                    clearInterval(downInterval);
                    clearInterval(upInterval);
                    pulando = false;
                }
                position = position - 10;
            }, 15);
        }else{
            //subindo
            position = position + 10;
            dino.style.bottom = position + 'px';
        }

    }, 15);
}  

function createcactus(){
    const cactus = document.createElement('div');
    let cactusposition = 1500;
    let randomtime = Math.random() * 6000;
    console.log(randomtime);

    cactus.classList.add('cactus');
    cactus.style.left = 1500 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {

        if(cactusposition < -60){ 
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else if(cactusposition > 0 && cactusposition < 60 && position < 60) {
            // game over.
            clearInterval(leftInterval);
            gameover();
        } else {
            cactusposition = cactusposition - 10;
            cactus.style.left = cactusposition + 'px';
        }
    }, 20); 

    setTimeout(createcactus,randomtime);
    
} 

function gameover() {
    document.body.innerHTML = '<h1 class="game-over">Fim de Jogo <br><br> Para Reinicar o jogo Aperte F5</h1>' 
}

createcactus();
document.addEventListener('keydown', spaceup);  

 
  

 
    