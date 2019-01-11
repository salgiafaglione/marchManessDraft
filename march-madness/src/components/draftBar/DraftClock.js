import React from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import BaseComponent from "../BaseComponent";

import '../../styles/draftClock.css';

export default class DraftClock extends BaseComponent {
    constructor() {
        super();

        this.state = {
            seconds: 8
        }
    }

    myCallback() {
        let seconds = this.state.seconds;
        this.props.updatePickNumber();
        this.setState({ seconds: seconds++ }, () => {
            console.log(this.state.seconds);
        });
        
    }

    render() {
        return (
            <div id="draft-clock">
                <ReactCountdownClock seconds={this.state.seconds}
                    color="#000"
                    alpha={0.9}
                    size={50}
                    onComplete={this.myCallback}
                />
            </div>
        )
    }
}
