export default class GenerateRandomMaze {

    
    /**
     * This method creates a random weighted maze
     * 
     * This works by generating random "mountains" accross the 2d grid. Mountains are defined as points in which a peak of 
     * x squares id auto generated and the elevation is created around it by making a border of increasing squares that lead up to the mountain
     * A certain amount of mountains are auto generated per each grid. Currently, mountains can all generate on top of themselves and there are no
     * no limits as to where these mountains can be generated.
     * 
     * @param {number} x the width of the generated grid 
     * @param {number} y the height of the generated grid
     * @return {Node[][]} grid objects representing different node states has attributes
     * @return {Node.type} Node.type a string representing the state of the node
     * @return {Node.width} width of the node in the grid
     * @return {Node.height} height of the node in the grid
     */
    generateWeightedMaze(x, y) {
        var grid = []
        

        //instatiates an empty 2d array of objects nodes
        for(let i = 0; i < x; i++) {
            const currentRow = []
            for (let j = 0; j < y; j++) {
                currentRow.push({
                    type: "Not wall",
                    width: i,
                    height: j,
                });
            }
            grid.push(currentRow);
        
        }

        let amountOfMountains = Math.round(Math.random() * 15) +10;

        /*
        * Generates a random mountain per each chosen
        * Auto generates the parameters of the mountain between a range
        */
        for (let i = 0; i < amountOfMountains; i++) {
            let high = Math.round(Math.random() * 16) + 4;
            let minSize = Math.round(Math.random() * 4) + 1;
            let maxSize = Math.round(Math.random() * 5) + minSize;
            let size = Math.round(Math.random() * 6) + 1;
            this.generateWeightedSquare(grid, minSize, maxSize, size, high);
        }
       
        
        //chooeses random start and end nodes, insures that the distance is at least 20
        let start = this.findRandomSquare(grid);
        let end = this.findRandomSquare(grid);
        while (this.findDistance(start, end) < 20 ) {
            end = this.findRandomSquare(grid);
        }


        grid[start[0]][start[1]].type = "start";
        grid[end[0]][end[1]].type = "end";

        return grid;
    }

    /**
     * this method generates weighted mountain inside of a grid
     * 
     * This directly modifies the grid object, so nothing is returned.
     * 
     * @param {Node[][]} grid 2d array of nodes
     * @param {String} Node.type a string representing the state of the node
     * @param {number} Node.width of the node in the grid
     * @param {number} Node.height of the node in the grid
     * 
     * @param {number} minSize min size of the peak
     * @param {number} maxSize max size of the peak
     * @param {number} size amount of layers
     * @param {number} max max height of the peak
     */
    generateWeightedSquare(grid, minSize, maxSize, size, max) {
    
        let center = this.findRandomSquare(grid);

        var amountSummit = Math.floor(Math.random() * (maxSize - minSize)) + minSize;
        
        //center of the peak
        let current = grid[center[0]][center[1]];

        //list to keeep track of all nodes in the mountain
        let currentList = [];

        /*
        * Creates a peak by passing a current value and adding a random
        * adjacent node to the currentList. Then the node just added is set to current
        * and the loop repeats.
        */
        for (let i = 0; i < amountSummit; i++) {
            grid[current.width][current.height].type = "weighted" + String(max);
            let adj = this.getAdjAll(current.width, current.height, grid);
       
            currentList.push(current);

            let random = Math.floor(Math.random() * adj.length);
            current = adj[random];       
        }

        //step is the amount each node decreases per layer, higher step means higher change in slope
        let step = Math.floor(max / size);
        let next = []

        for(let i = 0; i < size; i++) {
            for (let j = 0; j < currentList.length; j++) {
                //insures that none of the nodes are negative values
                if (max - i * step <= 0) {
                    break;
                }

                /*
                * iterates through the previous outer layer, by getting all adjacent and making them have elevation 
                * by changing the step value
                */
                let adj = this.getAdjAll(currentList[j].width, currentList[j].height, grid);
                grid[currentList[j].width][currentList[j].height].type = "weighted" + String(max - i * step); 
                for (let o = 0; o < adj.length; o++) {
                    if (adj[o].type.substring(0, 8) != "weighted") {
                        if (!next.includes(adj[o])) {
                            next.push(adj[o]);
                        }
                    }
                }
            }
            currentList = next;
            next = [];
        }

    }

