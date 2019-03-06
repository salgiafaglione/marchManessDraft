import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';

import BaseComponent from './BaseComponent';

export default class DefaultGrid extends BaseComponent {

    componentDidUpdate() {
        this.gridApi.setRowData(this.props.rowData);
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }

    render() {
        return(
            <div className="ag-theme-balham" style={{ height: '500px' }}>
                <AgGridReact
                    animateRows={true}
                    columnDefs={this.props.columnDefs}
                    onGridReady={this.onGridReady}
                    rowData={this.props.rowData}
                    rowDragManaged={true}
                    rowSelection={this.props.rowSelection}
                    suppressDragLeaveHidesColumns={true}
                />
            </div>
        );
    }
}
