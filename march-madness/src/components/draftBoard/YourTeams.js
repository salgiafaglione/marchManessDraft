import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import BaseComponent from '../BaseComponent';

export default class YourTeam extends BaseComponent {

    render() {
        const { teamsDrafted } = this.props;
        let i = 1;
        return(
            <div>
                <Card>
                    <CardHeader>
                        <h3>YourTeam</h3>
                    </CardHeader>
                    <CardBody>
                        <ul>
                            {teamsDrafted.map((team, key) =>
                                <li key={team.id}>{i++}{') '}{team.SchoolName}</li>)
                            }
                        </ul>
                    </CardBody>
                </Card>
            </div>
        );
    }

}
