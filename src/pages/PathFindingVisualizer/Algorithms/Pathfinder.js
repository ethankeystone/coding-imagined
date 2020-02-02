export default class Pathfinder {
  constructor(grid, startNode, endNode) {
    //initialization
    this.grid = grid;
    this.startNode = startNode;
    this.endNode = endNode;

    //accessibility
    this.height = grid.length;
    this.width = grid[0].length;

    //stores order that nodes were added
    this.order = new Array();

    //stores an array of the openList array at every stage
    this.openListOrder = new Array();

    //this.next() adds 1 before returning so this index
    //is negetive one for the first iteration to return
    //order [0]
    this.orderIndex = -1;
  }

  //i dont know

  //grabs neighbor nodes, if there are 2-3, array size = 2-3
  //neighbors are nodes in 4 cardinal directions
  getNeighbors(
    node // i hate this i feel like im losing brain cells
  ) {
    let neighbors = [];

    let x = node["col"];
    let y = node["row"];

    //4 directions
    let positions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1]
    ];

    //for loop so i can try catch w o using max and mins and such
    positions.forEach(element => {
      try {
        if (element.state != "wall")
          neighbors.push(this.grid[x + element[0]][y + element[1]]);
      } catch (error) { }
    });

    //idk why this happens :/
    neighbors = neighbors.filter(element => {
      return element != undefined;
    });

    return neighbors;
  }

  //returns the next node and next openList and updates index
  next() {
    this.orderIndex++;
    if (this.orderIndex >= this.order.length) return false;
    return [this.order[this.orderIndex], this.openListOrder[this.orderIndex]];
  }

  //closest thing to an abstract class
  run() {
    throw new Error("You need to impliment run()");
  }
}
