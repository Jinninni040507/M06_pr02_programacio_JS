const valorMax = document.getElementById("valor_max");
const alturaTotal = document.getElementById("altura_total");
const alturaInterna = document.getElementById("altura_interna");
const urlWeb = document.getElementById("url");

valorMax.textContent = Number.MAX_VALUE;
alturaTotal.textContent = screen.height;
alturaInterna.textContent = window.innerHeight;
urlWeb.textContent = document.URL;
