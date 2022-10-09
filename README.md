# knights-travails
A project from The Odin Project. Calculating the shortest possible path that a Knight can take to get to the given destination. 
I've also included the simple GUI that presents the path visually. 

# How it works? 
The program uses the tree data structure and the Breadth-First Search algorithm. 
When the user enters the starting point and the destination point, the knightMoves function is used to calculate the optimal path. It uses the getLegalMoves function to determine the squares where the knight can move. When the available moves from the starting point are calculated, all of the further possible moves are calculated as well, and recursively added to the tree. The algorithm skips the fields that were already visited. When it finally finds the destination points, it returns an array of the full path from the start to the end.

The app is hosted on GitHub Pages:
https://tomaszkalus.github.io/knights-travails/
