const container = document.querySelector('#board-container');
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
for (let i = 0; i < 8; i++) {
    for (let j = 1; j < 9; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('data-cell-id', letters[i] + j);
        cell.textContent = letters[i] + j;
        container.appendChild(cell);
    }

}

console.log('XD ')