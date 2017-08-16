import React, { Component } from 'react';
import Navigation from './Navigation.js';

class ExportFeedback extends Component {

    render(){
        return (
            <div>
                <Navigation></Navigation>

                <div className="row">
                    <div className="col-sm-3" />
                    <div className="col-lg-5 col-sm-6 col-12">
                        <h2>Export Feedback Sheets</h2>
                        <br />
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search for feedback sheet title..." />
                            <label className="input-group-btn">
                            <span className="btn btn-primary" type="submit">
                              Search
                            </span>
                            </label>
                        </div>
                        <span className="help-block">
                            All Feedback sheets containing entered keywords will be displayed below.
                        </span>
                    </div>
                </div>
                <br /><br />
                <div className="row">
                    <div className="col-sm-2" />
                    <div className="col-sm-8" style={{backgroundColor: 'pink'}}>
                        display search results here
                        <br /><br /><br /><br /><br /><br />
                    </div>
                </div>
                <br /><br />
                <div className="col-sm-7"> </div>
                <div className="col-sm-4">
                    <button type="button" className="btn btn-primary">Export</button>
                </div>
                <br /><br /><br /><br /><br /><br />

            </div>


        );
    }
}

export default ExportFeedback;