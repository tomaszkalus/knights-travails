import { container, cells, place_img, msg } from './dom.js';
import { knightMoves } from './knight_moves.js';

let start;
let end;
cells.forEach(cell => {
    const row = parseInt(cell.getAttribute('data-row'));
    const col = parseInt(cell.getAttribute('data-col'));

    cell.addEventListener('click', (e) => {
        if(end){return;}
        console.log(e);

        place_img(cell, start);
        cell.classList.add('start-end');

        if (!start) { 
            start = [row, col]; 
            msg.textContent = "Place the destination point anywhere on the board:";}
        else {
            end = [row, col];
            const path = knightMoves(start, end);
            const len = path.length - 1;
            msg.textContent = `The shortest path for the knight consists of: ${len} moves`;
            for (let i = 1; i < len; i++) {
                const point = path[i];
                const cell = container.querySelector(`[data-row="${point[0]}"][data-col="${point[1]}"]`);
                cell.classList.add('path');
                if (path.length > 3) { cell.textContent = i; }
            }
        }
    });

});
