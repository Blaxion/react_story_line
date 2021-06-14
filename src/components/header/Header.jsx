import React from 'react';
import logo from './logo.svg';
import DemoComponent from "../DemoComponent.jsx";
import Navigation from "./navigation.jsx";
import DisplayTime from "./displayTime";
class Header extends React.Component {

    currentPage = "accueil";
    onNavigationParent =(destination) => {
        this.currentPage = destination;
        console.log(this.currentPage)
    }


    render() {

        
        
        
        return (
            <header className="App-header">
                <Navigation  onNavigation={this.onNavigationParent}/>
                <img src={logo} className="App-logo" alt="logo" />
                <div style={{ color: 'red' }}>{this.currentPage}</div>
                {
                    this.currentPage === "accueil" &&
                    <DemoComponent/>
                }
                {
                    this.currentPage === "heure" &&
                    <DisplayTime format="phpTime"/>
                }
                
            </header>
        );
    }
}

export default Header;