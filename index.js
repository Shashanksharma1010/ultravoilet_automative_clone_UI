// navbar logic 
var overlay = document.querySelector('.overlay');
var hamburger = document.querySelector('.hamburger-res');

hamburger.onclick = () => {
  overlay.toggleAttribute('hidden');
  if (hamburger.innerHTML === "X") {
    hamburger.innerHTML = "<i class='fa-solid fa-bars' ></i>";
  } else {
    hamburger.innerHTML = "X";
  }
}