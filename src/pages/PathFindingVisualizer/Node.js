import React, { Component } from 'react';
import "../../css/Node.css"

export default class Node extends Component {
    /**
     * @constructor this is the default constructor for the node class
     * @param {*} props 
     * 
     */
    constructor(props) {
        super(props);

        /**
         * @param {String} color the color of the node
         * @param {boolean} isLoading whether the node is loading (only happens at start of page cycle)
         * @param {boolean} isRendered whether the node is rendering
         */
        this.state = {
            isLoading: false,
            color: "none",
            isRendered: this.props.isRendered
        }
    }

    componentDidMount() {
        /**
         * @param {boolean} isLoading is set to false because node is loaded in this method
         * @param {String} color color is by default set to none
         * @param {number} col the column number of the node in the grid
         * @param {number} row the row number of the node in the grid
         * @param {boolean} isRendered by default node is not rendered
         */
        this.setState({
            isLoading: false,
            color: "none",
            col: this.props.col,
            row: this.props.row,
            isRendered: false
        });
        /**
         * creates the wave rendering effect
         * Each node is rendered based on the a value passed in
         * in parent
         */

        setTimeout(
            function () {
                this.setState({ isRendered: true })
            }.bind(this),
            this.props.renderTime * 5
        );
    }
    /**
     * Generates a string to be passed into the css representing the rgb of the css
     * @param {number} r red value
     * @param {number} g green value
     * @param {number} b blue value
     */
    rgb(r, g, b){
        r = Math.floor(r);
        g = Math.floor(g);
        b = Math.floor(b);
        return ["rgb(",r,",",g,",",b,")"].join("");
    }

    render() {
        /**
         * @param {number} col the x value of node
         * @param {number} row the y value of node
         * @param {String} state a string representing the state of the node
         * @param {function addNode(row, col) {}} handleMouseDown if mouse is pressed down on the node, this function 
         * is called from the pathfindingvisualizer class
         * @param {function handleMouseDown(row, col)){}} handleMouseOver if the mouse is entering over the node, 
         * this function is called from the PathFindingVisualizer class
         * @param {function dehover(row, col){}} dehover when the mouse leaves over the node, this function is 
         * called from the PathFindingVisualizer class
         * @param {number} weight numerical value of the node if it is a weight (automatically set to 0)
         * @param {boolean} displayWeight boolean representing whether to display the weight of the node
         */
        const {
            col,
            row,
            state,
            handleMouseDown,
            handleMouseOver,
            dehover,
            weight,
            displayWeight,
        } = this.props;

        //this state is only triggered at the beginning when the node is not rendered 
        if (this.state.isLoading === true) {
            return (
                <div className={"node "}>
                    Not Rendered
                </div>
            );
        } else {
            //triggers if the state string is a type weighted
            if (state.substring(0,8) == "weighted") {
                let weightAmount = parseInt(state.substring(8));
                
                //if display weights is on, then it displays weight value in div
                if (displayWeight) {
                    return (
                        <div className={(this.state.isRendered === true ? "nodeRendered " + state : "nodeNotRendered")}
                            //sets the rgb value of the node based on weight amount
                            style={{backgroundColor: this.rgb(258 - weight * 20, 60, 68)}}
                            onMouseEnter={() => handleMouseOver(col, row)}
                            onMouseLeave={() => { dehover(col, row) }}
                            onMouseDown={() => { handleMouseDown(col, row) }}
                        //onMouseEnter={() => addNode(col, row)}
                        //onMouseUp={() => handleMouseUp()}
                        >
                            {weight}
                        </div>
                    );
                } else {
                    return (
                        <div className={(this.state.isRendered === true ? "nodeRendered " + state : "nodeNotRendered")}
                        //sets the rgb value of the node based on weight amount
                        style={{backgroundColor: this.rgb(258 - weight * 20, 60, 68)}}
                            onMouseEnter={() => handleMouseOver(col, row)}
                            onMouseLeave={() => { dehover(col, row) }}
                            onMouseDown={() => { handleMouseDown(col, row) }}
                        //onMouseEnter={() => addNode(col, row)}
                        //onMouseUp={() => handleMouseUp()}
                        >
                        </div>
                    );
                }
            //triggers if state string of node is not weighted
            } else {
                if (displayWeight) {
                    return (
                        <div className={(this.state.isRendered === true ? "nodeRendered " + state : "nodeNotRendered")}
                            onMouseEnter={() => handleMouseOver(col, row)}
                            onMouseLeave={() => { dehover(col, row) }}
                            onMouseDown={() => { handleMouseDown(col, row) }}
                        //onMouseEnter={() => addNode(col, row)}
                        //onMouseUp={() => handleMouseUp()}
                        >
                            {weight}
                        </div>
                    );
                } else {
                    return (
                        <div className={(this.state.isRendered === true ? "nodeRendered " + state : "nodeNotRendered")}
                            onMouseEnter={() => handleMouseOver(col, row)}
                            onMouseLeave={() => { dehover(col, row) }}
                            onMouseDown={() => { handleMouseDown(col, row) }}
                        //onMouseEnter={() => addNode(col, row)}
                        //onMouseUp={() => handleMouseUp()}
                        >
                        </div>
                    );
                }
            }
        }
    }
}
