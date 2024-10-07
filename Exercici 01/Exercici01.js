//-----LLISTA-------------------------//
const valorMin = document.getElementById("valor_min");
const ampladaTotal = document.getElementById("amplada_total");
const ampladaInterna = document.getElementById("amplada_interna");
const titol = document.getElementById("titol");
const horaActual = document.getElementById("hora_actual");

valorMin.textContent = Number.MIN_VALUE;
ampladaTotal.textContent = screen.width;
ampladaInterna.textContent = window.innerWidth;
titol.textContent = document.title;
horaActual.textContent = new Date().getHours();

//------REPRODUCTOR---------------------//
