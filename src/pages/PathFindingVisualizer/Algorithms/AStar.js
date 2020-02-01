import Pathfinder from "./Pathfinder";

export default class AStar extends Pathfinder {
  constructor(grid, startNode, endNode) {
    //initialize
    super(grid, startNode, endNode);

    this.openList = new Array();
    this.closedList = new Array();

    //G Score: distance from curent node to start node (heuristically)
    //H Score: distance from current node to end node
    this.gList = new Array(this.height)
      .fill(10000)
      .map(() => new Array(this.width).fill(10000));
    this.hList = new Array(this.height)
      .fill(10000)
      .map(() => new Array(this.width).fill(10000));

    //stores traceback for each position in array tuple
    this.previous = new Array(this.height)
      .fill([0, 0])
      .map(() => new Array(this.width).fill([0, 0]));

    //not a part of the algorithm, stores order for use for u ethan bb
    this.order = new Array(); // stores list of smallest nodes (current nodes)

    this.orderIndex = -1; // index for current traceback reached with .next()

    this.run();
  }

  //full algorithm
  run() {
    //return;
    //openList starts with default of first node
    this.openList.push(this.grid[this.startNode["col"]][this.startNode["row"]]);

    //set starting node to 0
    this.gList[this.startNode["col"]][this.startNode["row"]] = 0;

    while (this.openList.length > 0) {
      //smallestNode = smallest f cost
      let smallestNode = this.getSmallestFCostNode();

      //check while conditional
      if (smallestNode == this.endNode) {
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
        this.hList[element["col"]][element["row"]] = this.getDistance(element);
        //get current and score after travel
        let smallestNodeGScore = this.gList[smallestNode["col"]][
          smallestNode["row"]
        ];
        let neighborNewGScore = smallestNodeGScore + 5; //weight as 5 for now

        //if path is better than any previous
        if (neighborNewGScore < this.gList[element["col"]][element["row"]]) {
          //update new g score
          this.gList[element["col"]][element["row"]] = neighborNewGScore;

          //add neighbor to openList
          if (!this.Contains(this.openList, element)) {
            this.openList.push(element);
          }
        }
      });
    }
    //open set is empty but goal never reached
    return -1;
  }

  //simple helper function, takes in list and element and returns true if element in list
  Contains(list, element) {
    if (list.indexOf(element) != -1) {
      console.log(list.indexOf(element));
      return true;
    }
    return false;
  }

  //returns heuristic distance to endNode -> _| not /
  getDistance(node) {
    let distanceX = Math.abs(node["col"] - this.endNode["col"]) * 5;
    let distanceY = Math.abs(node["row"] - this.endNode["row"]) * 5;
    return distanceX + distanceY;
  }

  //returns the smallest cost node
  getSmallestFCostNode() {
    let smallestNode = this.openList[0];
    this.openList.forEach(node => {
      if (this.getFCost(node) < this.getFCost(smallestNode)) {
        smallestNode = node;
      }
      return node;
    });
    return smallestNode;
  }

  //takes in node and returns its fcost
  getFCost(node) {
    let GCost = this.gList[node["col"]][node["row"]];
    let HCost = this.hList[node["col"]][node["row"]];
    let FCost = GCost + HCost;
    return FCost;
  }
}
