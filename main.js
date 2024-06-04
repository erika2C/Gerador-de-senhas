const numeroSenha = documento.querSelector('.parametro-senha_texto');
let tamanhoSenha = 12
numeroSenha.textContent= tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const símbolos = '!@#$%*?';
const botoes = document.querySelectorAll('.parametro-senha_botao');
const compoSenha = document.querySelector('#compo-senha');
const checkbox= document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');

botoes[0].onclick= diminuiTamanho;
botoes[1].onclick= aumentaTamanho;

function diminuiTamanho() {
    if(tamanhoSenha > 1) {
        tamanhoSenha--;
    
    }
}
numeroSenha.textContent = tamanhoSenha;
geraSenha();

function aumentarTamanho() {
    if(tamanhoSenha > 20) {
        tamanhoSenha++;
    
    }
}
numeroSenha.textContent = tamanhoSenha;
geraSenha();

for(1=0; 1< checkbox.length; 1++){
    checkbox[1].onclick = geraSenha
}

geraSenha();

function geraSenha() {
    let alfabeto = '';
    if (checkbox[0].checked) {
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked) {
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked) {
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked) {
        alfabeto = alfabeto + simbolos;
    }
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.random() * alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
    classificaSenha(alfabeto.length); 
}
 
function classificaSenha(){
    forcaSenha.classList.remove('fraca','media','forte');
    if (tamanhoSenha > 11){
        forcaSenha.classList.add('forte');
    } else if (tamanhoSenha > 5 && tamanhoSenha < 12 ) {
        forcaSenha.classList.add('media');
    } else if (tamanhoSenha <= 5){
        forcaSenha.classList.add('fraca');
    }
}
