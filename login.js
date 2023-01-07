const input = document.getElementById('matricula');

const mensagemErro = document.getElementById('error');

input.addEventListener('input', function(){
    if(isNaN(input.value)){
        mensagemErro.style.display = 'block';
    }
    else{
        mensagemErro.style.display = 'none';
    }
});