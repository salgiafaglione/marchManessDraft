import React from 'react';
import BaseComponent from '../BaseComponent';

import { Button } from 'reactstrap'

export default class DraftOrder extends BaseComponent {

    render() {
        return (
            <div>
                <Button className="btn btn-primary">Team 1</Button>
            </div>
        )
    }
}