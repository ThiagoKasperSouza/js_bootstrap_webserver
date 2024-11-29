function renderComponent(path, id) {
  fetch(path)
  .then(response => response.text())
  .then(data => {
    document.getElementById(`${id}-placeholder`).innerHTML = data;
  })
  .catch(error => console.error(`Erro ao carregar o ${id}:`, error));
}

// Função para carregar o conteúdo do component.html
 switch(window.location.pathname) {
  case "/":
    renderComponent('./src/components/main.html', 'main');
    break;
  default:
    renderComponent('./src/components/main.html', 'main');
    break;
 }
