const worker = new Worker('worker.js');

/** 
 * configurar nos workers faz rodar clientside, precisa importar o min.js no worker
 * rodando server side usa deps npm
 *  */
const client = mqtt.connect('ws://broker.hivemq.com:8000/mqtt'); // Substitua pelo seu broker

client.on('connect', function () {
    console.log('Conectado ao broker MQTT');
    client.subscribe("mqtt/exemplo", function (err) {
        if (!err) {
            console.log('Inscrito no tópico mqtt/exemplo');
        }
    });
});

client.on('message', function (topic, payload) {
    console.log([topic, payload].join(": "));
    // Aqui você pode processar a mensagem recebida
});

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