let container = document.getElementById("container");

function createDiv(n) {
  for(let i = 0; i < (n*n); i++) {
      const div = document.createElement('div');
      div.className = 'square';
      container.appendChild(div);
  }
}

/*n *= n
for (let i = 0; i < n; i++) {
  container.appendChild(div.cloneNode(true));
  */
createDiv(32)

const divEls = document.querySelectorAll('.square');
if (divEls) {
    divEls.forEach (el => {
        el.addEventListener('mouseenter', (event) => {
        const currentBg = event.target.style.background;
        if(currentBg !== 'black') {
            event.target.style.background = 'black';
        } else {
            event.target.style.background = 'black';
        }
    });
});
}

function gridSize() {
    let size = prompt('Please enter number below 100')
    if (size <= 100) {

    }
}

