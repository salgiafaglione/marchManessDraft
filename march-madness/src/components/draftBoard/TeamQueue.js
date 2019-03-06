import React from 'react';
import BaseComponent from "../BaseComponent";

import '../../styles/App.css';
import DefaultGrid from '../DefaultGrid';

export default class TeamQueue extends BaseComponent {
    constructor() {
        super();
    
        this.state = {
            columnDefs: [
                {
                    headerName: "School",
                    field: "SchoolName",
                    rowDrag: true
                }
            ]
        };
    }

    render() {
        return (
            <div id="team-queue">
                <DefaultGrid
                    columnDefs={this.state.columnDefs}
                    rowData={this.props.rowData}
                />
            </div>
        );
    }
}