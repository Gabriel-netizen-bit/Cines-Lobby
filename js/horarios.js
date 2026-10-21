function seleccionar(casilla) {
  var casillas = document.getElementsByTagName("td");
  
  if (casilla.className == "seleccionado") {
    casilla.classList.remove("seleccionado");
  } else {
    if (casilla.id != "") {
      for (var i = 0; i < casillas.length; i++) {
        casillas[i].classList.remove("seleccionado");
      }

      casilla.classList.add("seleccionado");
    }
  }
}

function confirmar() {
  var casillas = document.getElementsByClassName("seleccionado");

  if (casillas[0] != null) {
    var enlace = document.getElementById("botonConfirmar");

    // Aqupi se cambia la dirección del enlace
    enlace.href ="butacas.html";
  }
}