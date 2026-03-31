// typing
const text = "Java • SQL • Backend • AI/ML";
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

// outside click close
window.onclick = function(e) {
  let modal = document.getElementById("modal");
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
