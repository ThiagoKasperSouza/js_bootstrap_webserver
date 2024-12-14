importScripts('https://unpkg.com/mqtt/dist/mqtt.min.js');


self.onmessage = function(event) {
    const client = mqtt.connect('ws://broker.hivemq.com:8000/mqtt'); // Substitua pelo seu broker

    client.publish("mqtt/exemplo", "hello world!");

    setInterval(async ()=> {
        const res = await fetch('https://economia.awesomeapi.com.br/last/ETH-BRL');
        const message= await res.json();
        postMessage(message);
    }, 60000);
   
};