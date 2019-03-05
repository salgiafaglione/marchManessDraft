import React from 'react';
import BaseComponent from '../BaseComponent';

import { Button, Card, CardBody, CardHeader, Row } from 'reactstrap';

export default class DraftOrder extends BaseComponent {


    componentDidMount() {

    }

    render() {
        return (
            <Row>
                <Card>
                    <CardHeader>
                        <p>ON THE CLOCK</p>
                    </CardHeader>
                    <CardBody>
                        <Button className="btn btn-primary team-on-clock">{this.props.teamOnClock}</Button>
                    </CardBody>
                </Card>
                <Card style={{ width: '1300px' }}>
                    <CardBody>
                        <Button className="btn btn-primary">Team 2</Button>
                        <Button className="btn btn-primary">Team 3</Button>
                        <Button className="btn btn-primary">Team 4</Button>
                        <Button className="btn btn-primary">Team 5</Button>
                        <Button className="btn btn-primary">Team 6</Button>
                        <Button className="btn btn-primary">Team 7</Button>
                        <Button className="btn btn-primary">Team 8</Button>
                    </CardBody>
                </Card>
            </Row>
        )
    }
}