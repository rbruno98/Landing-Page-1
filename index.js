let atualIndice = 0;

function carrosselFotos(indice) {
  const fotos = document.querySelectorAll(".carrosselImagens img");
  const totalFotos = fotos.length;

  if (indice >= totalFotos) {
    atualIndice = 0;
  } else if (indice < 0) {
    atualIndice = totalFotos - 1;
  } else {
    atualIndice = indice;
  }

  const desvio = -atualIndice * 100;
  document.querySelector(
    ".carrosselImagens"
  ).style.transform = `translateX(${desvio}%)`;
}

function proxFoto() {
  carrosselFotos(atualIndice + 1);
}

function fotoAnt() {
  carrosselFotos(atualIndice - 1);
}

document.addEventListener("DOMContentLoaded", () => {
  carrosselFotos(atualIndice);
});
