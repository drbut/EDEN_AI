
function startApp() {
    document.getElementById("output").innerText = "Avvio simulazione EDEN in corso...";
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
        .then(reg => console.log('Service Worker registrato', reg))
        .catch(err => console.error('Service Worker errore', err));
    });
}
