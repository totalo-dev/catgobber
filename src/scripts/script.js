// SPIN BUTTON (SPIN!!!!!!!!!)
const btn = document.getElementById('spin');
const gato = document.getElementById('gatobabudo')

function girolouco() {
    gato.classList.toggle('animate-spin')
}

btn.addEventListener('click', girolouco);