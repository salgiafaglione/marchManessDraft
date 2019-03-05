import React from 'react';
import { Row, Card, CardBody, Col } from 'reactstrap'
import BaseComponent from "../BaseComponent";
import DraftClock from './DraftClock';
import DraftOrder from './DraftOrder';

export default class DraftBar extends BaseComponent {
    constructor() {
        super();

        this.state = {
            pickNumber: 0,
            teamOnClock: 'Sal'
        }
    }

    updatePickNumber() {
        let pickNumber = this.state.pickNumber;
        this.setState({ pickNumber: pickNumber++ });
    }

    render() {
        return (
            <Row>
                <Col md="1">
                    <Card>
                        <CardBody>
                            <DraftClock
                                pickNumber={this.state.pickNumber}
                                updatePickNumber={this.updatePickNumber}
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col md="11">
                    <Card style={{ width: '1500px' }}>
                        <CardBody>
                            <DraftOrder teamOnClock={this.state.teamOnClock} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}
