let container = document.getElementById("container");

function createDiv(n) {
  for(let i = 0; i < n; i++) {
      const rowDiv = document.createElement('div');
      rowDiv.className = 'rowDiv';
      container.appendChild(rowDiv);
      for(let j = 0; j < n; j++) {
          const columnDiv = document.createElement('div');
          columnDiv.className = 'columnDiv';
          rowDiv.appendChild(columnDiv);
      }
  }
}
createDiv(16)

function gridSize() {
    let size = prompt('Please enter number below 100');
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    if (size <= 100) {
        return createDiv(size);
    }
}


const divEls = document.querySelectorAll('.rowDiv .columnDiv');
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

