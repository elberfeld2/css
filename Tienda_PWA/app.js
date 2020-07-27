

const ocultar = (instalarVista) => {
    instalarVista.style.display = 'none';
}
const mostar = (instalarVista) => {
    instalarVista.style.display = 'block';
}
let deferredPrompt;
let boton = "";
const instalar = () => {
    deferredPrompt.prompt()
}
window.onload = (e) => {
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        console.log("Hola2", e)
        mostar(document.getElementById('instalar'));
    });
    console.log("Hola1")
    ocultar(document.getElementById('instalar'));
}
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('Registro de SW exitoso', reg))
        .catch(err => console.warn('Error al tratar de registrar el sw', err))
}