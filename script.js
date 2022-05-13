let container = document.getElementById("container")
let div = document.createElement('div');
div.id = "square"

function createDiv(n) {
    n *= n
  for (let i = 0; i < n; i++) {
    container.appendChild(div.cloneNode(true));
  }
}
createDiv(10)