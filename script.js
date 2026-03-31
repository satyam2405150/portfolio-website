// typing
const text = "Java • SQL • System Design • Exploring AI/ML";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 50);
  }
}
type();

// modal
function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// click outside close
window.onclick = function(event) {
  let modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
