// JavaScript para o menu mobile
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navOverlay = document.getElementById('nav-overlay');

    // Adicionar botão "Comprar Agora" em todos os cards de produtos
    function addBuyNowButtons() {
        const productContents = document.querySelectorAll('.product-content');
        
        productContents.forEach(content => {
            // Verificar se já tem o botão para evitar duplicação
            if (!content.querySelector('.buy-now-btn')) {
                // Pegar o título do produto para personalizar a mensagem
                const productTitle = content.querySelector('h3')?.textContent || 'produtos';
                
                // Criar o link do WhatsApp
                const whatsappLink = document.createElement('a');
                whatsappLink.href = `https://wa.me/5545998021630?text=Olá!%20Tenho%20interesse%20em%20${encodeURIComponent(productTitle)}%20da%20sua%20loja.`;
                whatsappLink.className = 'buy-now-btn';
                whatsappLink.textContent = 'Comprar Agora';
                whatsappLink.target = '_blank';
                
                // Adicionar o botão ao final do content
                content.appendChild(whatsappLink);
            }
        });
    }
    
    // Executar a função para adicionar os botões
    if (window.location.pathname.includes('produtos.html')) {
        addBuyNowButtons();
    }
    
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        navOverlay.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.classList.remove('menu-open');
    }

    mobileMenu.addEventListener('click', toggleMobileMenu);

    // Fechar menu mobile ao clicar no overlay
    navOverlay.addEventListener('click', closeMobileMenu);

    // Fechar menu mobile ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Fechar menu mobile ao redimensionar a tela
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });

    // Função para scroll suave em links internos
    function smoothScroll() {
        // Seleciona todos os links que começam com #
        const internalLinks = document.querySelectorAll('a[href^="#"]');
        
        internalLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Pega o href do link
                const targetId = this.getAttribute('href');
                
                // Se for apenas # (link para o topo), não faz nada especial
                if (targetId === '#') {
                    e.preventDefault();
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                    return;
                }
                
                // Procura o elemento de destino
                const targetElement = document.querySelector(targetId);
                
                // Se o elemento existe, faz scroll suave
                if (targetElement) {
                    e.preventDefault();
                    
                    // Calcula a posição considerando altura do header fixo (se houver)
                    const headerHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20; // 20px de margem extra
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Inicializa o scroll suave
    smoothScroll();
});
