function randomNumber() {
  const min = Math.ceil(document.querySelector(".input-min").value);
  const max = Math.floor(document.querySelector(".input-max").value);

  const Random = Math.floor(Math.random() * (max - min) + min);

  alert(Random);
}