    /**
     * Generates a maze with only walls, no weights
     * @param {number} x width of the grid 
     * @param {number} y height of the grid
     */
    maze(x,y) {
        var grid = []
        var amountOfWalls = 0; 
        var gridSize = x * y;
        //generates the grid with all the nodes set to walls
        for(let i = 0; i < x; i++) {
            const currentRow = []
            for (let j = 0; j < y; j++) {
                currentRow.push({
                    type: "wall",
                    width: i,
                    height: j,
                });
            }
            grid.push(currentRow);
        }
        //pointers keeping track of prev, and current nodes
        var prev = [];
        var current = grid[0][1]

        /* 
        * insures that at least 3/4 of the grid is empty space.
        * 
        * It works by choosing a random square and randomly choosing a adjacent node to make empty. It loops
        * either until the while() condition is satifsfied or it reaches a dead end i.e all suronding nodes are already
        * empty. If this is the case, it backtracks through the currentlist of empty space nodes until it finds one
        * with a valid adjacent list
        * 
        */
        while(amountOfWalls < 3 * gridSize / 4) {
            let adj = this.getAdjNotEmpty(current.width, current.height, grid);
            if (adj.length == 0) {
                current = this.backTrack(prev);
                continue;
            }
            let random = Math.floor(Math.random() * adj.length);
            grid[current.width][current.height].type = "Not wall";
            prev.push(current);

            let next = adj[random];
            
            current = next;                     
            amountOfWalls++;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        }   

        /*
        * randomly generates start and end nodes with a distance of at least 20
        */
        let start = this.findRandomSquare(grid);
        let end = this.findRandomSquare(grid);
        while (this.findDistance(start, end) < 20 ) {
            end = this.findRandomSquare(grid);
        }

        grid[start[0]][start[1]].type = "start";
        grid[end[0]][end[1]].type = "end";

        return grid;
    }    

    /**
     * Randomly chooses a node from a list of traversed nodes
     * @param {Object[]} prev list of all the previously traversed nodes. 
     */
    backTrack(prev) {
        let random = Math.floor(Math.random() * prev.length);
        return (prev[random]);
    }

    /**
     * gets the adjacentcy list of a node given an (x,y) and the grid
     * @param {number} col x coordinates of node  
     * @param {number} row y coordinate of node
     * @param {number} grid grid of all nodes
     */
    getAdjAll(col, row, grid) {
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

    /**
     * generates a adjacently list of a node, given that the adjacent node is not empty and that the neighbors of that
     * adjacent node has 1 or less nodes that are not walls.
     * @param {number} col x position of node
     * @param {number} row y position of the node
     * @param {number} grid grid of all nodes
     */
    getAdjNotEmpty(col, row, grid) {
        let adjConsts = [[1, 0], [0, 1], [-1, 0], [0, -1]];
        let adj = [];

        for (let i = 0; i < 4; i++) {
            try {
                if (grid[col + adjConsts[i][0]][row + adjConsts[i][1]] != null) {
                    if(grid[col + adjConsts[i][0]][row + adjConsts[i][1]].type != "Not wall") {
                        //gets all neighbors of the adjacent node
                        let adjToCurrent = this.getAdjAll(col + adjConsts[i][0], row + adjConsts[i][1], grid);
                        let amountAdj = 0;
                        adjToCurrent.forEach(node => {
                            //increments for each neighbor that is empty
                            if (node.type == "Not wall") {
                                amountAdj ++;
                            }
                        })
                        if(amountAdj <= 1) {
                            adj.push(grid[col + adjConsts[i][0]][row + adjConsts[i][1]]);
                        }
                    }
                }
            } catch (error) { }
        }
        return adj;
    }
    /**
     * chooses a random node from a grid that is empty
     * @param {Node} grid grid of nodes 
     * @param {String} Node.type a string representing the state of the node
     * @param {number} Node.width of the node in the grid
     * @param {number} Node.height of the node in the grid
     */
    findRandomSquare(grid) {
        let count = 0;
        while(count < 1000) {
            let width = Math.floor(Math.random() * grid.length);
            let height = Math.floor(Math.random() * grid[width].length);
            if (grid[width][height].type == "Not wall") {
                return [width, height];
            }
            count++;
        }
    }

    /**
     * Finds the distance between two nodes.
     * @param {Node} p1 position of node 1
     * @param {Node} p2 position of node 2
     */
    findDistance(p1, p2) {
        return (Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2)));
    }
}