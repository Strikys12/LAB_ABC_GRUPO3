let contador = 0;
function voltear(card){

    card.classList.toggle("volteada")

    if (!card.dataset.descubierta){
        card.dataset.descubierta = "true"
        contador++;
    

    const contadorElemento = document.getElementById("contadorLetras");
    if (contadorElemento){
        contadorElemento.textContent = contador;
    }

    }

}

function filtrar(tipo) {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    // Leemos el data-tipo de la tarjeta ('vocal' o 'consonante')
    const tipoCard = card.dataset.tipo; 

    if (tipo === 'todas') {
      card.style.display = 'flex'; // Muestra todas las letras
    } else if (tipo === 'vocales') {
      // Muestra SOLO si el atributo es estrictamente 'vocal'
      if (tipoCard === 'vocal') {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none'; // Oculta las consonantes
      }
    }
  });
}