document.addEventListener('DOMContentLoaded', function() {

    const heroSection = document.querySelector('.sobre');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual >= 50) {
            ocultaElementosHeader();
        } else {
            exibeElementosHeader();
        };
    })

    
})

function ocultaElementosHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden')
}

function exibeElementosHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden')
}