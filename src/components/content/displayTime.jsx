import React from 'react';

class DisplayTime extends React.Component {
    currentPage = "heure"
    state = {
        dateCourante : new Date(),
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                dateCourante : new Date(),
            })
        }, 1000)
    }
    

    render() {
        let tempsJavascript = this.state.dateCourante.getTime();
        let datecomplete = this.state.dateCourante.toLocaleTimeString();
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