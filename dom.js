const container = document.querySelector('#board');
const msg = document.querySelector('#message');

//image loading
const knight_img = document.createElement('img');
const finish_img = document.createElement('img');
const reset = document.querySelector('#reset');
knight_img.setAttribute('style', 'width: 65px;');
finish_img.setAttribute('style', 'width: 50px;');
knight_img.setAttribute('src', 'knight.svg');
finish_img.setAttribute('src', 'flag.svg');

// Generating the board
for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('data-col', col);
        cell.setAttribute('data-row', row);
        if (isBlack(row, col)) { cell.classList.add('black'); }
        container.appendChild(cell);
    }
}

function isBlack(row, col) {
    const black = [1, 3, 5, 7];
    if (((row % 2) && black.includes(col)) || ((!(row % 2) && !black.includes(col)))) {
        return true;
    }
    return false;
}

const cells = document.querySelectorAll('.cell');

function place_img(c, mode) {
    if (!mode) { c.appendChild(knight_img); }
    else { c.appendChild(finish_img); }
}

function clear_board(cells) {
    for (let cell of cells) {
        cell.classList.remove('path');
        cell.classList.remove('start-end');
        cell.innerHTML = "";
    }
}


export { container, cells, place_img, msg, reset, clear_board };

