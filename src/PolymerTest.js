import React, {Component} from 'react'
import './App.css'

export class PolymerTest extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: 'Click a button'
        }
    }

    render() {
        return (
            <div>
                <adp-tile title="ADP Tile Component">
                    <div>
                        <adp-button id="primaryButton" 
                            onClick={(e) => this.handlePrimaryButtonClick(e)} 
                            unresolved>
                                Primary Button
                        </adp-button>
                        
                        <adp-button id="secondaryButton" 
                            onClick={(e) => this.handleSecondaryButtonClick(e)}
                            styleis="secondary" 
                            unresolved>
                                Secondary Button
                        </adp-button>
                    </div>
                    
                    <div id="messageDiv">
                        <adp-span id="message">{this.state.message}</adp-span>
                    </div>
                </adp-tile>
            </div>
        )
    }

    handlePrimaryButtonClick(e) {
        const timestamp = new Date();
        this.setState({
            message: 'Primary Button Clicked at ' + timestamp.toLocaleTimeString()
        });
    }

    handleSecondaryButtonClick(e) {
        const timestamp = new Date();
        this.setState({
            message: 'Secondary Button Clicked at ' + timestamp.toLocaleTimeString()
        });
    }
}
