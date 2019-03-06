import React from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'

import BaseComponent from "../BaseComponent";
import TeamsAvailable from './TeamsAvailable';
import TeamQueue from './TeamQueue';
import YourTeam from './YourTeams';

export default class DraftBoard extends BaseComponent {

    constructor() {
        super()

        this.state = {
            teams: [],
            queue:[]
        }
    }

    getTeamIndex(queue, teamSelected) {
        return queue.findIndex((data) => data.SchoolName === teamSelected);
    }

    removeFromQueue(team) {
        let teamsInQueue = this.state.queue;
        const index = this.getTeamIndex(teamsInQueue, team);
        if(index !== -1) {
            teamsInQueue.splice(index, 1);
        }

        this.setState({
            queue: teamsInQueue
        });
    }

    updateTeam(team, queueOrTeam) {
        let teams = this.state[queueOrTeam];


        if(queueOrTeam === 'teams'){
            teams.push(team)
        } else {
            const index = teams.findIndex((data) => data.SchoolName === team);

            if(index === -1){
                teams.push({
                    'SchoolName': team
                });
            }
        }

        this.setState({
            [queueOrTeam]: teams
        });
        
    }

    render() {
        return (
            <div>
                <Row>
                    <Col md="2">
                        <Card>
                            <CardHeader>
                                QUEUE
                            </CardHeader>
                            <CardBody>
                                <TeamQueue rowData={this.state.queue}/>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="8">
                        <TeamsAvailable removeFromQueue={this.removeFromQueue} updateYourTeam={this.updateTeam} />
                    </Col>
                    <Col md="2">
                        <YourTeam teamsDrafted={this.state.teams} />
                    </Col>
                </Row>
                
            </div>
        );
    }
}