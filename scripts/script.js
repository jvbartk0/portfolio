const nome = document.getElementById('nome');
const mensagem = document.getElementById('mensagem');
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nomeValue = nome.value.trim();
    const mensagemValue = mensagem.value.trim();

    if (nomeValue === '' || mensagemValue === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }


    const whatsappUrl = `https://wa.me/5546988058511?text=Olá, meu nome é%20${encodeURIComponent(nomeValue)}%0A${encodeURIComponent(mensagemValue)}`;
    window.open(whatsappUrl, '_blank');

    formulario.reset();
});


// Adicionar funcionalidade ao botão de baixar CV
const botaoBaixarCv = document.getElementById('baixarCv');
botaoBaixarCv.addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'cv/Joao_Bartko_CV.pdf';
    link.download = 'Joao_Bartko_CV.pdf';
    link.click();
});

/* -----------------------------
   MENU HAMBURGUER: abre/fecha com animação
   ----------------------------- */
(function(){
  const hamburger = document.querySelector('.hamburger');
  const menu = document.getElementById('menu-principal');

  if(!hamburger || !menu) return; // se não existe, nada a fazer

  // função para alternar menu
  function toggleMenu(){
    const isOpen = menu.classList.toggle('open');
    hamburger.classList.toggle('is-active', isOpen);
    // acessibilidade
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    // quando aberto, opcionalmente bloquear scroll de fundo
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  hamburger.addEventListener('click', function(e){
    e.stopPropagation();
    toggleMenu();
  });

  // Fechar ao clicar em link do menu (evita ficar aberto)
  menu.querySelectorAll('a.menu-link').forEach(a=>{
    a.addEventListener('click', ()=>{
      if(menu.classList.contains('open')){
        menu.classList.remove('open');
        hamburger.classList.remove('is-active');
        hamburger.setAttribute('aria-expanded','false');
        document.body.style.overflow = '';
      }
    });
  });

  // Fechar ao clicar fora do menu (área do documento)
  document.addEventListener('click', function(e){
    if(menu.classList.contains('open') && !menu.contains(e.target) && !hamburger.contains(e.target)){
      menu.classList.remove('open');
      hamburger.classList.remove('is-active');
      hamburger.setAttribute('aria-expanded','false');
      document.body.style.overflow = '';
    }
  });

  // Se o usuário redimensionar a janela para desktop, garantir que o menu feche
  window.addEventListener('resize', function(){
    if(window.innerWidth > 900){
      if(menu.classList.contains('open')){
        menu.classList.remove('open');
        hamburger.classList.remove('is-active');
        hamburger.setAttribute('aria-expanded','false');
        document.body.style.overflow = '';
      }
    }
  });
})();