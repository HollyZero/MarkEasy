import React, { Component } from 'react';
import Navigation from './Navigation.js';

class ImportStLst extends Component {

    render(){
        return (
            <div>
                <Navigation></Navigation>

                <div className="col-sm-3">
                </div>
                <div className="col-lg-5 col-sm-6 col-12">
                    <h2>Import Student List</h2>
                    <br /><br /><br />
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Browse Student List..." readOnly />
                        <label className="input-group-btn">
              <span className="btn btn-primary">
                Browse <input type="file" style={{display: 'none'}} />
              </span>
                        </label>
                    </div>
                    <br /><br /><br /><br /><br />
                    <button type="button" className="btn btn-primary">Import</button>
                </div>
            </div>


        );
    }
}

export default ImportStLst;