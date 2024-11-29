 // Função para carregar o conteúdo do nav.html
 switch(window.location.pathname) {
  case "/":
    fetch('./src/components/main.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('main-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Erro ao carregar o main:', error));
    break;
  default:
    fetch('./src/components/main.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('main-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Erro ao carregar o main:', error));
 }
