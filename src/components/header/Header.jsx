import React from 'react';
import Navigation from "./navigation.jsx";
import Content from "../content/content.jsx";
class Header extends React.Component {
    state = {
        currentPage : "accueil"
    }
    

    onNavigationParent =(destination) => {
        this.setState({
            currentPage : destination
        })
        
        
    }

    render() {
        return (
            <div className="App-header">
            <header className="Custom-Header" >
                <Navigation  onNavigation={this.onNavigationParent}/>
            </header>
            <Content currentPage ={this.state.currentPage}/>
            </div>
        );
    }
}

export default Header;