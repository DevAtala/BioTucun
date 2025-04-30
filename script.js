    // Seleciona todos os elementos que serão animados
    const elementos = document.querySelectorAll('.bar');
        
    // Configura o Intersection Observer
    const observador = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Verifica se o elemento está visível na tela
            if (entry.isIntersecting) {
                // Adiciona a classe que ativa a animação
                entry.target.classList.add('barAnimation');
            }
        });
    }, {
        // Configura o quanto do elemento precisa estar visível para acionar
        threshold: 1
    });
    
    // Começa a observar cada elemento
    if (elementos.length > 0) {
        elementos.forEach(elemento => {
            observador.observe(elemento);
        });
    } else {
        console.error('Nenhum elemento com a classe "bar" encontrado');
    }

    AOS.init();