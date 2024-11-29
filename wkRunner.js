const worker = new Worker('worker.js');


// Enviar dados para o worker

worker.postMessage(1); // Por exemplo, calcular a soma dos números até 10 milhões


// Receber a mensagem de volta do worker

worker.onmessage = function(event) {

    console.log('Resultado recebido do worker:', event.data);

};


// Lidar com erros do worker

worker.onerror = function(error) {

    console.error('Erro no worker:', error);

};