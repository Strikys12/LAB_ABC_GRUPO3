let contador = 0;
function voltear(card) {

    card.classList.toggle("volteada")

    if (!card.dataset.descubierta) {
        card.dataset.descubierta = "true"
        contador++;


        const contadorElemento = document.getElementById("contadorLetras");
        if (contadorElemento) {
            contadorElemento.textContent = contador;
        }

    }

}

function filtrar(tipo) {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {

        const tipoCard = card.dataset.tipo;

        if (tipo === 'todas') {
            card.style.display = 'flex';
        } else if (tipo === 'vocales') {

            if (tipoCard === 'vocal') {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        }
    });
}