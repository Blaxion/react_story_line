import React, { Component } from 'react';

class DisplayTime extends Component {
    render() {
        let dateCourante = new Date();
        let tempsJavascript = dateCourante.getTime();
        let datecomplete = dateCourante.toLocaleTimeString()
        return (
            <div>
                <p>
                    temps Javascript: {tempsJavascript} millisecondes
                                </p>
                <p>
                    temps PHP: {tempsJavascript / 1000} secondes
                                </p>
                <p>
                    Date pour un Humain: {datecomplete}
                </p>
            </div>
        );
    }
}

export default DisplayTime;