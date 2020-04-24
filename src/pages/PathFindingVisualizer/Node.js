import React, { Component } from 'react';
import "../../css/Node.css"

export default class Node extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            color: "none",
            isRendered: this.props.isRendered
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: false,
            color: "none",
            col: this.props.col,
            row: this.props.row,
            isRendered: false
        });

        setTimeout(
            function () {
                this.setState({ isRendered: true })
            }.bind(this),
            this.props.renderTime * 5
        );
    }
    rgb(r, g, b){
        r = Math.floor(r);
        g = Math.floor(g);
        b = Math.floor(b);
        return ["rgb(",r,",",g,",",b,")"].join("");
    }
    render() {
        const {
            col,
            row,
            addNode,
            state,
            handleMouseUp,
            handleMouseDown,
            handleMouseOver,
            dehover,
            weight,
            opacity,
            displayWeight,
        } = this.props;

        if (this.state.isLoading === true) {
            return (
                <div className={"node "}>
                    Something really bad happened
                </div>
            );
        } else {
            if (state.substring(0,8) == "weighted") {
                let weightAmount = parseInt(state.substring(8));
                
                if (displayWeight) {
                    return (
                        <div className={(this.state.isRendered === true ? "nodeRendered " + state : "nodeNotRendered")}
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
