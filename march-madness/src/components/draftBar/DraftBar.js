import React from 'react';
import BaseComponent from "../BaseComponent";
import DraftClock from './DraftClock';

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
            <div>
                <DraftClock
                    pickNumber={this.state.pickNumber}
                    updatePickNumber={this.updatePickNumber}
                />
                
            </div>
        );
    }
}
