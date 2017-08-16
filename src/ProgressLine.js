/**
 * Created by Nyanko on 8/15/2017.
 * Display circle ==> circle ===> circle effect
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';


class ProgressLine extends Component {

    constructor(props){
        super(props);
        this.state = {
            stage: props.stage,
        };
        console.log(this.state);
        console.log(this.props);
    }

    /**
     * Update stage accordingly BEFORE updating component
     * @param nextProps
     */
    componentWillReceiveProps(nextProps){
        this.setState({stage:nextProps.stage});
    }

    /**
     * First time after rendering empty canvas
     */
    componentDidMount(){
        this.componentDidUpdate();
    }

    /**
     * Draw on the canvas
     */
    componentDidUpdate(){
        let cnv = ReactDOM.findDOMNode(this.refs.progress);
        let ctx = cnv.getContext("2d");
        let height = cnv.height;
        let width  = height / 2; //width of individual component

        let coord = {
            y : 0,
            x : 0,
            padding: 10,
        };

        let stageColors = {
            first : '#00cc66',
            second: ((this.state.stage === 2 || this.state.stage === 3)? '#00cc66':'#ffc266'),
            third: ((this.state.stage === 3)?'#00cc66':'#ffc266'),
        };

        console.log(this.state.stage);
        console.log(stageColors);

        this.drawCircle(ctx,coord, width, width * 2, height, stageColors.first);
        // console.log(coord);
        this.drawRightArrow(ctx,coord, width, height, stageColors.second,5);
        this.drawRightArrow(ctx,coord, width, height, stageColors.second,5);
        this.drawRightArrow(ctx,coord, width, height, stageColors.second,5);
        this.drawCircle(ctx,coord, width, width * 2, height, stageColors.second);
        this.drawRightArrow(ctx,coord, width, height, stageColors.third,5);
        this.drawRightArrow(ctx,coord, width, height, stageColors.third,5);
        this.drawRightArrow(ctx,coord, width, height, stageColors.third,5);
        this.drawCircle(ctx,coord, width, width * 2, height, stageColors.third);
    }

    render(){
        return(
            <canvas width="720" height="100" ref="progress"> Your browswer does not support Canvas</canvas>
        );
    }

    drawCircle(ctx, coord, r, width, height, bc){
        ctx.beginPath();
        coord.x = coord.x + coord.padding;
        ctx.arc(coord.x + width/2,coord.y + height/2, r,0,2*Math.PI);
        ctx.fillStyle = bc;
        ctx.fill();
        coord.x = coord.x + 2*r + coord.padding;
    }

    drawRightArrow(ctx,coord, width, height, bc, lineW){
        ctx.beginPath();
        ctx.moveTo(coord.x,coord.y + 10);
        ctx.lineTo(coord.x + width, coord.y + height/2);
        ctx.lineTo(coord.x, coord.y + height - 10);
        ctx.strokeStyle = bc;
        ctx.lineWidth = lineW;
        ctx.stroke();
        coord.x = coord.x + width + coord.padding;
    }
}

ProgressLine.propTypes = {
    stage : PropTypes.number.isRequired,
};

export default ProgressLine;
