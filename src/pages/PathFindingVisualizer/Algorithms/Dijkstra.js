import Pathfinder from "./Pathfinder";

export default class Dijkstra extends Pathfinder {
  constructor(grid, startNode, endNode) {
    super(grid, startNode, endNode);

    this.distance = new Array(this.height)
      .fill(10000)
      .map(() => new Array(this.width).fill(10000));
    this.previous = new Array(this.height)
      .fill([0, 0])
      .map(() => new Array(this.width).fill([0, 0]));

    this.run();

    while (this.order_index < this.width * this.height) {
      console.log(this.next());
    }
  }

  //main function, returns grid
  run() {
    //make Q into list of all nodes
    const Q = [];
    for (let x = 0; x < this.grid.length; x++) {
      for (let y = 0; y < this.grid[0].length; y++) {
        Q.push(this.grid[x][y]);
      }
    }

    //set distance of start node to smallest value, 0
    this.distance[this.startNode["col"]][this.startNode["row"]] = 0;
    //main alg
    while (Q.length != 0) {
      let min_node = this.getMinDistanceNode(Q);

      if (min_node == this.endNode) return;
      //remove min node from openlist
      Q.splice(Q.indexOf(min_node), 1);

      //for output
      this.order.push(min_node);
      this.openListOrder.push(Q);

      let neighbors = this.getNeighbors(min_node);

      //each neighbor gets new distance calculated based off current node, and updated if its new
      //path has a smaller (more optimized) distance from start
      neighbors.forEach(element => {
        let new_distance = this.getNodeDistance(min_node) + 1; // right now all the weights are 1
        if (new_distance < this.getNodeDistance(element)) {
          this.distance[element["col"]][element["row"]] = new_distance;
          this.previous[element["col"]][element["row"]] = min_node;
        }
      });
    }

    return this.distance;
  }

  //returns node in Q with minimum current distance
  getMinDistanceNode(Q) {
    let min_distance = 100000;
    let min_node = Q[0];

    Q.forEach(element => {
      let distance_temp = this.distance[element["col"]][element["row"]];
      if (distance_temp < min_distance && element.state != "wall") {
        min_distance = distance_temp;
        min_node = element;
      }
    });

    return min_node;
  }
  //readonly
  getNodeDistance(node) {
    return this.distance[node["col"]][node["row"]];
  }
}
