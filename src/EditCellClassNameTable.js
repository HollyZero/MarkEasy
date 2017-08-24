/**
 * Created by Nyanko on 8/9/2017.
 */
import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn, InsertButton} from 'react-bootstrap-table';
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
    return 'Job Status must be a integer!';
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


    render() {
        const options = {
          insertBtn: this.createCustomInsertButton
        };
        //..
        return (
        <BootstrapTable data={ jobs } cellEdit={ cellEditProp } options={ options } insertRow>
            <TableHeaderColumn dataField='id' isKey={ true }>Job ID</TableHeaderColumn>
            <TableHeaderColumn dataField='status' editable={ { validator: jobStatusValidator } } editColumnClassName={ this.editingJobStatus } invalidEditColumnClassName={ this.invalidJobStatus }>Job Status</TableHeaderColumn>
            <TableHeaderColumn dataField='name' editable={ { type: 'textarea', validator: jobNameValidator } } editColumnClassName='editing-jobsname-class' invalidEditColumnClassName='invalid-jobsname-class'>Job Name</TableHeaderColumn>
            <TableHeaderColumn dataField='type' editable={ { type: 'select', options: { values: jobTypes } } }>Job Type</TableHeaderColumn>
            <TableHeaderColumn dataField='active' editable={ { type: 'checkbox', options: { values: 'Y:N' } } }>Active</TableHeaderColumn>
        </BootstrapTable>
        );
    }
}
