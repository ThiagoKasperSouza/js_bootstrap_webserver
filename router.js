// router.js

// Função que busca o conteúdo HTML de um arquivo
async function loadContent(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.text();
}

// Função que renderiza o componente com base na URL
async function render() {
  const mainPlaceholder = document.getElementById('main-placeholder');
  const path = window.location.pathname;
  console.log("path", path);
  try {
    switch (path) {
      case '/':
        mainPlaceholder.innerHTML = await loadContent('./src/components/main.html');
        break;
      case '/teste1':
        mainPlaceholder.innerHTML = await loadContent('./src/components/teste1.html');
        break;
      default:
        mainPlaceholder.innerHTML = await loadContent('./src/components/notFound.html');
        break;
    }
  } catch(error) {
    mainPlaceholder.innerHTML = `<h1>Erro ao carregar a página</h1><p>${error.message}</p>`;
  }

}

// Função para manipular a navegação
async function navigate(event) {
  event.preventDefault(); // Evita o comportamento padrão do link
  const path = event.target.getAttribute('href'); // Obtém o caminho do link
  window.history.pushState({}, '', path); // Atualiza a URL sem recarregar a página
  await render(); // Renderiza o novo conteúdo
}

// Adiciona ouvintes de eventos aos links
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.top-nav a');
  links.forEach(link => {
    link.addEventListener('click', navigate);
  });

  // Renderiza o conteúdo inicial
  render();
});

// Para lidar com o botão "Voltar" do navegador
window.addEventListener('popstate', render);