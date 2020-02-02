import Pathfinder from "./Pathfinder"

export default class BreadthFirst extends Pathfinder {

    constructor(grid, startNode, endNode) {
        super(grid, startNode, endNode);
    }

    run() {
        //queue
        let Q = new Array();
        Q.push(this.startNode);

        while (Q.length > 0) {
            //pop off Q rather than preferring anything
            let node = Q.pop();

            if (node == this.endNode) return;

            let neighbors = this.getNeighbors(node);

            neighbors.forEach(element => {

            });

        }
    }
}