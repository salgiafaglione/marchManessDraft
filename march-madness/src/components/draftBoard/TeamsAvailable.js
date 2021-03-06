import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import BaseComponent from "../BaseComponent";
import { AgGridReact } from 'ag-grid-react';

export default class TeamsAvailable extends BaseComponent {
    constructor() {
        super();

        this.state = {
            selectedRow: [],
            columnDefs: [
                {
                    headerName: "Rank",
                    field: "ApRank",
                    sortable: true,
                    filter: true,
                    rowDrag: true
                },
                {
                    headerName: "School",
                    field: "SchoolName",
                    sortable: true,
                    filter: true
                },
                {
                    headerName: "Record",
                    field: "Record",
                    sortable: true,
                    filter: true
                },
                {
                    headerName: "Conference Record",
                    field: "ConferenceWins",
                    sortable: true,
                    filter: true
                },
                {
                    headerName: "Conference",
                    field: "Conference",
                    sortable: true,
                    filter: true
                }

            ],
            rowSelection: "single",
            rowData: [
                {
                    "TeamID": 334,
                    "Key": "GNZG",
                    "Active": true,
                    "SchoolName": "Gonzaga Bulldogs",
                    "ApRank": 1,
                    "Record": "29-2",
                    "ConferenceWins": "16-0",
                    "ConferenceLosses": 0,
                    "ConferenceID": 32,
                    "Conference": "West Coast",
                    // "TeamLogoUrl": "https:\/\/s3-us-west-2.amazonaws.com\/static.fantasydata.com\/logos\/ncaa\/0.png",
                    "ShortDisplayName": "GNZG"
                }, 
                {
                    "TeamID": 22,
                    "Key": "VIR",
                    "Active": true,
                    "SchoolName": "Virginia Cavaliers",
                    "ApRank": 2,
                    "Record": "27-2",
                    "ConferenceWins": "15-2",
                    "ConferenceLosses": 2,
                    "GlobalTeamID": 60000022,
                    "ConferenceID": 3,
                    "Conference": "Atlantic Coast",
                    // "TeamLogoUrl": "https:\/\/s3-us-west-2.amazonaws.com\/static.fantasydata.com\/logos\/ncaa\/22.png",
                    "ShortDisplayName": "VIR"
                },
                {
                    "TeamID": 21,
                    "Key": "NCAR",
                    "Active": true,
                    "SchoolName": "North Carolina Tar Heels",
                    "ApRank": 3,
                    "Record": "24-5",
                    "ConferenceWins": "14-2",
                    "ConferenceLosses": 2,
                    "GlobalTeamID": 60000021,
                    "ConferenceID": 3,
                    "Conference": "Atlantic Coast",
                    // "TeamLogoUrl": "https:\/\/s3-us-west-2.amazonaws.com\/static.fantasydata.com\/logos\/ncaa\/21.png",
                    "ShortDisplayName": "UNC"
                },
                {
                    "TeamID": 26,
                    "Key": "DUKE",
                    "Active": true,
                    "SchoolName": "Duke Blue Devils",
                    "ApRank": 4,
                    "Record": "25-4",
                    "ConferenceWins": "13-3",
                    "ConferenceLosses": 3,
                    "GlobalTeamID": 60000026,
                    "ConferenceID": 3,
                    "Conference": "Atlantic Coast",
                    // "TeamLogoUrl": "https:\/\/s3-us-west-2.amazonaws.com\/static.fantasydata.com\/logos\/ncaa\/26.png",
                    "ShortDisplayName": "DUKE"
                },
                {
                    "TeamID": 277,
                    "Key": "TENN",
                    "Active": true,
                    "SchoolName": "Tennessee Volunteers",
                    "ApRank": 5,
                    "Record": "26-3",
                    "ConferenceWins": "14-2",
                    "ConferenceLosses": 2,
                    "GlobalTeamID": 60000277,
                    "ConferenceID": 26,
                    "Conference": "Southeastern",
                    // "TeamLogoUrl": "https:\/\/s3-us-west-2.amazonaws.com\/static.fantasydata.com\/logos\/ncaa\/277.png",
                    "ShortDisplayName": "TENN"
                },
                {
                    "TeamID": 268,
                    "Key": "UK",
                    "Active": true,
                    "SchoolName": "Kentucky Wildcats",
                    "ApRank": 6,
                    "Record": "24-5",
                    "ConferenceWins": "13-3",
                    "ConferenceLosses": 3,
                    "GlobalTeamID": 60000268,
                    "ConferenceID": 26,
                    "Conference": "Southeastern",
                    // "TeamLogoUrl": "https:\/\/s3-us-west-2.amazonaws.com\/static.fantasydata.com\/logos\/ncaa\/268.png",
                    "ShortDisplayName": "UK"
                },
                {
                    "TeamID": 95,
                    "Key": "MICH",
                    "Active": true,
                    "SchoolName": "Michigan Wolverines",
                    "ApRank": 7,
                    "Record": "26-4",
                    "ConferenceWins": "15-4",
                    "ConferenceLosses": 4,
                    "GlobalTeamID": 60000095,
                    "ConferenceID": 9,
                    "Conference": "Big Ten",
                    // "TeamLogoUrl": "https:\/\/s3-us-west-2.amazonaws.com\/static.fantasydata.com\/logos\/ncaa\/95.png",
                    "ShortDisplayName": "MICH"
                },
                {
                    "TeamID": 111,
                    "Key": "TXTECH",
                    "Active": true,
                    "SchoolName": "Texas Tech Red Raiders",
                    "ApRank": 8,
                    "Record": "24-5",
                    "ConferenceWins": "12-4",
                    "GlobalTeamID": 60000111,
                    "ConferenceID": 10,
                    "Conference": "Big 12",
                    // "TeamLogoUrl": "https:\/\/s3-us-west-2.amazonaws.com\/static.fantasydata.com\/logos\/ncaa\/111.png",
                    "ShortDisplayName": "TTU"
                },
                {
                    "SchoolName": "Temple Owls",
                    "ApRank": 9,
                    "Record": "21-8",
                    "Conference": "American Athletic",
                    "ConferenceWins": "11-5"
                }
            ]
        }
    }

