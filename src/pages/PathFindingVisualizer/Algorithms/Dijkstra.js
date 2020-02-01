export default class Dijkstra
{
    constructor(grid)
    {
        this.grid = grid;

        this.height = grid.length;
        this.width = grid[0].length;

        this.distance = new Array(this.height).fill(10000).map(() => new Array(this.width).fill(10000));
        this.previous = new Array(this.height).fill([0, 0]).map(() => new Array(this.width).fill([0, 0]));

        this.order = new Array();

        this.run();

        this.order_index = -1; // start in neg for first iteration

        while (this.order_index < this.width * this.height){
            console.log(this.next());
        }
    }

    //main function, returns grid
    run()
    {
        //make Q into list of all nodes
        const Q = [];
        for(let x = 0; x < this.grid.length; x++){
            for (let y = 0; y < this.grid[0].length; y++){
                Q.push(this.grid[x][y]);
            }
        }

        this.distance[0][0] = 0;
        
        while(Q.length != 0){
            let min_node = this.getMinDistanceNode(Q);

            this.order.push(min_node);

            Q.splice(Q.indexOf(min_node), 1);

            let neighbors = this.getNeighbors(min_node);

            neighbors.forEach(element => {
                let new_distance = this.getNodeDistance(min_node) + 1; // right now all the weights are 1
                if(new_distance < this.getNodeDistance(element)){
                    this.distance[element['col']][element['row']] = new_distance;
                    this.previous[element['col']][element['row']] = min_node;
                }
            });
        }

        return this.distance;
    }

    next(){
        return this.order[this.order_index++];
    }

    //returns node in Q with minimum current distance
    getMinDistanceNode(Q)
    {
        let min_distance = this.distance[0][0];
        let min_node = Q[0];
        
        Q.forEach(element => {
            let distance_temp = this.distance[element['col']][element['row']];
            if(distance_temp < min_distance){
                min_distance = distance_temp;
                min_node = element;
            }
        });

        return min_node
    }

    getNeighbors(node) // i hate this i feel like im losing brain cells
    {
        let neighbors = [];
        
        let x = node['col'];
        let y = node['row'];
        
        let positions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        positions.forEach(element => {
            try{
                neighbors.push(this.grid[x + element[0]][y + element[1]]);
            }catch(error){};
        });

        neighbors = neighbors.filter(element => {
            return element != undefined;
        });

        return neighbors;
    }

    //readonly
    getNodeDistance(node){
        return this.distance[node['col']][node['row']];
    }
}