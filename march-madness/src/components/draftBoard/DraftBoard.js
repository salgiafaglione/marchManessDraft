import React from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'

import BaseComponent from "../BaseComponent";
import TeamsAvailable from './TeamsAvailable';
import TeamQueue from './TeamQueue';
import YourTeam from './YourTeams';

export default class DraftBoard extends BaseComponent {
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
                                <TeamQueue />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="8">
                        <TeamsAvailable />
                    </Col>
                    <Col md="2">
                        <YourTeam />
                    </Col>
                </Row>
                
            </div>
        );
    }
}