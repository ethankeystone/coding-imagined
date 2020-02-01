export default class AStar{


    constructor(grid, startNode, endNode){

        //initialize
        this.grid = grid;
        this.startNode = startNode;
        this.endNode = endNode;

        this.height = grid.length;
        this.width = grid[0].length;

        this.openList = new Array();
        this.closedList = new Array();

        //G Score: distance from curent node to start node (heuristically)
        //H Score: distance from current node to end node
        this.gList = new Array(this.height).fill(10000).map(() => new Array(this.width).fill(10000));
        this.hList = new Array(this.height).fill(10000).map(() => new Array(this.width).fill(10000));
        
        //stores traceback for each position in array tuple
        this.previous = new Array(this.height).fill([0, 0]).map(() => new Array(this.width).fill([0, 0]));

        //not a part of the algorithm, stores order for use for u ethan bb
        this.order = new Array(); // stores list of smallest nodes (current nodes)
        this.openListOrder = new Array(); // this stores an array of the openList array at every stage
        this.orderIndex = -1; // index for current traceback reached with .next()

        this.run();
    }

    //full algorithm
    run(){
        //return;
        //openList starts with default of first node
        this.openList.push(this.grid[0][0]);  
        
        //set starting node to 0
        this.gList[0][0] = 0;
        
        while(this.openList.length > 0){
            //smallestNode = smallest f cost
            let smallestNode = this.getSmallestFCostNode();

            //check while conditional
            if(smallestNode == this.endNode){
                return;
            }

            //STORE FOR ETHAN
            this.order.push(smallestNode);
            this.openListOrder.push(this.openList);

            //remove from openList
            this.openList.splice(this.openList.indexOf(smallestNode), 1);

            //all successor nodes are neighbors in 4 cardinal directions
            let neighbors = this.getNeighbors(smallestNode);

            neighbors.forEach(element => {
                
                //set distance from end node
                this.hList[element['col']][element['row']] = this.getDistance(element);
                //get current and score after travel
                let smallestNodeGScore = this.gList[smallestNode['col']][smallestNode['row']];
                let neighborNewGScore = smallestNodeGScore + 5; //weight as 5 for now
                
                //if path is better than any previous
                if(neighborNewGScore < this.gList[element['col']][element['row']]){
                    //update new g score
                    this.gList[element['col']][element['row']] = neighborNewGScore;
                    
                    //add neighbor to openList
                    if(!this.Contains(this.openList, element)){
                        this.openList.push(element);
                    }
                }
            })
        }
        //open set is empty but goal never reached
        return -1;
    }

    next(){
        this.orderIndex++;
        if(this.orderIndex >= this.order.length) return false;
        return [this.order[this.orderIndex], this.openListOrder[this.orderIndex]];
    }

    //simple helper function, takes in list and element and returns true if element in list
    Contains(list, element){
        if(list.indexOf(element) != -1){
            console.log(list.indexOf(element));
            return true;
        }
        return false;
    }

    //grabs neighbor nodes, if there are 2-3, array size = 2-3
    getNeighbors(node) // i hate this i feel like im losing brain cells
    {
        let neighbors = [];
        
        let x = node['col'];
        let y = node['row'];
        
        //4 directions
        let positions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        //for loop so i can try catch w o using max and mins and such
        positions.forEach(element => {
            try{
                neighbors.push(this.grid[x + element[0]][y + element[1]]);
            }catch(error){};
        });

        //idk why this happens :/
        neighbors = neighbors.filter(element => {
            return element != undefined;
        });

        return neighbors;
    }
    //returns heuristic distance to endNode -> _| not /
    getDistance(node){
        let distanceX = Math.abs(node['col'] - this.endNode['col']) * 5;
        let distanceY = Math.abs(node['row'] - this.endNode['row']) * 5;
        return distanceX + distanceY;
    }

    //returns the smallest cost node
    getSmallestFCostNode(){
        let smallestNode = this.openList[0];
        this.openList.forEach(node => {

            if(this.getFCost(node) < this.getFCost(smallestNode)){
                smallestNode = node;
            }
            return node;
        })
        return smallestNode;
    }

    //takes in node and returns its fcost
    getFCost(node){
        let GCost = this.gList[node['col']][node['row']];
        let HCost = this.hList[node['col']][node['row']];
        let FCost = GCost + HCost;
        return FCost;
    }
}
