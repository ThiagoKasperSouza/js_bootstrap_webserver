// worker.js

self.onmessage = function(event) {
    var client = mqtt.connect('ws://broker.mqttdashboard.com:8000/mqtt')
    client.subscribe("mqtt/test")

    client.on("message", function (topic, payload) {
      console.log([topic, payload].join(": "))
        client.end()
    })

    

    for (let i = 0; true; i++) {
        client.publish("mqtt/test", "hello world!")
    }

    // Envie o resultado de volta para o thread principal

    self.postMessage(result);

};