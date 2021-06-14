import React from 'react';

class DisplayTime extends React.Component {

    currentPage = "heure";
    render() {
        let dateCourante = new Date();
        let tempsJavascript = dateCourante.getTime();
        let datecomplete = dateCourante.toLocaleTimeString()
        console.log(this.props);
        return (
            <div>
                {this.props.format === 'jsTime' &&
                    <p>
                        temps Javascript: {tempsJavascript} millisecondes
                    </p>
                }
                {this.props.format === 'phpTime' &&
                    <p>
                        temps PHP: {tempsJavascript / 1000} secondes
                    </p>
                }
                {this.props.format === 'humanTime' &&
                    <p>
                        Date pour un Humain: {datecomplete}
                    </p>
                }
            </div>
        );
    }
}

export default DisplayTime;