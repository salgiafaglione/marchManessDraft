import React from 'react';
import { Row } from 'reactstrap'
import BaseComponent from "../BaseComponent";
import DraftClock from './DraftClock';
import DraftOrder from './DraftOrder';

export default class DraftBar extends BaseComponent {
    constructor() {
        super();

        this.state = {
            pickNumber: 0
        }
    }

    updatePickNumber() {
        let pickNumber = this.state.pickNumber;
        this.setState({ pickNumber: pickNumber++ });
    }

    render() {
        return (
            <Row>
                <DraftClock
                    pickNumber={this.state.pickNumber}
                    updatePickNumber={this.updatePickNumber}
                />
                <DraftOrder />
            </Row>
        );
    }
}
