import { Node } from './tree.js';

function get_legal_moves(field) {
    const moves = [[2, 1], [2, -1], [1, -2], [-1, -2],
    [-2, -1], [-2, 1], [-1, 2], [1, 2]];
    const legal_moves = [];
    for (let move of moves) {
        const x = field[0] + move[0];
        const y = field[1] + move[1];
        if (!(x > 7 || x < 0 || y > 7 || y < 0)) {
            legal_moves.push([x, y]);
        }
    }
    return legal_moves;

}

function knightMoves(start, dest) {
    const board =
        [['', '', '', '', '', '', '', '',],
        ['', '', '', '', '', '', '', '',],
        ['', '', '', '', '', '', '', '',],
        ['', '', '', '', '', '', '', '',],
        ['', '', '', '', '', '', '', '',],
        ['', '', '', '', '', '', '', '',],
        ['', '', '', '', '', '', '', '',],
        ['', '', '', '', '', '', '', '',]];

    board[start[0]][start[1]] = 'S';
    const root = new Node(start);

    function generateTree(queue) {
        const root = queue.shift();
        const legal_moves = get_legal_moves(root.value);
        for (let move of legal_moves) {
            if (board[move[0]][move[1]]) { continue; }
            board[move[0]][move[1]] = 'v';

            const new_node = new Node(move);
            root.children.push(new_node);
            new_node.parent = root;

            if (move[0] == dest[0] && move[1] == dest[1]) {
                return new_node;
            }
            queue.push(new_node);
        }
        return generateTree(queue);
    }

    let node = generateTree([root]);
    const route = [node.value];
    while (node.parent) {
        route.push(node.parent.value);
        node = node.parent;
    }
    console.log(`Found the shortest path! It only took ${route.length - 1} moves`);
    return route.reverse();
}

console.log(knightMoves([0, 0], [7, 7]));