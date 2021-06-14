import React from 'react';
import "./navigation.css";
class Navigation extends React.Component {

    navigation = (destination) => {
        console.log(this.props);
        this.props.onNavigation(destination);
    }
    render() {
        return (
            <nav>
                <button onClick={() => this.navigation('accueil')}>Accueil</button>
                <button onClick={() => this.navigation('heure')}>Heure</button>
                <button onClick={() => this.navigation('configuration')}>Configuration</button>
            </nav>
        );
    }
}
export default Navigation;