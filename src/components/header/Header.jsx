import React from 'react';
import logo from './logo.svg';
import DemoComponent from "../DemoComponent.jsx";
import Navigation from "./navigation.jsx";
import DisplayTime from "./displayTime";
class Header extends React.Component {
    state = {
        formatTime:"phpTime"
    }

    currentPage = "heure";

    onNavigationParent =(destination) => {
        this.currentPage = destination;
        console.log(this.currentPage)
    }

    handleClick=(format)=>{
        this.setState({
            formatTime:format
        })
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
                    <>
                    <DisplayTime format={this.state.formatTime}/>
                    <button onClick={()=>this.handleClick('jsTime')}>Javascript</button>
                    <button onClick={()=>this.handleClick('phpTime')}>PHP</button>
                    <button onClick={()=>this.handleClick('humanTime')}>Humain</button>
                    </>
                    
                }
                
            </header>
        );
    }
}

export default Header;