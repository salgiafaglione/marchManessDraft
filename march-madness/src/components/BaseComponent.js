import React from 'react';
import autoBind from 'react-autobind';

export default class BaseComponent extends React.Component {
    constructor() {
        super();
        autoBind(this);
        
    }
}