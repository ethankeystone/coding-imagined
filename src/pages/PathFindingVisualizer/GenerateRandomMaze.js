export default class GenerateRandomMaze {
    constructor(width, height) {
      this.maze(width, height);

    }

    maze(x,y) {
        var grid = []
        var deadEnd = []
        var start = [0,1]
        for(let i = 0; i < x; i++) {
            const currentRow = []
            for (let j = 0; j < y; j++) {
                currentRow.push("wall");
            }
            grid.push(currentRow);
        }
        var done = false;
        var current = start
        while(done) {
            let adj = this.getAdjacent(x[0], x[1], grid);
            let random = Math.random() * adj.length;
            let next = adj[random];
            current = next;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        }   
    }    
    getAdjacent(row, col, grid) {
        let adjConsts = [[1, 0], [0, 1], [-1, 0], [0, -1]];
        let adj = [];


        for (let i = 0; i < 4; i++) {
            try {
                if (grid[col + adjConsts[i][0]][row + adjConsts[i][1]] != null) {
                    adj.push(grid[col + adjConsts[i][0]][row + adjConsts[i][1]]);
                }
            } catch (error) { }
        }
        return adj;
    }
}