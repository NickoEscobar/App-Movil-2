function convertir() {
  const valor = parseFloat(document.getElementById("valor").value);
  const unidadInicial = document.getElementById("unidadInicial").value;
  const unidadFinal = document.getElementById("unidadFinal").value;
  let resultado;

  // Lógica de conversión (a completar)
  if (unidadInicial === "metros" && unidadFinal === "kilometros") {
    resultado = valor / 1000;
  } else if (unidadInicial === "metros" && unidadFinal === "centimetros") {
    resultado = valor * 100;
  } else if (unidadInicial === "metros" && unidadFinal === "metros") {
    resultado = valor;
  } else if (unidadInicial === "kilometros" && unidadFinal === "metros") {
    resultado = valor * 1000;
  } else if (unidadInicial === "kilometros" && unidadFinal === "centimetros") {
    resultado = valor * 100000;
  } else if (unidadInicial === "kilometros" && unidadFinal === "kilometros") {
    resultado = valor;
  } else if (unidadInicial === "centimetros" && unidadFinal === "metros") {
    resultado = valor / 100;
  } else if (unidadInicial === "centimetros" && unidadFinal === "kilometros") {
    resultado = valor / 100000;
  } else if (unidadInicial === "centimetros" && unidadFinal === "centimetros") {
    resultado = valor;
  }

  document.getElementById("resultado").textContent = valor + " " + unidadInicial + " son " + resultado + " " + unidadFinal;
}