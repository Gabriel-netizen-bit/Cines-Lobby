function seleccionar(asiento) {
  if (asiento.className == "libre") {
    asiento.classList.add("seleccionado");
    asiento.classList.remove("libre");
  } else if (asiento.className == "seleccionado") {
    asiento.classList.add("libre");
    asiento.classList.remove("seleccionado");
  }

  imprimirAsientos();
  imprimirCantAsientos()
}

function imprimirAsientos() {
  var i = 0;
  var seleccionados = document.getElementsByClassName("seleccionado");
  var txt = "";
  var asientosSeleccionados = document.getElementById("asientosSeleccionados");

  for (i = 0; i < seleccionados.length; i++) {
    if (i == (seleccionados.length - 1)) {
      txt += seleccionados[i].value;
    } else {
      txt += seleccionados[i].value + ", ";
    }
  }

  asientosSeleccionados.innerHTML = "<p class='centrar asientos-seleccionados'>" + txt + "</p>";
}

function imprimirCantAsientos() {
  var i = 0;
  var seleccionados = document.getElementsByClassName("seleccionado");
  var txt = "";
  var cantidadAsientos = document.getElementById("cantidadAsientos");

  txt += seleccionados.length;
  
  cantidadAsientos.innerHTML = "<p class='cant-asientos centrar'>" + txt + "</p>";
}

function confirmar() {
  var seleccionados = document.getElementsByClassName("seleccionado");

  if (seleccionados[0] != null) {
    var enlace = document.getElementById("botonReservar");

    // Aqupi se cambia la dirección del enlace
    enlace.href = "Pago.html";
  }
}