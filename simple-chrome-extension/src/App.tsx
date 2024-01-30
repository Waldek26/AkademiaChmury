import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [colour, setColour] = useState('#000000');

  const onClick = async () => {
    let [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript({ 
        target: { tabId: tab.id! },
        args: [colour],
        func: (colour) => {
            document.body.style.backgroundColor = colour;
        }
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="50px" />
        <p>Click picker to choose new background color</p>
        <input type="color" value={colour} onChange={(e)=>{
          let newBgColor = e.target.value.trim();
          setColour(newBgColor);
        }} />
        <a role="button" tabIndex={0} onClick={onClick} >
          Click to change
        </a>
      </header>
    </div>

  );
}

export default App;
