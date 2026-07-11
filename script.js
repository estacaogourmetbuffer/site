// Script Otimizado e Reduzido
document.addEventListener("DOMContentLoaded", () => {
    
    // Suavizar clique em links externos ou interações futuras
    const whatsappBtn = document.querySelector('.btn-whatsapp');
    
    whatsappBtn.addEventListener('click', () => {
        // Log analítico opcional ou métrica de conversão
        console.log('Usuário clicou no botão do WhatsApp.');
    });

    // Efeito sutil de revelação ao rolar a página (Opcional & Leve)
    const cards = document.querySelectorAll('.produto-card, .depoimento-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });
});