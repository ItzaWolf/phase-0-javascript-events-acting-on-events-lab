// Your code here
const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  const left = dodger.style.left ? parseInt(dodger.style.left) : 0;
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const left = dodger.style.left ? parseInt(dodger.style.left) : 0;
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}
