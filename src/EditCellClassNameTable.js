/**
 * Created by Nyanko on 8/9/2017.
 */
import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn, InsertButton, DeleteButton} from 'react-bootstrap-table';
import styles from './EditCellClassNameTable.scss';
// with es5
var ReactDOM = require('react-dom');
var ReactBsTable  = require('react-bootstrap-table');

// var BootstrapTable = ReactBsTable.BootstrapTable;
// var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

var jobs = [{
      id: 1,
      status: "Product1",
      name: 120,
      type: 120,
      active: 'Y'
  }];

const jobTypes = [ 'A', 'B', 'C', 'D' ];


const cellEditProp = {
  mode: 'click',
  blurToSave: true
};

// validator function pass the user input value and should return true|false.
function jobNameValidator(value) {
  const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
  if (!value) {
    response.isValid = false;
    response.notification.type = 'error';
    response.notification.msg = 'Value must be inserted';
    response.notification.title = 'Requested Value';
  } else if (value.length < 10) {
    response.isValid = false;
    response.notification.type = 'error';
    response.notification.msg = 'Value must have 10+ characters';
    response.notification.title = 'Invalid Value';
  }
  return response;
}

function jobStatusValidator(value) {
  const nan = isNaN(parseInt(value, 10));
  if (nan) {
    return 'Total Mark must be a integer!';
  }
  return true;
}

function handleInsertButtonClick(onClick){
  // Custom your onClick event here,
  // it's not necessary to implement this function if you have no any process before onClick
  // console.log('This is my custom function for InserButton click event');
  // onClick();
}

export default class EditCellClassNameTable  extends Component {
    invalidJobStatus = (cell, row) => {
        console.log(`${cell} at row id: ${row.id} fails on editing`);
        return 'invalid-jobstatus-class';
    }

    editingJobStatus = (cell, row) => {
        console.log(`${cell} at row id: ${row.id} in current editing`);
        return 'editing-jobstatus-class';
    }
    handleInsertButtonClick = (onClick) => {
      // Custom your onClick event here,
      // it's not necessary to implement this function if you have no any process before onClick
      console.log('This is my custom function for InserButton click event');
      onClick();
    }
    createCustomInsertButton = (onClick) => {
      return (
        <InsertButton
          btnText='Add'
          btnContextual='btn-warning'
          className='my-custom-class'
          btnGlyphicon='glyphicon-edit'
          onClick={ () => this.handleInsertButtonClick(onClick) }/>
      );
    }
    //...

    handleDeleteButtonClick = (onClick) => {
      // Custom your onClick event here,
      // it's not necessary to implement this function if you have no any process before onClick
      console.log('This is my custom function for DeleteButton click event');
      onClick();
    }
    createCustomDeleteButton = (onClick) => {
      return (
        <DeleteButton
          btnText='Delete'
          btnContextual='btn-warning'
          className='my-custom-class'
          btnGlyphicon='glyphicon-edit'
          onClick={ () => this.handleDeleteButtonClick(onClick) }/>
      );
    }
    //...

    render() {
        const options = {
          insertBtn: this.createCustomInsertButton,
          deleteBtn: this.createCustomDeleteButton
        };
        const selectRow = {
          mode: 'checkbox'
        };
        //..
        return (
        <BootstrapTable data={ jobs } selectRow={ selectRow } cellEdit={ cellEditProp } options={ options } insertRow deleteRow> 
            <TableHeaderColumn dataField='id' isKey={ true }>Question Number</TableHeaderColumn>
            <TableHeaderColumn dataField='status' editable={ { validator: jobStatusValidator } } editColumnClassName={ this.editingJobStatus } invalidEditColumnClassName={ this.invalidJobStatus }>Total Mark</TableHeaderColumn>
            <TableHeaderColumn dataField='name' editable={ { type: 'textarea', validator: jobNameValidator } } editColumnClassName='editing-jobsname-class' invalidEditColumnClassName='invalid-jobsname-class'>Question Description</TableHeaderColumn>
            <TableHeaderColumn dataField='type' editable={ { type: 'select', options: { values: jobTypes } } }>Question Type</TableHeaderColumn>
            <TableHeaderColumn dataField='active' editable={ { type: 'checkbox', options: { values: 'Y:N' } } }>Active</TableHeaderColumn>
        </BootstrapTable>
        );
    }
}
