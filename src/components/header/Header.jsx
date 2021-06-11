import React, { Component } from 'react';
import logo from './logo.svg';
import DemoComponent from "../DemoComponent.jsx";
import Navigation from "./navigation.jsx";
import DisplayTime from "./displayTime";
class Header extends Component {

    currentPage = "acceuil";

    render() {

        let pageContent;
        pageContent = <DisplayTime/> 
        this.currentPage == 'acceuil' && (pageContent = <DemoComponent />)
        
        return (
            <header className="App-header">
                <Navigation />
                <img src={logo} className="App-logo" alt="logo" />
                <div style={{ color: 'red' }}>{this.currentPage}</div>
                {pageContent}
            </header>
        );
    }
}

export default Header;