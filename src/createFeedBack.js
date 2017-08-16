/**
 * Created by Nyanko on 8/10/2017.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation.js';
import ProgressLine from './ProgressLine.js';

class CreateFeedBack extends Component {

    constructor(props) {
        super(props);
        this.handleStage1 = this.handleStage1.bind(this);
        this.handleStage2 = this.handleStage2.bind(this);
        this.handleStage3 = this.handleStage3.bind(this);
        this.saveFeedback = this.saveFeedback.bind(this);
        this.reset = this.reset.bind(this);
        this.state ={
            stage: 1
        };
    }

    handleStage1(){
        this.componentWillMount(1);
    }

    /**
     * Brings the page to create feedback #2
     */
    handleStage2(){
        //TODO: check if user selected a valid feedback
        // history.push('/create_feedback/2');
        this.componentWillMount(2);

    }

    handleStage3(){
        this.componentWillMount(3);
    }

    saveFeedback(){
        //TODO: do a popup to notify user it has been saved
        // this.componentWillMount(0);
        var ptrMsg = ReactDOM.findDOMNode(this.refs.successMsg);
        var ptrPrev = ReactDOM.findDOMNode(this.refs.prev3);
        var ptrFin = ReactDOM.findDOMNode(this.refs.finish);

        console.log(        ptrMsg.className);
        ptrMsg.className = ptrMsg.className.replace("Hide","Display");
        console.log(        ptrMsg.className);

        ptrPrev.disabled = true;
        ptrFin.disabled = true;

        //TODO: actually POST through REST to server to save it (only the first time)
    }

    reset(){
        this.componentWillMount(1);
    }

    componentWillMount(num){
        if (typeof(num) === 'number') {
            this.setState({stage: num}); //async call! cannot guarantee the change if the change is in the same method!
        }
    }

    /**
     * TODO: not mobile friendly
     * @returns {XML}
     */
    render(){
        //console.log(this.state);
        switch(this.state.stage) {
            case 1:
                return(
                    <div>
                        <Navigation/>
                            <div className="center">
                                <ProgressLine stage={1}/>
                                <h1 className="Display">Create Feedback...</h1>
                                <button className="btn btn-primary" onClick={this.handleStage2}> Next</button>
                            </div>
                    </div>
                    );
            case 2:
                return(
                    <div>
                        <Navigation/>
                        <div className="center">
                            <ProgressLine stage={2}/>
                            <h1 className="Display">Create Feedback 2 ...</h1>
                            <button className="btn btn-primary" onClick={this.handleStage1}> Previous </button>
                            <button className="btn btn-primary" onClick={this.handleStage3}> Next</button>
                        </div>
                    </div>
                );
                break;
            case 3:
                return(
                    <div>
                        <Navigation/>
                        <div className="center">
                            <ProgressLine stage={3}/>
                            <div className="alert alert-success Hide" role="alert" ref="successMsg">
                                <button type="button" className="close" onClick={this.reset}>
                                    <span>&times;</span>
                                </button>
                                <strong>Successfully saved feedback</strong>
                            </div>
                            <h1 className="Display">Create Feedback 3...</h1>
                            <button className="btn btn-primary" onClick={this.handleStage2} ref="prev3"> Previous </button>
                            <button className="btn btn-primary" onClick={this.saveFeedback} ref="finish"> Finish </button>
                        </div>
                    </div>
                );
            default:
                break;
        }

    }
}

export default CreateFeedBack;