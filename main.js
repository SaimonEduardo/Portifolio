// Seleciona todos os links de navegação
const navLinks = document.querySelectorAll('nav a');

// Para cada link, adiciona o comportamento de rolagem suave
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão de navegação

        // Obtém o destino da rolagem a partir do atributo href
        const targetId = this.getAttribute('href').substring(1); // Remove o '#' de href
        const targetElement = document.getElementById(targetId);

        // Rola suavemente para o elemento
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});