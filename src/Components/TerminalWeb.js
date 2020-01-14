import React, { Component } from 'react';
import Terminal from 'terminal-in-react';

class TerminalWeb extends Component {
    showMsg = () => 'Hello World'
    
    

  render() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <Terminal
            colorTerminal = "black"
            color='green'  
            commands={{
              'open-google': () => window.open('google.com', '_blank'),
              showmsg: this.showMsg,
              popup: () => alert('Tejuino.exe was cool right?'),
              white: () => this.colorTerminal = "white"
            }} 
            backgroundColor={(() => {
              switch (this.colorTerminal) {
                case "black":   return "black";
                case "white": return "white";
                default:      return "black";
              }
            })()}
            barColor='black'
            style={{ fontWeight: "bold", fontSize: "1em" }}
            
            descriptions={{
              'open-google': 'opens google.com',
              showmsg: 'shows a message',
              alert: 'alert', popup: 'alert'
            }}
            msg='This is an experimental Terminal in React, give it a try! - Carlos Robles'
          />
        </div>
      );
  }
}

export default TerminalWeb;
