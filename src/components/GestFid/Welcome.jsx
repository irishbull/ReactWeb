import React, { Component } from 'react';

export default class WelcomeComponent extends Component {

    render() {
        return ( 
            <div className="WelcomeComponent">
                <p>Benvenuti in GestFid</p>
                <p>Saluti {this.props.match.params.userid}</p>
            </div>
        )
    }
}
