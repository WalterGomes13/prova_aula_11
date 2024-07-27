const perguntas = ["Quantas maravilhas existem no mundo?",
    "Quantos países existem no mundo?",
    "Quantos oceanos existem no mundo?",
    "Quantos continentes existem no mundo?"
]

const options = [
    ["5","8","7","9"],
    ["195","202","187","210"],
    ["3","5","6","4"],
    ["5","8","6","7"]
]

const container = document.getElementById('container')
const textResp = document.getElementById('resposta')
const reload = document.getElementById('reload');

const respostas = [2,0,1,2]

let questaoAtual = Math.floor(Math.random() * perguntas.length);

const pergunta = document.getElementById('pergunta');
pergunta.innerHTML = `${perguntas[questaoAtual]}`;

const option = document.querySelectorAll('.opcoes');
for(let i = 0;i<options.length;i++){
    option[i].innerHTML = `${options[questaoAtual][i]}`
    option[i].addEventListener('click',()=>{
        reload.style.display = 'block';
        if(i==respostas[questaoAtual]){
            container.style.animation = 'aumentarTam';
            textResp.innerText = 'Acertou!' 
            
        } else{
            container.style.animation = 'aumentarTam';
            textResp.innerText = 'Resposta errada!'
        };

        reload.addEventListener('click',()=>{
            reload.style.display = 'none';
            location.reload();
        })
    })
}


