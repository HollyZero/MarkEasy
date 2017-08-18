/**
 * Created by Nyanko on 8/9/2017.
 */
import React, { Component } from 'react';

class CreateRubric extends Component {

    render(){
        return (
            <div className="container">
            <h1>Input Group Button</h1>
            <form action="/action_page.php">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter title here:" name="Enter title here:" />
                <div className="input-group-btn">
                <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-pencil" /></button>
                </div>
            </div>
        </form></div>
        );
    }
}

export default CreateRubric;