    getRowNodeId(data) {
        return data.TeamID;
      }

    onGridReady = (params) => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }

    addToQueueClick() {
        let selectedRow = this.gridApi.getSelectedRows();
        if(selectedRow.length !== 0){
            this.props.updateYourTeam(selectedRow[0].SchoolName, 'queue');
        }
    }

    onDraftNowClick() {
        let selectedRow = this.gridApi.getSelectedRows();
        if(selectedRow.length !== 0){
            this.props.updateYourTeam(selectedRow[0], 'teams');
            this.removeTeamAfterDrafted(selectedRow[0].TeamID);
            this.props.removeFromQueue(selectedRow[0].SchoolName);
        }
    }

    removeTeamAfterDrafted(teamId) {
        let rowData = this.state.rowData;

        let index = this.state.rowData.findIndex((data) => data.TeamID === teamId);

        rowData.splice(index, 1);
        this.setState({
            rowData
        })

        this.gridApi.setRowData(rowData);
    }

    render() {
        return (
            <Card>
                <CardHeader>
                    <Row>
                        <Col md="4">
                        <Button id="addToQueue" onClick={this.addToQueueClick} style={{ backgroundColor: "Blue" }}>Add To Queue</Button>
                        </Col>
                        <Col md="4">
                            <h3>Teams Available!</h3>
                        </Col>
                        <Col md="4">
                            <Button id="draftNow" onClick={this.onDraftNowClick} style={{ backgroundColor: "Green" }}>Draft Now!</Button>
                        </Col>
                    </Row>
                </CardHeader>
                <CardBody className="ag-theme-balham" style={{ height: '500px' }}>
                    <AgGridReact
                        animateRows={true}
                        columnDefs={this.state.columnDefs}
                        getRowNodeId={this.getRowNodeId}
                        onGridReady={this.onGridReady}
                        rowData={this.state.rowData}
                        rowDragManaged={true}
                        rowSelection={this.state.rowSelection}
                        suppressDragLeaveHidesColumns={true}
                    />
                </CardBody>
            </Card>
        );
    }
}