function bgmode() {
  var a = document.querySelector("body");
  a.classList.toggle("darkmode");
}

function turnoff() {
  document.querySelector(".dark1").removeAttribute("onclick");
}
