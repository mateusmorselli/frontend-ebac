const valorB = document.getElementById('campoB');
const valorA = document.getElementById('campoA');
const form = document.getElementById('form-comparativo');

function compararValores(){
    const valorDeA = valorA.value;
    const valorDeB = valorB.value;    
    return valorDeA >= valorDeB;
};

form.addEventListener('submit', function(e){
    e.preventDefault();
    const msgSucess = `Parabéns, <b>${valorB.value}</b> é maior que <b>${valorA.value}</b>`;    
    formValidation = compararValores();
    if (!formValidation) {
        const containerMsgSucess = document.querySelector('.sucess-message');
        containerMsgSucess.innerHTML = msgSucess;
        containerMsgSucess.style.backgroundColor = '#27ae60';
        containerMsgSucess.style.display = 'block';

        valorA.value = '';
        valorB.value = '';
    }
});



valorB.addEventListener('keyup', function(e){
    if (compararValores()) {
        valorA.classList.add('error');
        document.querySelector('.error-msg').style.display = 'block';
    } else {
        valorA.classList.remove('error');
        document.querySelector('.error-msg').style.display = 'none';
    }
});