let container = document.getElementById("container")
let div = document.createElement('div');
div.id = "square"

function createDiv() {     //Create n amount of divs
  for (let i = 0; i < 256; i++) {
    container.appendChild(div.cloneNode(true));
  }
}
createDiv()