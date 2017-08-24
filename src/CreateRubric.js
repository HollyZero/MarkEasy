/**
 * Created by Nyanko on 8/9/2017.
 */
import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import EditCellClassNameTable from './EditCellClassNameTable';
import Navigation from './Navigation.js';
import styles from './CreateRubric.scss';
var ReactDOM = require('react-dom');
var ReactBsTable  = require('react-bootstrap-table');

// var BootstrapTable = ReactBsTable.BootstrapTable;
// var TableHeaderColumn = ReactBsTable.TableHeaderColumn;


class CreateRubric extends Component {

    render(){
        return (            
            <div>
            <Navigation />
            <h1>Input Group Button</h1>
            <form action="/action_page.php">
            <div className={styles.inputgroup}>
                <input type="text" className="form-control" placeholder="Enter title here:" name="Enter title here:" />
                <div className="input-group-btn">
                <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-pencil" /></button>
                </div>
            </div>
            <EditCellClassNameTable/>
        </form></div>        
        );
    }
}

// var RubricTable = React.createClass({
//   render: function() {
//     return (
//         <BootstrapTable data={products} striped hover>
//             <TableHeaderColumn isKey dataField='id'>Question ID</TableHeaderColumn>
//             <TableHeaderColumn dataField='name'>Question Description</TableHeaderColumn>
//             <TableHeaderColumn dataField='price'>Total Marks</TableHeaderColumn>
//         </BootstrapTable>
//         // document.getElementById('basic')
//     );
//   }
// });
export default CreateRubric;