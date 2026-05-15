function randomNumber() {
  const min = Math.ceil(document.querySelector(".input-min").value);
  const max = Math.floor(document.querySelector(".input-max").value);

  if (min >= max) {
    alert("O valor minimo tem que ser MENOR que o valor máximo");
  } else {
    const Random = Math.floor(Math.random() * (max - min) + min);

    alert(Random);
  }
}
