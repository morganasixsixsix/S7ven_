
let slideIndex = 1;
mostrarSlides(slideIndex);

// Função para mudar o slide com as setas
function mudarSlide(n) {
    mostrarSlides(slideIndex += n);
}

// Função para ir para um slide específico com os pontos
function slideAtual(n) {
    mostrarSlides(slideIndex = n);
}

// Lógica principal do carrossel
function mostrarSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carrossel-slide");
    let dots = document.getElementsByClassName("dot");
    
    // Volta para o primeiro slide se passar do último
    if (n > slides.length) {slideIndex = 1}    
    
    // Vai para o último slide se estiver no primeiro e apertar "anterior"
    if (n < 1) {slideIndex = slides.length}
    
    // Oculta todos os slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Remove a classe "active" de todos os pontos
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Exibe o slide atual e marca o ponto correspondente
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

