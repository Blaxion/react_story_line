import React from 'react';
import logo from './logo.svg';
import DemoComponent from "./DemoComponent.jsx";
import DisplayTime from "./displayTime.jsx";
// finir pour aujourd'hui tout le cleanse du repo.
// Exercice eShop demain
// Hooks vendredi 
class Content extends React.Component {
    state = {
        formatTime:"phpTime"
    }
    
    handleClick=(format)=>{
        this.setState({
            formatTime:format
        })
    }
    render() {
        return (
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <div style={{ color: 'red' }}>{this.currentPage}</div>
                {
                    this.props.currentPage === "accueil" &&
                    <DemoComponent/>
                }
                {
                    this.props.currentPage === "heure" &&   
                    <DisplayTime format={this.state.formatTime}/>
                }
                {
                    this.props.currentPage === "configuration" &&
                    <>
                    <button onClick={()=>this.handleClick('jsTime')}>Javascript</button>
                    <button onClick={()=>this.handleClick('phpTime')}>PHP</button>
                    <button onClick={()=>this.handleClick('humanTime')}>Humain</button>
                    </>
                }
            </div>
        );
    }
}

export default Content;