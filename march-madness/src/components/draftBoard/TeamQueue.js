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
                    field: "ShortDisplayName",
                    rowDrag: true
                }
            ],
            rowData: [
                {
                    "ShortDisplayName": "UNC"
                },
                {
                    "ShortDisplayName": "VIR"
                }
            ]
        };
    }

    render() {
        return (
            <div id="team-queue">
                <DefaultGrid
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}
                />
            </div>
        );
    }
}