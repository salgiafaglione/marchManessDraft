import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import BaseComponent from '../BaseComponent';

export default class YourTeam extends BaseComponent {

    render() {
        return(
            <div>
                <Card>
                    <CardHeader>
                        Your Team
                    </CardHeader>
                    <CardBody>
                        1:<br />
                        2:<br />
                        3:<br />
                        4:<br />
                        5:<br />
                        6:<br />
                        7:<br />
                        8:<br />
                    </CardBody>
                </Card>
            </div>
        );
    }

}
