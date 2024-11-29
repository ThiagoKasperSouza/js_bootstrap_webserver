 // Função para carregar o conteúdo do nav.html
 fetch('./src/components/main.html')
 .then(response => response.text())
 .then(data => {
   document.getElementById('main-placeholder').innerHTML = data;
 })
 .catch(error => console.error('Erro ao carregar o main:', error));