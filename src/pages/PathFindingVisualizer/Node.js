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
            opacity
        } = this.props;

        if (this.state.isLoading === true) {
            return (
                <div className={"node "}>
                    Yikes
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
