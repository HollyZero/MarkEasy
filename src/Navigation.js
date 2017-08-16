/**
 * Created by Nyanko on 8/9/2017.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {

    render(){
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="/">Home</Link></li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown">Create
                                <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Create Rubric</a></li>
                                <li><Link to="./create_feedback"> Create Feedback</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/mark">Mark</Link></li>
                        <li><Link to="/edit">Edit</Link></li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">Import
                                <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Import Rubric</a></li>
                                <li><Link to="/importstlst">Import Student List</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">Export
                                <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Export Rubric</a></li>
                                <li><a href="#">Export Student List</a></li>
                                <li><a href="#">Export Feedback</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;