import React, { Component } from 'react';
import "./navigation.css";
class Navigation extends Component {
    navigation = (destination) =>{
        console.log('Il y a eu un clique'+ destination)
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