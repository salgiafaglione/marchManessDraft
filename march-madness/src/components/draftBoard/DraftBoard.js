import React from 'react';
import BaseComponent from "../BaseComponent";
import TeamsAvailable from './TeamsAvailable';
import TeamQueue from './TeamQueue';

export default class DraftBoard extends BaseComponent {
    render() {
        return (
            <div>
                <TeamsAvailable />
                <TeamQueue />
            </div>
        );
    }
}