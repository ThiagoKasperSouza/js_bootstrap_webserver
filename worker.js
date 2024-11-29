// worker.js

self.onmessage = function(event) {

    const start = Date.now();


    for (let i = 0; true; i++) {
        const millis = Date.now() - start;

        console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
    }

    // Envie o resultado de volta para o thread principal

    self.postMessage(result);

};