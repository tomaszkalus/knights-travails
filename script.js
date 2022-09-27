import { Node } from './tree.js';

class shortestPath {
    constructor(start, dest) {
        this.initializeBoard();
        this.start = start;
        this.dest = dest;
        this.board[start[0]][start[1]] = 'S';
        this.root = new Node(start);

    }

    initializeBoard() {
        this.board =
            [['', '', '', '', '', '', '', '',],
            ['', '', '', '', '', '', '', '',],
            ['', '', '', '', '', '', '', '',],
            ['', '', '', '', '', '', '', '',],
            ['', '', '', '', '', '', '', '',],
            ['', '', '', '', '', '', '', '',],
            ['', '', '', '', '', '', '', '',],
            ['', '', '', '', '', '', '', '',]];
    }


    get_legal_moves(field = this.start) {
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

    displayBoard() {
        this.board.forEach(e => {
            const row = e.map(c => { return (c ? c : ' '); });
            console.log(row);
        });
    }

    generateTree(queue) {
        const root = queue.shift();
        const legal_moves = this.get_legal_moves(root.value);
        for (let move of legal_moves) {
            if (this.board[move[0]][move[1]]) { continue; }
            this.board[move[0]][move[1]] = 'v';

            const new_node = new Node(move);
            root.children.push(new_node);
            new_node.parent = root;

            if (move[0] == this.dest[0] && move[1] == this.dest[1]) {
                console.log('FOUND');
                return new_node;
            }
            queue.push(new_node);
        }
        return this.generateTree(queue);


    }

    test() {
        let node = this.generateTree([this.root]);
        const route = [node];
        while (node.parent) {
            route.push(node.parent);
            node = node.parent;
        }
        return route.reverse();
    }
}

const app = new shortestPath([0, 0], [7, 7]);
app.displayBoard();
console.log(app.test());
